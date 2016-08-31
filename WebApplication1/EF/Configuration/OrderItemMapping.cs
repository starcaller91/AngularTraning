using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.EF.EntityClasses;

namespace WebApplication1.EF.Configuration
{
    public class OrderItemMapping
    {
        public OrderItemMapping(Microsoft.Data.Entity.Metadata.Builders.EntityTypeBuilder<OrderItems> entityBuilder)
        {
            entityBuilder.HasKey(x => x.ID);
            entityBuilder.Property(x => x.Quantity).IsRequired().HasColumnType("decimal");
            entityBuilder.HasOne(x => x.Meal).WithMany().IsRequired();

        }

    }
}
