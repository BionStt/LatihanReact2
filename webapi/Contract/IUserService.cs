using webapi.Models;
using webapi.ViewModel;

namespace webapi.Contract
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAll();
        Task<User> GetById(int id);
        Task Create(CreateRequest model);
        Task Update(int id, UpdateRequest model);
        Task Delete(int id);
    }
}
