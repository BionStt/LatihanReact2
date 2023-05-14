using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.Contract;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeAnkitController : ControllerBase
    {
        public EmployeeAnkitController(IEmployeeAnkitRepository employee, IWebHostEnvironment env)
        {
            _employee = employee ?? throw new ArgumentNullException(nameof(employee));
            _env = env ?? throw new ArgumentNullException(nameof(env));
        }

        private readonly IEmployeeAnkitRepository _employee;
        //private readonly IDepartmentRepository _department;
        private readonly IWebHostEnvironment _env;

        [HttpGet]
        [Route("GetCities")]
        public async Task<IActionResult> GetCities()
        {
            return Ok(await _employee.GetCities());
        }
        
        [HttpGet]
        [Route("GetEmployee")]
        public async Task<IActionResult> Get()
        {
            return Ok(await _employee.GetEmployees());
        }
        [HttpGet]
        [Route("GetEmployeeByID/{Id}")]
        public async Task<IActionResult> GetEmpByID(int Id)
        {
            return Ok(await _employee.GetEmployeeByID(Id));
        }
        [HttpPost]
        [Route("AddEmployee")]
        public async Task<IActionResult> Post(TblEmployeeAngkit emp)
        {
            var result = await _employee.InsertEmployee(emp);
            if (result == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok("Added Successfully");
        }
        [HttpPut]
        [Route("UpdateEmployee")]
        public async Task<IActionResult> Put(TblEmployeeAngkit emp)
        {
            await _employee.UpdateEmployee(emp);
            return Ok("Updated Successfully");
        }

        //[HttpDelete]
        //[Route("DeleteEmployee")]
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            var result = _employee.DeleteEmployee(id);
            return new JsonResult("Deleted Successfully");
        }



    }
}
