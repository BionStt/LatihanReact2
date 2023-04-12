using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class MovieList
{
    public Guid Id { get; set; }

    public string? Title { get; set; }

    public string? MovieLanguage { get; set; }

    public string? ReleaseYear { get; set; }

    public string? Ott { get; set; }
}
