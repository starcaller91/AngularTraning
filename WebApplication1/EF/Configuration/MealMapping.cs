using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.EF.EntityClasses;

namespace WebApplication1.EF.Configuration
{
    public class MealMapping
    {
        public MealMapping(Microsoft.Data.Entity.Metadata.Builders.EntityTypeBuilder<Meal> entityBuilder)
        {
            entityBuilder.HasKey(x => x.Id);
            entityBuilder.Property(x => x.Name).IsRequired().HasColumnType("varchar(60)");
            entityBuilder.Property(x => x.Price).IsRequired().HasColumnType("decimal");
            entityBuilder.HasOne(x => x.Category).WithMany();
        }


    }
}
