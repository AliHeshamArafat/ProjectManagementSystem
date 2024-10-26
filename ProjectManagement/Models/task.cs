using System.ComponentModel.DataAnnotations;

public class task {
    [Key]
    public int TaskId { get; set; }
    public string TaskName { get; set; }
    public string? Description { get; set; }
    public int AssignedTo { get; set; } 
    public DateOnly StartDate { get; set; }
    public DateOnly EndDate { get; set; }
    public string? Priority { get; set; }
    public string? Status { get; set; }
}