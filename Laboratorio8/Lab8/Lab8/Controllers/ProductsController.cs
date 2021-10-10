using Lab8.Models;
using Lab8.Handlers;
using System.Web.Mvc;

namespace shop_demo_app.Controllers {
    public class ProductsController : Controller {
        private ProductsHandler ProductsHandler;

        public ProductsController()   {
            ProductsHandler = new ProductsHandler();
        }

        public ActionResult Index() {
            return View();
        }

        public JsonResult GetAllProducts()  {
            var products = ProductsHandler.GetAll();
            return Json(products, JsonRequestBehavior.AllowGet);
        }
    }
}