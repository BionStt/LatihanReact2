using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class Mspayment
{
    public int PaymentId { get; set; }

    public string PaymentName { get; set; } = null!;
}
