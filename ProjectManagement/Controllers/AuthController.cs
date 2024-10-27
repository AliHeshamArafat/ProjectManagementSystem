using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("auth")]
public class AuthController : ControllerBase
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;
    private readonly IConfiguration _configuration;
    private readonly ITokenService _tokenService;
    public AuthController(UserManager<User> userManager, SignInManager<User> signInManager, IConfiguration configuration, ITokenService tokenService)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _configuration = configuration;
        _tokenService = tokenService;
    }

    [HttpPost("register")]
public async Task<IActionResult> Register(RegisterDto model)
{
    var user = new User { Name = model.Username, Email = model.Email, UserName = model.Username };
    var result = await _userManager.CreateAsync(user, model.Password);
    
    if (result.Succeeded)
    {
        // Optionally, add a default role
        await _userManager.AddToRoleAsync(user, "User");
        return Ok(new { message = "User created successfully" });
    }
    
    return BadRequest(new { Errors = result.Errors.Select(e => e.Description) });
}

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto model)
    {
        var user = await _userManager.FindByNameAsync(model.Username);

        if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role)
            };
            var token = _tokenService.GenerateAccessToken(claims);
            return Ok(new {token});
        }

        return Unauthorized();
    }
}