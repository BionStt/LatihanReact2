using Microsoft.AspNetCore.Mvc;
using webapi.ViewModel;

namespace webapi.Contract
{
    public interface ITesTechnicalService
    {
        Task<List<GetAllDataPaymentResponse>> GetAllPayment();
        Task<List<GetAllDataSalesResponse>> GetAllSales();
        Task<List<GetAllDataCourierResponse>> GetAllCourier();

        Task<(bool status, string error, GetDataInvoiceResponse Data)> GetDataByInvoiceNo(string InvoiceId);

        Task<EmployeeLoginResponse> EmployeeLogin(Login login);

        Task <bool> InsertEmployee(Register reg);
        //Task<(bool status, string error)> GetDataByNik1(string NikRequest);
        //Task<(bool status, string error)> GetDataByNik2(string NikRequest);
    }
}
