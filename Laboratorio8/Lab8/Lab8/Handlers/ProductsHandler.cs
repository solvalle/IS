using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using Lab8.Models;

namespace Lab8.Handlers {
    public class ProductsHandler {
        private SqlConnection connection;
        private string connectionRoute;

        public ProductsHandler()  {
            connectionRoute = ConfigurationManager.ConnectionStrings["Lab8Connection"].ToString();
            connection = new SqlConnection(connectionRoute);
        }

        private DataTable CreateTableFromQuery(string query) {
            SqlCommand queryCommand = new SqlCommand(query, connection);
            SqlDataAdapter tableAdapter = new SqlDataAdapter(queryCommand);
            DataTable queryTable = new DataTable();
            connection.Open();
            tableAdapter.Fill(queryTable);
            connection.Close();
            return queryTable;
        }

        public IEnumerable<ProductsModel> GetAll() {
 
            List<ProductsModel> tmpProductsList = new List<ProductsModel>();

            string query = "SELECT * FROM Lab8.Products";
            DataTable resultingTable = CreateTableFromQuery(query);
            foreach (DataRow column in resultingTable.Rows) {
                tmpProductsList.Add(CreateProduct(column));
            }
            IEnumerable<ProductsModel> productsList = tmpProductsList;

            return productsList;
        }

        private ProductsModel CreateProduct(DataRow productRawInfo) {
            return new ProductsModel {
                Id = Convert.ToInt32(productRawInfo["id"]),
                Quantity = Convert.ToInt32(productRawInfo["quantity"]),
                Name = Convert.ToString(productRawInfo["name"]),
                Price = Convert.ToDouble(productRawInfo["price"])
            };
        }
    }
}