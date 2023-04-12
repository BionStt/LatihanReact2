using webapi.Models;

namespace webapi.Contract
{
    public interface IMovieRepository
    {
        Task<IEnumerable<MovieList>> Getmovies();
        Task<MovieList> GetMovieByID(Guid ID);
        Task<MovieList> InsertMovie(MovieList objEmployee);
        Task<MovieList> UpdateMovie(MovieList objEmployee);
        Task<bool> DeleteMovie(Guid ID);
    }
}
