using System.Web.Mvc;
using Laboratorio3.Models;
using System;

namespace Laboratorio3.Controllers
{
    public class CalculadoraIMCController : Controller
    {
        public ActionResult ResultadoIMC()
        {
            PersonaModel persona = new PersonaModel(1, "Cristiano Ronaldo", 84.0, 1.87);
            double IMC = persona.Peso / (persona.Estatura * persona.Estatura);
            ViewBag.IMC = IMC;
            ViewBag.persona = persona;
            return View();
        }

        public ActionResult ResultadosAleatoriosIMC()
        {
            PersonaModel[] personas = new PersonaModel[30];
            double[] IMC = new double[30];
            Random random = new Random();
            double peso = 0.0, estatura = 0.0;

            for (int i = 0; i < 30; ++i)
            {
                peso = random.NextDouble() * (150.0 - 20.0) + 20.0;
                estatura = random.NextDouble() * (2.0 - 1.0) + 1.0;
                personas[i] = new PersonaModel(i+1, "Sin nombre", peso, estatura);
                IMC[i] = personas[i].Peso / (personas[i].Estatura * personas[i].Estatura);               
            }
            ViewBag.IMC = IMC;
            ViewBag.personas = personas;
            return View();
        }
    }

}