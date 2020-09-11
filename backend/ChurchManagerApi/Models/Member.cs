using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChurchManagerApi.Models
{
    public class Member
    {
        public int Id { get; set; }
        public int Church { get; set; }
        public string First_Name { get; set; }
        public string Middle_Name { get; set; }
        public string Last_Name { get; set; }
        public string Gender { get; set; }
        public string Member_Status { get; set; }
        public int Envelope_Number { get; set; }
        public DateTime Date_Joined { get; set; }
        public DateTime Birth_Date { get; set; }
        public string Maritial_Status { get; set; }
        public DateTime Wedding_Date { get; set; }
        public bool Baptised { get; set; }
        public DateTime Baptism_Date { get; set; }
        public bool Confirmed { get; set; }
        public DateTime Confirmation_Date { get; set; }
        public string Home_Phone { get; set; }
        public string Cell_Phone { get; set; }
        public string Work_Phone { get; set; }
        public string Email { get; set; }
        public string Occupation { get; set; }
        public string Employer { get; set; }
    }
}
