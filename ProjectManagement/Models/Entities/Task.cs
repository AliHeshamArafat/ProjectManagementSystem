using System.ComponentModel.DataAnnotations;

public class Task{
    [Key]
    [Required]
    public int TaskId { get; set; }
    public string? TaskName { get; set; }
    public string? Description { get; set; }
    public int AssignedToId { get; set; } 
    public User? AssignedTo { get; set; } 
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string? Priority { get; set; }
    public string? Status { get; set; }
    public int ProjectId { get; set; }
    public Project? Project { get; set; }
}