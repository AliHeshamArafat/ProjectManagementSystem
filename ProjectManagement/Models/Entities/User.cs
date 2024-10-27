using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

public class User : IdentityUser
{
    public string? Name { get; set; }
    public string? Role { get; set; }
    public List<Project> OwnedProjects { get; set; } = new List<Project>();
    public List<Task> Tasks { get; set; } = new List<Task>();
}