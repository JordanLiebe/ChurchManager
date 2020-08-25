using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChurchManagerApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ChurchController : ControllerBase
    {
        [Route("Typeahead")]
        [HttpGet, Authorize]
        public IActionResult Get()
        {
            return Ok("Test");
        }
    }
}
