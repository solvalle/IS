using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Laboratorio3.Models
{
    public class PersonaModel
    {
        // Propiedades: cuando se instancia una persona se puede hacer. Peso=valor
        public string Nombre { get; set; }
        public int Id { get; set; }
        public double Peso { get; set; }
        public double Estatura { get; set; }
        public PersonaModel()
        {
            this.Nombre = "Sin nombre";
            this.Id = 0;
            this.Peso = 0.0;
            this.Estatura = 0.0;
        }

        public PersonaModel(int Id, string Nombre, double Peso, double Estatura)
        {
            this.Nombre = Nombre;
            this.Id = Id;
            this.Peso = Peso;
            this.Estatura = Estatura;

        }
    }
}