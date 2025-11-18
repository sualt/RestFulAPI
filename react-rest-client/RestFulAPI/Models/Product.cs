using System.ComponentModel.DataAnnotations.Schema;

namespace RestFulAPI.Models
{
    public class Product
    {
        public int Id { get; set; }

        public required string Name { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }  // 18 basamak, 2 küsurat

        public int Stock { get; set; }
    }
}
