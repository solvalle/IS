using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lab8.Models {
    public class ProductsModel {
        public int Id { set; get; }

        public int Quantity { set; get; }

        public string Name { set; get; }

        public double Price { set; get; }
    }
}