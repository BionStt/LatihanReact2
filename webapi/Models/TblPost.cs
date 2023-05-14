using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class TblPost
{
    public int PostId { get; set; }

    public string Title { get; set; } = null!;

    public string Coontent { get; set; } = null!;
}
