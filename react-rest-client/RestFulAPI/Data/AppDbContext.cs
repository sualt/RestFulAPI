using Microsoft.EntityFrameworkCore;
using RestFulAPI.Models;

namespace RestFulAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }   // Products tablosu
    }
}
