using System.ComponentModel.DataAnnotations;

public class project {
    [Key]
    public int ProjectId { get; set; }
    public string? ProjectName { get; set; }
    public string? Description { get; set; }
    public DateOnly StartDate { get; set; }
    public DateOnly EndDate { get; set; }
    public int Budget { get; set; }
    public int Owner { get; set; }
    public string? Status { get; set; }
}