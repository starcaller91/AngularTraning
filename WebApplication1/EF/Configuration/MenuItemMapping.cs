using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.EF.EntityClasses;

namespace WebApplication1.EF.Configuration
{
    public class MenuItemMapping
    {
        public MenuItemMapping(Microsoft.Data.Entity.Metadata.Builders.EntityTypeBuilder<MenuItem> entityBuilder)
        {
            entityBuilder.HasKey(x => x.id);

            entityBuilder.Property(x => x.Breakfast).IsRequired();
            entityBuilder.Property(x => x.Lunch).IsRequired();
            entityBuilder.Property(x => x.Dinner).IsRequired();

        }
    }
}
