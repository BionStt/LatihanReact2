using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class EmployeeLogin
{
    public int Id { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public string? EmployeeName { get; set; }

    public string? City { get; set; }

    public string? Department { get; set; }
}
