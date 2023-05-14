using Microsoft.EntityFrameworkCore;
using webapi.Contract;
using webapi.Models;

namespace webapi.Implementation
{
    public class PostRepository: IPostRepository
    {
        public PostRepository(AssessmentdbContext appDbContext)
        {
            _appDBContext = appDbContext ?? throw new ArgumentNullException(nameof(appDbContext));
        }

        private readonly AssessmentdbContext _appDBContext;
        
        public async Task<IEnumerable<TblPost>> GetPosts()
        {
            return await _appDBContext.TblPosts.ToListAsync();
        }

        public async Task<TblPost> GetPostById(int Id)
        {
            return await _appDBContext.TblPosts.FindAsync(Id);
        }

        public async Task<bool> CreatePost(TblPost tblPostobj)
        {
            _appDBContext.TblPosts.Add(tblPostobj);
           return  await _appDBContext.SaveChangesAsync() >=1;
            //return tblPostobj;
        }

        public async Task<bool> UpdatePost(TblPost tblPostobj)
        {
            _appDBContext.Entry(tblPostobj).State = EntityState.Modified;
           return  await _appDBContext.SaveChangesAsync() >=1;
            //return objDepartment;
        }

        public async Task<bool> DeletePost(int Id)
        {
            //bool result = false;
            //var department = _appDBContext.Departments.Find(ID);
            //if (department != null)
            //{
            //    _appDBContext.Entry(department).State = EntityState.Deleted;
            //    _appDBContext.SaveChanges();
            //    result = true;
            //}
            //else
            //{
            //    result = false;
            //}
            //return result;

            var retunTblport = await _appDBContext.TblPosts.FindAsync(Id);
            
            if (retunTblport != null)
            {
                _appDBContext.Entry(retunTblport).State = EntityState.Deleted;
                return await _appDBContext.SaveChangesAsync() >= 1;
            
            }
            else
            {
                return false;
            }
            

        }
    }
}
