﻿using ChurchManagerApi.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ChurchManagerApi.Data
{
    public class DataRepository : IDataRepository
    {
        private readonly string _connectionString;

        public DataRepository(IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionStrings:DefaultConnection"];
        }

        public IEnumerable<Church> GetAllChurches()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var questionDictionary =
                    new Dictionary<int, Church>();
                return connection
                    .Query<Church>("EXEC [church-manager].[dbo].[SP_Get_All_Churches]")
                    .Distinct()
                    .ToList();
            }
        }

        public IEnumerable<Member> GetAllMembers(string ChurchAcronym)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var questionDictionary =
                    new Dictionary<int, Member>();
                return connection
                    .Query<Member>(@"EXEC [church-manager].[dbo].[SP_Get_All_Members] @Church = @Church", new { Church = ChurchAcronym })
                    .Distinct()
                    .ToList();
            }
        }
    }
}
