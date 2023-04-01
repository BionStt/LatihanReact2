namespace webapi.ViewModel
{
    public class GetAllDataResponse
    {
        
    }
     public class GetAllDataSalesResponse
    {
        public int SalesId { get; set; }
        public string SalesName { get; set; }
    }

    public class GetAllDataCourierResponse
    {
        public int CourierId { get; set; }
        public string CourierName { get; set; }
    }
    public class GetAllDataPaymentResponse
    {
        public int? PaymentId { get; set; }
        public string? PaymentName { get; set; }
    }

    public class GetDataInvoiceResponse
    {
        public DateTime? InvoiceDate { get; set; }
        public string InvoiceTo { get; set; }
        public string ShipTo { get; set; }
        public int SalesId { get; set; }
        public int CourierId { get; set; }
        public int PaymentTypeId { get; set; }
        public decimal CourierFee { get; set; }
        public List<GetDataInvoiceDetailResponse> InvoiceDetail { get; set; }

    }
    public class GetDataInvoiceDetailResponse
    {
        public string Item { get; set; }
        public double Weight { get; set; }
        public int Qty { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Total { get; set; }
    }
    public class EmployeeLoginResponse
    {
        public int Id { get; set; }

        public string? Email { get; set; }

        public string? Password { get; set; }

        public string? EmployeeName { get; set; }

        public string? City { get; set; }

        public string? Department { get; set; }
    }
    public class Response    
   {    
       public string Status { set; get; }    
       public string Message { set; get; }    
    
   }   

}