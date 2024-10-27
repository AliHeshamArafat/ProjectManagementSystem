using System.ComponentModel.DataAnnotations;

public class Project {
    [Key]
    [Required]
    public int ProjectId { get; set; }
    public string? ProjectName { get; set; }
    public string? Description { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public int Budget { get; set; }
    public int OwnerId { get; set; }
    public User? Owner { get; set; }
    public string? Status { get; set; }
    public List<Task> Tasks { get; set; } = new List<Task>();
}