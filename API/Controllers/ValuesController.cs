using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using API.Models;
namespace API.Controllers
{
    [ApiController]
    [Route("api/")]
    public class ValuesController : ControllerBase
    {
        public static List<Value> ValuesList = new List<Value>()
        {
            new Value{ Id = Guid.NewGuid(), LastName = "Bob1", FirstName = "BobName1" },
            new Value{ Id = Guid.NewGuid(), LastName = "Bob2", FirstName = "BobName2" },
            new Value{ Id = Guid.NewGuid(), LastName = "Bob3", FirstName = "BobName3" },
            new Value{ Id = Guid.NewGuid(), LastName = "Bob4", FirstName = "BobName4" },
            new Value{ Id = Guid.NewGuid(), LastName = "Bob5", FirstName = "BobName5" }
        };

        [HttpGet]
        [Route("GetValues")]
        public IActionResult GetValues()
        {
            return new JsonResult(ValuesList);
        }

    }
}
