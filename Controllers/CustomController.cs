using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace CustomController{
    [Route ("api/[controller]")]
    public class ShoesController : Controller 
    {
        private readonly ShoeContext _context;
        public ShoesController (ShoeContext context) 
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Shoe> Get () {
            return _context.Shoes.ToList ();;
        }

       //GET api/values/5
        [HttpGet ("{id}")]
        public IActionResult Get (int id) {
            var shoe = _context.Shoes.FirstOrDefault (t => t.ShoeId == id);
            if (shoe == null) {
                return NotFound ();
            }
            return new ObjectResult (shoe);
        }
    }
}
