//Defino los precios de las láminas
const precioPolarizado = 20000;
const precioAntiBandalico = 25000;
let resultado = 0;

//Defino un array con los tamaños de vehículos permitidos
const tamaniosVehiculos = ["Pequeño", "Mediano", "Grande"];

//Defino un array con los tipos de láminas permitidos
const tiposLaminas = ["Polarizado", "Anti-bandálico"];

//Defino las funciones para validar las entradas del usuario
function validarTamanio(dato) {
  if (tamaniosVehiculos.indexOf(dato) === -1) {
    return false;
  }
  return true;
}
function validarVentanas(dato) {
  if (dato < 1 || dato > 10) {
    return false;
  }
  return true;
}
function validarLamina(dato) {
  if (tiposLaminas.indexOf(dato) === -1) {
    return false;
  }
  return true;
}

//Defino una clase para representar un vehículo
class Vehiculo {
  constructor(tamanio, ventanas, lamina) {
    this.tamanio = tamanio;
    this.ventanas = ventanas;
    this.lamina = lamina;
  }

  //Método que calcula el precio final
  calcularPrecio() {
    let precioLamina = this.lamina;
    let tl = tiposLaminas.indexOf(precioLamina);
    if (tiposLaminas[tl] == "Polarizado") {
      precioLamina = precioPolarizado;
    } else {
      precioLamina = precioAntiBandalico;
    }

    let tam = tamaniosVehiculos.indexOf(this.tamanio);
    if (tamaniosVehiculos[tam] == "Mediano") {
      precioLamina += (precioLamina * 5) / 100;
    } else if (tamaniosVehiculos[tam] == "Grande") {
      precioLamina += (precioLamina * 7) / 100;
    }

    //Calculamos el precio final
    resultado = this.ventanas * precioLamina;
    //Devolvemos el precio final
    return resultado;
  }
}

//Pido al usuario que ingrese los datos
let tamanio = prompt(
  "Ingrese tamaño de vehículo (Pequeño/Mediano/Grande/Grande+)"
);
while (!validarTamanio(tamanio)) {
  tamanio = prompt(
    "No ha ingresado el tamaño correcto. Debe ingresar (Pequeño/Mediano/Grande/Grande+)"
  );
}
let ventanas = parseInt(prompt("Ingrese cantidad de ventanas (del 1 al 10)"));
while (!validarVentanas(ventanas)) {
  ventanas = prompt("Debe ingresar un número del 1 al 10");
}
let lamina = prompt("Ingrese el tipo de lámina (Polarizado/Anti-bandálico)");
while (!validarLamina(lamina)) {
  lamina = prompt(
    "No ha ingresado el tipo de lámina correcto. Debe ingresar Polarizado o Anti-bandálico"
  );
}

//Instancio un objeto Vehiculo
const vehiculo = new Vehiculo(tamanio, ventanas, lamina);

//Muestro el precio final
if (tamanio == "Grande+" || tamanio == "Camiones") {
  alert("Para este tamaño, por favor comunicarse a ventas@hyperion.com.ar");
} else {
  vehiculo.calcularPrecio();
  alert(
    "El total de la cotización por su vehículo es: ARS " + resultado + " + IVA"
  );
}
