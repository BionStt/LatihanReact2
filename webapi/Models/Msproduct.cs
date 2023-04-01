using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class Msproduct
{
    public int ProductId { get; set; }

    public string ProductName { get; set; } = null!;

    public double Weight { get; set; }

    public decimal Price { get; set; }
}
