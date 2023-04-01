namespace webapi.ViewModel
{
    public class request
    {
        
    }
    public class Register    
  {    
      public int Id { get; set; }    
      public string Email { get; set; }    
      public string Password { get; set; }    
      public string EmployeeName { get; set; }    
      public string City { get; set; }    
      public string Department { get; set; }    
  }   
  public class Login    
   {    
       public string Email { get; set; }    
       public string Password { get; set; }    
   }   
}