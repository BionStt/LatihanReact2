using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.Contract;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _post;
        public PostController(IPostRepository post)
        {
            _post = post ??
                    throw new ArgumentNullException(nameof(post));
        }
        [HttpGet]
        [Route("get-all-posts")]
        public async Task<IActionResult> Get()
        {
            return Ok(await _post.GetPosts());
        }
        [HttpGet]
        [Route("get-post-by-id/{Id}")]
        public async Task<IActionResult> GetDeptById(int Id)
        {
            return Ok(await _post.GetPostById(Id));
        }
        
        [HttpPost]
        [Route("create-post")]
        public async Task<IActionResult> Post(TblPost TblPostobj)
        {
            var result = await _post.CreatePost(TblPostobj);
            if (result == false)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok("Added Successfully");
        }
        [HttpPut]
        [Route("update-post")]
        public async Task<IActionResult> Put(TblPost TblPostobj)
        {
           var result= await _post.UpdatePost(TblPostobj);

           if (result==false)
           {
               return BadRequest();
            }
            return Ok("Updated Successfully");
        }
        
        [HttpDelete]
        //[HttpDelete("{id}")]
        [Route("delete-post-by-id/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
           var result =await  _post.DeletePost(id);
           if (result == false)
           {
               return BadRequest();
;           }

            return Ok("Deleted Successfully");
        }

    }
}
