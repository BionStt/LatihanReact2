using webapi.Contract;
using webapi.Models;
using webapi.ViewModel;
using Microsoft.EntityFrameworkCore;

namespace webapi.Implementation
{
    public class TesTechnicalService : ITesTechnicalService
    {
        private readonly AssessmentdbContext _dbContext;
        private readonly ILogger<TesTechnicalService> _logger;

        public TesTechnicalService(AssessmentdbContext dbContext, ILogger<TesTechnicalService> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        public async Task<EmployeeLoginResponse> EmployeeLogin(Login login)
        {
            try
            {

                var returnData = await _dbContext.EmployeeLogins
                    .Where(x => x.Email.Equals(login.Email) && x.Password.Equals(login.Password))
                    .Select(x => new EmployeeLoginResponse
                    {
                        Id = x.Id,
                        Email = x.Email,
                        Password = x.Password,
                        EmployeeName = x.EmployeeName,
                        City = x.City,
                        Department = x.Department

                    }).FirstOrDefaultAsync();

                return returnData;
            }
            catch (Exception ex)
            {
                _logger.LogWarning("{0}", ex.Message);
                //throw;
            }
            return new EmployeeLoginResponse();
        }

        public async Task<List<GetAllDataCourierResponse>> GetAllCourier()
        {
            try
            {
                var returnData = await _dbContext.Mscouriers.Select(x => new GetAllDataCourierResponse
                {
                    CourierId = x.CourierId,
                    CourierName = x.CourierName
                }).AsNoTracking().ToListAsync();

                return returnData;
            }
            catch (Exception ex)
            {
                _logger.LogWarning("{0}", ex.Message);
                //throw;
            }
            return new List<GetAllDataCourierResponse>();


        }

        public async Task<List<GetAllDataPaymentResponse>> GetAllPayment()
        {
            try
            {
                var returnData = await _dbContext.Mspayments.Select(x => new GetAllDataPaymentResponse
                {
                    PaymentId = x.PaymentId,
                    PaymentName = x.PaymentName
                }).AsNoTracking().ToListAsync();

                return returnData;
            }
            catch (Exception ex)
            {
                _logger.LogWarning("{0}", ex.Message);
                //throw;
            }
            return new List<GetAllDataPaymentResponse>();
        }

        public async Task<List<GetAllDataSalesResponse>> GetAllSales()
        {
            try
            {
                var returnData = await _dbContext.Mssales.Select(x => new GetAllDataSalesResponse
                {
                    SalesId = x.SalesId,
                    SalesName = x.SalesName
                }).AsNoTracking().ToListAsync();

                return returnData;
            }
            catch (Exception ex)
            {
                _logger.LogWarning("{0}", ex.Message);
                //throw;
            }
            return new List<GetAllDataSalesResponse>();
        }

        public async Task<(bool status, string error, GetDataInvoiceResponse Data)> GetDataByInvoiceNo(string InvoiceId)
        {
            try
            {
                var returnData = await (from a in _dbContext.Trinvoices
                                            //join b in _dbContext.Trinvoicedetails on a.InvoiceNo equals b.InvoiceNo
                                        where a.InvoiceNo == InvoiceId
                                        select new GetDataInvoiceResponse
                                        {
                                            InvoiceDate = a.InvoiceDate,
                                            InvoiceTo = a.InvoiceTo,
                                            ShipTo = a.ShipTo,
                                            SalesId = a.SalesId,
                                            CourierId = a.CourierId,
                                            PaymentTypeId = a.PaymentType,
                                            CourierFee = a.CourierFee

                                        }
                                        ).SingleOrDefaultAsync();

                var returnData2 = await (from a in _dbContext.Trinvoices
                                         join b in _dbContext.Trinvoicedetails on a.InvoiceNo equals b.InvoiceNo
                                         join c in _dbContext.Msproducts on b.ProductId equals c.ProductId
                                         where a.InvoiceNo == InvoiceId
                                         select new GetDataInvoiceDetailResponse
                                         {
                                             Item = c.ProductName,
                                             Weight = c.Weight,
                                             Qty = b.Qty,
                                             UnitPrice = b.Price,
                                             Total = b.Qty * b.Price
                                         }
                                        ).ToListAsync();
                //foreach (var item in returnData)
                //{
                //    item.InvoiceDetail = returnData2;
                //}
                returnData.InvoiceDetail = returnData2;

                //var returnData3 = await _dbContext.Trinvoicedetails.Where(x => x.InvoiceNo == InvoiceId).Select(x => new GetDataInvoiceDetailResponse
                //{
                //    //InvoiceNo = x.InvoiceNo,
                //    //ProductId = x.ProductId,
                //    //ProductName = x.ProductName,
                //    //Qty = x.Qty,
                //    //Price = x.Price,
                //    //Discount = x.Discount,
                //    Item = "",
                //    Weight ="",
                //    Qty =x.Qty,
                //    UnitPrice = x.Price,
                //    Total = x.Qty * x.Price
                //}).ToListAsync();
                return (true, "", returnData);
            }
            catch (Exception ex)
            {
                _logger.LogWarning("{0}", ex.Message);
                return (false, ex.Message, new GetDataInvoiceResponse());

            }
        }

        public async Task<bool> InsertEmployee(Register req)
        {
            try
            {
                var newData = new EmployeeLogin 
                {
                EmployeeName = req.EmployeeName,
                City = req.City,
                Department = req.Department,
                Email = req.Email,
                Password = req.Password
                
                };

                _dbContext.EmployeeLogins.Add(newData);
                await _dbContext.SaveChangesAsync();

                return true;
            }
            catch (Exception ex)
            {
                _logger.LogWarning("{0}", ex.Message);
                //throw;
                return false;
            }
            return true;
        }
    }

}