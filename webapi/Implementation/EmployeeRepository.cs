using Microsoft.EntityFrameworkCore;
using webapi.Contract;
using webapi.Models;

namespace webapi.Implementation
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly AssessmentdbContext _appDBContext;

        public EmployeeRepository(AssessmentdbContext appDBContext)
        {
            _appDBContext = appDBContext;
        }

        public bool DeleteEmployee(int ID)
        {
            bool result = false;
            var department = _appDBContext.Employees.Find(ID);
            if (department != null)
            {
                _appDBContext.Entry(department).State = EntityState.Deleted;
                _appDBContext.SaveChanges();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }

        public async Task<Employee> GetEmployeeByID(int ID)
        {
            return await _appDBContext.Employees.FindAsync(ID);
        }

        public async Task<IEnumerable<Employee>> GetEmployees()
        {
            return await _appDBContext.Employees.ToListAsync();
        }

        public async Task<Employee> InsertEmployee(Employee objEmployee)
        {
            _appDBContext.Employees.Add(objEmployee);
            await _appDBContext.SaveChangesAsync();
            return objEmployee;
        }

        public async Task<Employee> UpdateEmployee(Employee objEmployee)
        {
            _appDBContext.Entry(objEmployee).State = EntityState.Modified;
            await _appDBContext.SaveChangesAsync();
            return objEmployee;
        }
    }
}
