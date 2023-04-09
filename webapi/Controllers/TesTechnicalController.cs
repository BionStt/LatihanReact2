using Azure;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using webapi.Contract;
using webapi.ViewModel;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[DisableCors]
    [EnableCors("AllowOrigin")]
    public class TesTechnicalController : ControllerBase
    {
        private readonly ITesTechnicalService _repo;
        private readonly ILogger<TesTechnicalController> _logger;

        public TesTechnicalController(ITesTechnicalService repo, ILogger<TesTechnicalController> logger)
        {
            _repo = repo;
            _logger = logger;
        }


        [HttpGet("GetAllPaymentMethod")]
        public async Task<IActionResult> GetAllPaymentMethod()
        {
            try
            {
                _logger.LogInformation("About page visited at {DT}", DateTime.UtcNow.ToLongTimeString());
                var _ = await _repo.GetAllPayment();
                return Ok(_);
                //if (!_.status)
                //{
                //    return NotFound();
                //}
                //else
                //{
                //    return Ok();
                //}
            }
            catch (Exception ex)
            {
                _logger.LogWarning("{0}", ex.Message);
                return BadRequest();
                throw;
            }
            //  return Ok();
        }

        [HttpGet("GetAllSales")]
        public async Task<IActionResult> GetAllSales()
        {
            try
            {
                _logger.LogInformation("About page visited at {DT}", DateTime.UtcNow.ToLongTimeString());
                var _ = await _repo.GetAllSales();
                return Ok(_);
                //if (!_.status)
                //{
                //    return NotFound();
                //}
                //else
                //{
                //    return Ok();
                //}
            }
            catch (Exception ex)
            {
                _logger.LogWarning("{0}", ex.Message);

                throw;
            }
            //  return Ok();
        }

        [HttpGet("GetAllCourier")]
        public async Task<IActionResult> GetAllCourier()
        {
            try
            {
                _logger.LogInformation("About page visited at {DT}", DateTime.UtcNow.ToLongTimeString());
                var _ = await _repo.GetAllCourier();
                return Ok(_);
                //if (!_.status)
                //{
                //    return NotFound();
                //}
                //else
                //{
                //    return Ok();
                //}
            }
            catch (Exception ex)
            {
                _logger.LogWarning("{0}", ex.Message);

                throw;
            }
            //  return Ok();
        }

        [HttpGet("GetDataInvoiceById")]
        public async Task<IActionResult> GetDataInvoiceById(string InvoiceId)
        {
            try
            {
                _logger.LogInformation("About page visited at {DT}", DateTime.UtcNow.ToLongTimeString());
                var _ = await _repo.GetDataByInvoiceNo(InvoiceId);
                return Ok(_.Data);
                //if (!_.status)
                //{
                //    return NotFound();
                //}
                //else
                //{
                //    return Ok();
                //}
            }
            catch (Exception ex)
            {
                _logger.LogWarning("{0}", ex.Message);

                throw;
            }
            //  return Ok();
        }

        //[DisableCors]
        [HttpGet("GetEmployeeLogin")]
        //[EnableCors("Policy1")]       
        public async Task<IActionResult> GetEmployeeLogin([FromQuery] Login login)
        {
            try
            {
                _logger.LogInformation("About page visited at {DT}", DateTime.UtcNow.ToLongTimeString());
                var _ = await _repo.EmployeeLogin(login);
                if (_ is null)
                {
                    return NotFound();
                }
                return Ok(_);
               
            }
            catch (Exception ex)
            {
                _logger.LogWarning("{0}", ex.Message);
                return BadRequest();
                throw;
            }
            //  return Ok();
        }

        [DisableCors]
        [HttpPost("InsertEmployee")]
        //[EnableCors("AnotherPolicy")] //liat di program.cs
        //The [DisableCors] attribute does not disable CORS that has been enabled by endpoint routing.
        public async Task<IActionResult> InsertEmployee(Register register)
        {
            try
            {
                _logger.LogInformation("About page visited at {DT}", DateTime.UtcNow.ToLongTimeString());
                var _ = await _repo.InsertEmployee(register);
                if (_ is false)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError,"Error gan"); 
                }
                return Ok(_);

            }
            catch (Exception ex)
            {
                _logger.LogWarning("{0}", ex.Message);
                return BadRequest();
                throw;
            }
            //  return Ok();
        }

    }
}
