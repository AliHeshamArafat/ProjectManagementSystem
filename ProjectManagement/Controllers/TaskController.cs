using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class TaskController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    public TaskController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Task>>> GetTasks()
    {
        return await _context.Tasks.ToListAsync();
    }

    [HttpGet("overdue")]
    public async Task<ActionResult<IEnumerable<Task>>> GetOverdueTasks()
    {
        var overdueTasks = await _context.Tasks
        .Where(t => t.EndDate < DateTime.Now && t.Status != "Completed")
        .ToListAsync();
        
        return overdueTasks;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Task>> GetTask(int id)
    {
        var task =  await _context.Tasks.FindAsync(id);
        if (task == null) 
        {
            return NotFound();
        }
        return task;
    }

    [HttpPost]
    [Authorize(Roles = "Manager")]
    public async Task<ActionResult<Task>> PostTask(Task task) 
    {
        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetTask", new { id = task.TaskId}, task);
    }

    [HttpPut("{id}")]
    [Authorize(Roles = "Manager")]
    public async Task<IActionResult> PutTask(int id, Task task)
    {
        if (id != task.TaskId)
        {
            return BadRequest();
        }
        _context.Entry(task).State = EntityState.Modified;

        try 
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!TaskExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTask(int id)
    {
        var task = await _context.Tasks.FindAsync(id);
        if (task == null)
        {
            return NotFound();
        }

        _context.Tasks.Remove(task);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool TaskExists(int id)
    {
        return _context.Tasks.Any(e => e.TaskId == id);
    }
}