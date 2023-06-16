using System.ComponentModel.DataAnnotations;

namespace webapi.ViewModel
{
    public class CreateRequest
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
