using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.EF.EntityClasses;

namespace WebApplication1.EF.Configuration
{
    public class OrderMapping
    {
        public OrderMapping(Microsoft.Data.Entity.Metadata.Builders.EntityTypeBuilder<Order> entityBuilder)
        {
            entityBuilder.HasKey(x => x.ID);
            entityBuilder.Property(x => x.Price).IsRequired().HasColumnType("decimal");
            entityBuilder.Property(x => x.TableNumber).HasColumnType("int").IsRequired();
            entityBuilder.Property(x => x.Status).HasColumnType("int").IsRequired();

            entityBuilder.HasMany(x => x.Items).WithOne().IsRequired();

        }
    }
}
