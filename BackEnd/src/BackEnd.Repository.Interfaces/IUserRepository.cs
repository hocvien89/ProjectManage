using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Entities;
namespace BackEnd.Repository.Interfaces
{
    public interface IUserRepository
    {
        int InsertUser(User user);
        bool UpdateUser(User user);
        bool DeleteUser(int userId);
        IList<User> GetAllUser();
        User GetUserById(int userId);
    }
}
