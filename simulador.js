//Defino variables con los precios
let precioPolarizado = 20000;
let precioAntiBandalico = 25000;
let resultado = 0;

//Defino la variable y pido al usuario que ingrese el tipo de vehículo
let tamanioVehiculo = prompt(
  "Ingrese tamaño de vehículo (Pequeño/Mediano/Grande/Grande+/Camiones)"
);

//Validación para que el usuario solo pueda eligir entre esas opciones
while (
  tamanioVehiculo != "Pequeño" &&
  tamanioVehiculo != "Mediano" &&
  tamanioVehiculo != "Grande" &&
  tamanioVehiculo != "Grande+" &&
  tamanioVehiculo != "Camiones"
) {
  tamanioVehiculo = prompt(
    "No ha ingresado el tamaño correcto. Debe ingresar (Pequeño/Mediano/Grande/Grande+/Camiones)"
  );
}

//Defino la variable y pido al usuario que ingrese la cantidad de ventanas a polarizar
let cantidadVentanas = parseInt(
  prompt("Ingrese cantidad de ventanas (del 1 al 10)")
);

//Validación para que el usuario solo pueda elegir un número entre 1 y 10
while (cantidadVentanas < 1 || cantidadVentanas > 10) {
  cantidadVentanas = prompt("Debe ingresar un número del 1 al 10");
}

//Defino la variable y pido al usuario que ingrese el tipo de lámina
let tipoLamina = prompt(
  "Ingrese el tipo de lámina (Polarizado/Anti-bandálico)"
);

//Validación para que el usuario solo pueda elegir entre estos tipos de lámina
while (tipoLamina != "Polarizado" && tipoLamina != "Anti-bandálico") {
  tipoLamina = prompt(
    "No ha ingresado el tipo de lámina correcto. Debe ingresar Polarizado o Anti-bandálico"
  );
}

//Funcion para calcular los precios de polarizados en función del tamaño del vehículo
function calcularPrecioPolarizado(vehiculo, cantidad, precio) {
  if (vehiculo == "Mediano") {
    precio = precio + (precio * 5) / 100;
  }
  if (vehiculo == "Grande") {
    precio = precio + (precio * 7) / 100;
  }
  resultado = cantidad * precio;
}

//Funcion para calcular los precios de anti-bandálicos en función del tamaño del vehículo
function calcularPrecioAntiBandalico(vehiculo, cantidad, precio) {
  if (vehiculo == "Mediano") {
    precio = precio + (precio * 5) / 100;
  }
  if (vehiculo == "Grande") {
    precio = precio + (precio * 7) / 100;
  }
  resultado = cantidad * precio;
}

//Funcion para mostrar el resultado total de la cotización
function mostrarResultado(mensaje) {
  alert(
    "El total de la cotización por su vehículo es: ARS " + mensaje + " + IVA"
  );
}

//Mensaje en casos que el tamaño del vehiculo sea Grande+ o Camiones
if (tamanioVehiculo == "Grande+" || tamanioVehiculo == "Camiones") {
  alert("Para este tamaño, por favor comunicarse a ventas@hyperion.com.ar");
}

//Llamado de las funciones
if (tipoLamina == "Polarizado") {
  calcularPrecioPolarizado(tamanioVehiculo, cantidadVentanas, precioPolarizado);
  mostrarResultado(resultado);
}

if (tipoLamina == "Anti-bandálico") {
  calcularPrecioAntiBandalico(
    tamanioVehiculo,
    cantidadVentanas,
    precioAntiBandalico
  );
  mostrarResultado(resultado);
}
