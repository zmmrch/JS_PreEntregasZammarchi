//Defino variables con los precios
let precioPolarizado = 20000;
let precioAntiBandalico = 25000;
let resultado = 0;
let arrayVehiculos = [];

//Defino la clase "Vehiculo"
class Vehiculo {
  //Armo el contructor con los atributos de la clase
  constructor(tamanio, ventanas, lamina) {
    this.tamanio = tamanio;
    this.ventanas = ventanas;
    this.lamina = lamina;
  }

  //Defino el método para calcular el precio
  calcularPrecio() {
    //Asigno una variable para usar de precio base en función del tipo de lámina
    let precioLamina = 0;
    if (this.lamina == "Polarizado") {
      precioLamina = precioPolarizado;
    } else {
      precioLamina = precioAntiBandalico;
    }

    //Aplico el incremento según el tamaño del vehículo
    if (this.tamanio == "Mediano") {
      precioLamina += (precioLamina * 5) / 100;
    } else if (this.tamanio == "Grande") {
      precioLamina += (precioLamina * 7) / 100;
    }

    //Calculamos el precio final
    resultado = this.ventanas * precioLamina;

    //Devolvemos el precio final
    return resultado;
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

//Instancio el objeto y lo guardo en una array
const vehiculo = new Vehiculo(tamanio, ventanas, lamina);
arrayVehiculos.push(vehiculo);
vehiculo.calcularPrecio();

//Mostramos el precio final
if (tamanio == "Grande+" || tamanio == "Camiones") {
  alert("Para este tamaño, por favor comunicarse a ventas@hyperion.com.ar");
} else {
  for (const v of arrayVehiculos) {
    alert(
      "Ud. ha ingesado: Tamaño = " +
        v.tamanio +
        " ,Ventanas = " +
        v.ventanas +
        " ,Láminas = " +
        v.lamina +
        ". El total de la cotización por su vehículo es: ARS " +
        resultado +
        " + IVA"
    );
  }
}
