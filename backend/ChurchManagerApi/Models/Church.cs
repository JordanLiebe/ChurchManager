using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChurchManagerApi.Models
{
    public class Church
    {
        public int Id { get; set; }
        public string Acronym { get; set; }
        public string Name { get; set; }
    }
}
