using Microsoft.EntityFrameworkCore;
using webapi.Contract;
using webapi.Models;

namespace webapi.Implementation
{
    public class MovieRepository : IMovieRepository
    {
        private readonly AssessmentdbContext _appDBContext;

        public MovieRepository(AssessmentdbContext appDBContext)
        {
            _appDBContext = appDBContext;
        }

        public async Task<bool> DeleteMovie(Guid ID)
        {
            bool result = false;
            var returnData = _appDBContext.MovieLists.Find(ID);
            if (returnData != null)
            {
                _appDBContext.Entry(returnData).State = EntityState.Deleted;
                await _appDBContext.SaveChangesAsync();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }

        public async Task<IEnumerable<MovieList>> Getmovies()
        {
            return await _appDBContext.MovieLists.ToListAsync();
        }

        public async Task<MovieList> GetMovieByID(Guid ID)
        {
            return await _appDBContext.MovieLists.FindAsync(ID);
        }

        public async Task<MovieList> InsertMovie(MovieList objEmployee)
        {
            objEmployee.Id = Guid.NewGuid();
            _appDBContext.MovieLists.Add(objEmployee);
            await _appDBContext.SaveChangesAsync();
            return objEmployee;
        }

        public async Task<MovieList> UpdateMovie(MovieList objEmployee)
        {
            _appDBContext.Entry(objEmployee).State = EntityState.Modified;
            await _appDBContext.SaveChangesAsync();
            return objEmployee;
        }
    }
}
