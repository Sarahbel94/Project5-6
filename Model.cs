using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;


namespace Model 
{
  public class ShoeContext : DbContext
  {
    public DbSet<Shoe> Shoes { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
      optionsBuilder.UseNpgsql("User ID=postgres;Password=;Host=localhost;Port=5432;Database=ShoeDB;Pooling=true;");
    }
  }
 
    public class Shoe
    {
        public int ShoeId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Size { get; set; }
        public string Category { get; set; }
        public string Brand { get; set; }
        public string Color { get; set; }
        public string Description { get; set; }
        public string Image { get; set; } 
        public List <User> Users { get; set; }
    }

    public class User
    {
        public int UserId { get; set; }
        public Shoe Shoes { get; set; } 
        public string Name { get; set; }

    }

 
}