using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChurchManagerApi.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace ChurchManagerApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ChurchController : ControllerBase
    {
        private readonly IDataRepository _dataRepository;

        public ChurchController(IDataRepository dataRepository)
        {
            _dataRepository = dataRepository;
        }

        [Route("Typeahead")]
        [HttpGet, AllowAnonymous]
        public IActionResult Get()
        {
            var data = _dataRepository.GetAllChurches();
            return Ok(data);
        }
    }
}
