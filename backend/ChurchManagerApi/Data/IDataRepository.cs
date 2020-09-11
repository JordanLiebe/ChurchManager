using ChurchManagerApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChurchManagerApi.Data
{
    public interface IDataRepository
    {
        IEnumerable<Church> GetAllChurches();
        IEnumerable<Member> GetAllMembers(string ChurchAcronym);
    }
}
