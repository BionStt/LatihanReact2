using Microsoft.EntityFrameworkCore;
using webapi.Contract;
using webapi.CustomException;
using webapi.Models;
using webapi.ViewModel;

namespace webapi.Implementation
{
    public class UserService: IUserService
    {
        private readonly AssessmentdbContext _appDBContext;

        public UserService(AssessmentdbContext appDBContext)
        {
            _appDBContext = appDBContext;
        }
        public async Task<IEnumerable<User>> GetAll()
        {
            return _appDBContext.Users;
        }

        public async Task<User> GetById(int id)
        {
            var user = _appDBContext.Users.Find(id);
            if (user == null) throw new KeyNotFoundException("User not found");
            return user;
        }

        public async Task Create(CreateRequest model)
        {
            // validate
            if (await _appDBContext.Users.AnyAsync(x => x.Email == model.Email))
                throw new AppException("User with the email '" + model.Email + "' already exists");

            // map model to new user object
            var user = new User
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email =    model.Email

            };


            // save user
            _appDBContext.Users.Add(user);
            _appDBContext.SaveChanges();
        }

        public async Task Update(int id, UpdateRequest model)
        {
            var returnData = await _appDBContext.Users.FindAsync(id);
            if (returnData == null)
            {
                throw new KeyNotFoundException("User not found");
            }
            // validate
            if (model.Email != returnData.Email && await _appDBContext.Users.AnyAsync(x => x.Email == model.Email))
                throw new AppException("User with the email '" + model.Email + "' already exists");

            // copy model to user and save
            //_mapper.Map(model, user);
            returnData.Email = model.Email;
            returnData.FirstName = model.FirstName;
            returnData.LastName = model.Email;
            //returnData.Phone = model.p;
            

            _appDBContext.Users.Update(returnData);
            _appDBContext.SaveChanges();

        }

        public async Task Delete(int id)
        {
            var returnData =await _appDBContext.Users.FindAsync(id);
            if (returnData==null)
            {
                throw new KeyNotFoundException("User not found");
            }

            _appDBContext.Users.Remove(returnData);
            _appDBContext.SaveChanges();

            //throw new NotImplementedException();
        }
    }
}
