//Defino variables con los precios
let precioPolarizado = 20000;
let precioAntiBandalico = 25000;
let resultado = 0;

//Defino la clase "Vehiculo"
class Vehiculo {
  //Armo el contructor con los atributos de la clase
  constructor(tamanio, ventanas, lamina) {
    this.tamanio = tamanio;
    this.ventanas = ventanas;
    this.lamina = lamina;
  }
  //Defino el método para calcular el precio
  calcularPrecio(tamanio, ventanas, lamina) {
    switch (lamina) {
      case "Polarizado":
        if (tamanio == "Mediano") {
          precioPolarizado = precioPolarizado + (precioPolarizado * 5) / 100;
        } else if (tamanio == "Grande") {
          precioPolarizado = precioPolarizado + (precioPolarizado * 7) / 100;
        }
        resultado = ventanas * precioPolarizado;
        break;
      case "Anti-bandálico":
        if (tamanio == "Mediano") {
          precioAntiBandalico =
            precioAntiBandalico + (precioAntiBandalico * 5) / 100;
        } else if (tamanio == "Grande") {
          precioAntiBandalico =
            precioAntiBandalico + (precioAntiBandalico * 7) / 100;
        }
        resultado = ventanas * precioAntiBandalico;
        break;
    }
    return resultado;
  }
  //Defino el método para mostrar la cotización solicitada
  mostrarCotizacion(resultado) {
    alert(
      "El total de la cotización por su vehículo es: ARS " +
        resultado +
        " + IVA"
    );
  }
}

//Defino la variable y pido al usuario que ingrese el tipo de vehículo
let tamanio = prompt(
  "Ingrese tamaño de vehículo (Pequeño/Mediano/Grande/Grande+/Camiones)"
);
//Validación para que el usuario solo pueda eligir entre esas opciones
while (
  tamanio != "Pequeño" &&
  tamanio != "Mediano" &&
  tamanio != "Grande" &&
  tamanio != "Grande+" &&
  tamanio != "Camiones"
) {
  tamanio = prompt(
    "No ha ingresado el tamaño correcto. Debe ingresar (Pequeño/Mediano/Grande/Grande+/Camiones)"
  );
}

//Defino la variable y pido al usuario que ingrese la cantidad de ventanas a polarizar
let ventanas = parseInt(prompt("Ingrese cantidad de ventanas (del 1 al 10)"));
//Validación para que el usuario solo pueda elegir un número entre 1 y 10
while (ventanas < 1 || ventanas > 10) {
  ventanas = prompt("Debe ingresar un número del 1 al 10");
}

//Defino la variable y pido al usuario que ingrese el tipo de lámina
let lamina = prompt("Ingrese el tipo de lámina (Polarizado/Anti-bandálico)");
//Validación para que el usuario solo pueda elegir entre estos tipos de lámina
while (lamina != "Polarizado" && lamina != "Anti-bandálico") {
  lamina = prompt(
    "No ha ingresado el tipo de lámina correcto. Debe ingresar Polarizado o Anti-bandálico"
  );
}

//Instancio el objeto
const vehiculo = new Vehiculo(tamanio, ventanas, lamina);

//Recorro el objeto
for (let clave in vehiculo) {
  tamanio = vehiculo.tamanio;
  ventanas = vehiculo.ventanas;
  lamina = vehiculo.lamina;
}

//Mensaje en casos que el tamaño del vehiculo sea Grande+ o Camiones
if (tamanio == "Grande+" || tamanio == "Camiones") {
  alert("Para este tamaño, por favor comunicarse a ventas@hyperion.com.ar");
} else {
  //Llamo al método para calcular la cotización
  vehiculo.calcularPrecio(tamanio, ventanas, lamina);
  //Llamo al método para mostrar el resultado de la cotización
  vehiculo.mostrarCotizacion(resultado);
}
