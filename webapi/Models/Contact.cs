using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class Contact
{
    public int Id { get; set; }

    public string? Firstname { get; set; }

    public string? Lastname { get; set; }

    public string? Phone { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }
}
