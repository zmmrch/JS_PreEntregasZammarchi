Primera Pre-Entrega - Simulador interactivo
Escenario:
Tengo un conocido que tiene una empresa de laminados y polarizados. Su necesidad es incorporar a la página de su empresa un cotizador para que el usuario pueda acceder y obtener una cotización online. El ejercicio contempla los siguientes parámetros:
    1) Tamaño del vehiculo: Pequeño, Mediano, Grande, Grande+ y Camiones. Para estos dos últimos, el cotizador debe informar que el usuario se tiene que comunicar por mail a la empresa. El tamaño "Mediano" tendrá un incremento del 5% del precio de la lámina, y el tamaño "Grande" tendrá un incremento del 7%.
    2) Cantidad de ventanas: puede elegir un número entre 1 y 10, como máximo.
    3) Tipo de lámina: Polarizado o Anti-bandálico, las cuales tienen precios diferentes.
La función configurada toma el precio según el tipo de lámina, le incluye el porcentaje adicional según el tamaño del vehículo, y lo multiplica por la cantidad de ventanas. Otra función muestra por pantalla el resultado de la cotización.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Seguna Pre-Entrega:
Realicé las siguientes modificaciones sobre el archivo simulador.js:
1) Desarrollé la clase "vehículos"
2) En la misma clase desarrollé el método para calcular la cotización y mostrar el resultado
3) Al final del código se instancia el objeto, se recorre y se llama al método con sus parámetros
