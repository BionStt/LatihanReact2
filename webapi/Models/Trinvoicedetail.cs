using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class Trinvoicedetail
{
    public string InvoiceNo { get; set; } = null!;

    public int ProductId { get; set; }

    public double Weight { get; set; }

    public short Qty { get; set; }

    public decimal Price { get; set; }
}
