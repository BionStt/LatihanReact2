using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class Trinvoice
{
    public string InvoiceNo { get; set; } = null!;

    public DateTime InvoiceDate { get; set; }

    public string InvoiceTo { get; set; } = null!;

    public string ShipTo { get; set; } = null!;

    public int SalesId { get; set; }

    public int CourierId { get; set; }

    public int PaymentType { get; set; }

    public decimal CourierFee { get; set; }
}
