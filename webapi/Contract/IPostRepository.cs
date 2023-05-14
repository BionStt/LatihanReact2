using webapi.Models;

namespace webapi.Contract
{
    public interface IPostRepository
    {
        Task<IEnumerable<TblPost>> GetPosts();
        Task<TblPost> GetPostById(int Id);
        //Task<TblPost> CreatePost(TblPost tblPostobj);
        Task<bool> CreatePost(TblPost tblPostobj);
        //Task<TblPost> UpdatePost(TblPost tblPostobj);
       Task< bool> UpdatePost(TblPost tblPostobj);
        Task<bool> DeletePost(int Id);
    }
}
