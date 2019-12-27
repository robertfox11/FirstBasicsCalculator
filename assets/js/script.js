function saludo() {
    document.write("Hola, este es el resultado de la función saludo");
}
//llamamos a la función saludo() para que ejecute sus instrucciones
saludo();

// function volEsfera(x) {
//     var volumen = 4 / 3 * 3.14 * x * x * x;
//     return volumen;
// }
// var radio = prompt("Introduce la longitud del radio de la esfera: ");
// document.write("El volumen es: " + volEsfera(radio));

//introducimos un precio y descuento a un producto
var precio = prompt("Introduzca Precio producto (en euros): ");
var descuento = prompt("Introduzca descuento (en euros): ");

//definimos la función calculoPVP, que tiene como parámetros los valores de precio y descuento
function calculoPVP(precio, descuento) {
    var IVA = 1.21;
    var PVP = (precio - descuento) * IVA; //en la variable PVP hemos almacenado el PVP calculado
    return PVP; //la función devuelve el valor asignado a la variable PVP
}

document.write("Precio= " + calculoPVP(precio, descuento) + " €");