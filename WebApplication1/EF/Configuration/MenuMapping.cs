using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.EF.EntityClasses;

namespace WebApplication1.EF.Configuration
{
    public class MenuMapping
    {
        public MenuMapping(Microsoft.Data.Entity.Metadata.Builders.EntityTypeBuilder<Menu> entityBuilder)
        {
            entityBuilder.HasKey(x => x.ID);
            entityBuilder.Property(x => x.Day).IsRequired().HasColumnType("int");

            entityBuilder.HasMany(x => x.Items).WithOne().IsRequired();
        }
    }
}
