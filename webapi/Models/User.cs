﻿using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class User
{
    public int UsersId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }
}
