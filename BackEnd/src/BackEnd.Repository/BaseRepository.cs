using System;
using System.Data;
using System.Data.SqlClient;
using System.Runtime;

namespace BackEnd.Repository
{
    public class BaseRepository
    {
        protected IDbConnection con;
        public BaseRepository()
        {
            string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["cons"].ConnectionString;

        }
    }
}
