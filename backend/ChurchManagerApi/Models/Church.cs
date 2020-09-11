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
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Pastor_Name { get; set; }
        public string Pastor_Account { get; set; }
        public string Pastor_Email { get; set; }
        public string Address_Line_1 { get; set; }
        public string Address_Line_2 { get; set; }
        public string Address_City { get; set; }
        public string Address_State { get; set; }
        public string Address_Zipcode { get; set; }
    }
}
