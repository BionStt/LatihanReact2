using Microsoft.EntityFrameworkCore;
using webapi.Contract;
using webapi.Models;

namespace webapi.Implementation
{
    public class EmployeeAnkitRepository: IEmployeeAnkitRepository
    {
        public EmployeeAnkitRepository(AssessmentdbContext appDbContext)
        {
            _appDBContext = appDbContext ?? throw new ArgumentNullException(nameof(appDbContext));
        }

        private readonly AssessmentdbContext _appDBContext;

      
        public async Task<IEnumerable<TblEmployeeAngkit>> GetEmployees()
        {
            return await _appDBContext.TblEmployeeAngkits.ToListAsync();
        }

        public async Task<IEnumerable<TblCitiesAngkit>> GetCities()
        {
            return await _appDBContext.TblCitiesAngkits.ToListAsync();
        }

        public async Task<TblEmployeeAngkit> GetEmployeeByID(int ID)
        {
            return await _appDBContext.TblEmployeeAngkits.FindAsync(ID);
        }

        public async Task<TblEmployeeAngkit> InsertEmployee(TblEmployeeAngkit objEmployee)
        {
            _appDBContext.TblEmployeeAngkits.Add(objEmployee);
            await _appDBContext.SaveChangesAsync();
            return objEmployee;
        }

        public async Task<TblEmployeeAngkit> UpdateEmployee(TblEmployeeAngkit objEmployee)
        {
            _appDBContext.Entry(objEmployee).State = EntityState.Modified;
            await _appDBContext.SaveChangesAsync();
            return objEmployee;
        }

        public bool DeleteEmployee(int ID)
        {
            bool result = false;
            var department =  _appDBContext.TblEmployeeAngkits.Find(ID);
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

        

        
    }
}
