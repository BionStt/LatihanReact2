using webapi.Models;

namespace webapi.Contract
{
    public interface IEmployeeAnkitRepository
    {
        Task<IEnumerable<TblEmployeeAngkit>> GetEmployees();
        Task<IEnumerable<TblCitiesAngkit>> GetCities();
        Task<TblEmployeeAngkit> GetEmployeeByID(int ID);
        Task<TblEmployeeAngkit> InsertEmployee(TblEmployeeAngkit objEmployee);
        Task<TblEmployeeAngkit> UpdateEmployee(TblEmployeeAngkit objEmployee);
        bool DeleteEmployee(int ID);
    }
}
