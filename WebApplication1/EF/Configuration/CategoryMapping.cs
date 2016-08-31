using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
using WebApplication1.EF.EntityClasses;

namespace WebApplication1.EF.Configuration
{
    public class CategoryMapping
    {
        public CategoryMapping(Microsoft.Data.Entity.Metadata.Builders.EntityTypeBuilder<Category> entityBuilder)
        {
            entityBuilder.HasKey(x => x.ID);
            entityBuilder.Property(x => x.Name).IsRequired().HasColumnType("varchar(60)");
        }

    }
}
