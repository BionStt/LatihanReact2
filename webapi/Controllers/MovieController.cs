using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.Contract;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly IWebHostEnvironment _env; 
        private readonly IMovieRepository _movie;

        public MovieController(IWebHostEnvironment env, IMovieRepository movie)
        {
            _env = env;
            _movie = movie;
        }

        [HttpGet]
        [Route("GetMovies")]
        [ResponseCache(CacheProfileName = "Cache2Mins")]
        public async Task<IActionResult> Get()
        {
            return Ok(await _movie.Getmovies());
        }
        [HttpGet]
        [Route("GetMovieByID/{Id}")]
        [ResponseCache(CacheProfileName = "Cache2Mins")]
        public async Task<IActionResult> GetMovieByID(Guid Id)
        {
            return Ok(await _movie.GetMovieByID(Id));
        }
        [HttpPost]
        [Route("AddMovie")]
        public async Task<IActionResult> Post(MovieList emp)
        {
            var result = await _movie.InsertMovie(emp);
            if (result == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok("Added Successfully");
        }
        [HttpPut]
        [Route("UpdateMovie")]
        public async Task<IActionResult> Put(MovieList emp)
        {
            await _movie.UpdateMovie(emp);
            return Ok("Updated Successfully");
        }

        //[HttpDelete]
        //[Route("DeleteEmployee")]
        [HttpDelete("{id}")]
        public JsonResult Delete(Guid id)
        {
            var result = _movie.DeleteMovie(id);
            return new JsonResult("Deleted Successfully");
        }





    }
}
