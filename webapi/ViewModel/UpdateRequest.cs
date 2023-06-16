using System.ComponentModel.DataAnnotations;

namespace webapi.ViewModel
{
    public class UpdateRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        [EmailAddress]
        public string Email { get; set; }


        private string replaceEmptyWithNull(string value)
        {
            return string.IsNullOrEmpty(value) ? null : value;
        }
    }
}
