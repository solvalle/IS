using System.Web.Mvc;
using Laboratorio4.Models;
using Laboratorio4.Handlers;

namespace Laboratorio4.Controllers
{
    public class PlanetasController : Controller
    {
       public ActionResult listadoDePlanetas()
        {
            PlanetasHandler accesoDatos = new PlanetasHandler();
            ViewBag.planetas = accesoDatos.obtenerTodoslosPlanetas();
            return View();
        }
    }
}