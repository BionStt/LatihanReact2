using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class Ltcourierfee
{
    public int? WeightId { get; set; }

    public int? CourierId { get; set; }

    public int? StartKg { get; set; }

    public int? EndKg { get; set; }

    public decimal? Price { get; set; }
}
