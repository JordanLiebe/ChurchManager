﻿using System;
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
    public class MemberController : ControllerBase
    {
        private readonly IDataRepository _dataRepository;

        public MemberController(IDataRepository dataRepository)
        {
            _dataRepository = dataRepository;
        }

        [HttpGet, AllowAnonymous]
        public IActionResult Get(string ChurchAcronym)
        {
            if (ChurchAcronym == null)
                return NotFound();

            var data = _dataRepository.GetAllMembers(ChurchAcronym);

            if (data.Count() == 0)
                return NotFound();

            return Ok(data);
        }
    }
}
