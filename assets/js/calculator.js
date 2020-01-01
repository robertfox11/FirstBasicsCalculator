var display = document.querySelector(".display");

var operatorA = "0";
var operatorB = "0";
var opera;
var coma = 0;


// function opuest() {
//     // var nx = Number(operatorA); //convertir en número
//     var nx;
//     if (display == 0) {
//         nx == 0
//     } else {
//         display = -nx;
//     }
// }


var listenerBtn = [];
//operators
var sum = document.getElementById('sum');
var subtraction = document.getElementById('subtraction');

var multiplication = document.getElementById('multiplication');
var division = document.getElementById('division');
//Add in array
listenerBtn.push(sum);
listenerBtn.push(subtraction);
listenerBtn.push(multiplication);
listenerBtn.push(division);
//numbers  btns
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
var decimal = document.getElementById('decimal');
var equals = document.getElementById('equals');
//Add in array
listenerBtn.push(one);
listenerBtn.push(two);
listenerBtn.push(three);
listenerBtn.push(four);
listenerBtn.push(five);
listenerBtn.push(six);
listenerBtn.push(seven);
listenerBtn.push(eight);
listenerBtn.push(nine);
listenerBtn.push(zero);
listenerBtn.push(decimal);
listenerBtn.push(equals);

//btn C AC, Del 
var reset = document.getElementById('reset');
var clear = document.getElementById('clear');
var del = document.getElementById('del');
var masmenos = document.getElementById('masmenos');

one.onclick = function(e) {
    display.textContent = display.textContent + "1";
}
two.onclick = function(e) {
    display.textContent = display.textContent + "2";
}
three.onclick = function(e) {
    display.textContent = display.textContent + "3";
}
four.onclick = function(e) {
    display.textContent = display.textContent + "4";
}
five.onclick = function(e) {
    display.textContent = display.textContent + "5";
}
six.onclick = function(e) {
    display.textContent = display.textContent + "6";
}
seven.onclick = function(e) {
    display.textContent = display.textContent + "7";
}
eight.onclick = function(e) {
    display.textContent = display.textContent + "8";
}
nine.onclick = function(e) {
    display.textContent = display.textContent + "9";
}
zero.onclick = function(e) {
        display.textContent = display.textContent + "0";
    }
    // decimal.onclick = 

decimal.addEventListener('click', function() {
    // 
    if (operatorB == false && coma == 0 || (operatorA == false && coma == 0)) {
        display.textContent = display.textContent + ".";
        coma = 1
    }

})

// listenerBtn.forEach(element => {
//     // console.log(element)
//     element.addEventListener('click', valDisplay)
// });
sum.onclick = function(e) {
    operatorA = display.textContent;
    opera = "+";
    clearC();
}
subtraction.onclick = function(e) {
    operatorA = display.textContent;
    opera = "-";
    clearC();
}
multiplication.onclick = function(e) {
    operatorA = display.textContent;
    opera = "*";
    clearC();
}
division.onclick = function(e) {
    operatorA = display.textContent;
    opera = "/";
    clearC();
}

equals.onclick = function(e) {
    operatorB = display.textContent;
    console.log(operatorB)
    results();
}

clear.onclick = function(e) {
    resetAc();
}
reset.onclick = function(e) {
    resetC();
}

function clearC() {
    display.textContent = "";
}

function resetAc() {
    display.textContent = "";
    operatorA = 0;
    operatorb = 0;
    opera = "";
}

function retro() {
    operatorA = display.textContent;
    cifras = operatorA.length; //hayar número de caracteres en pantalla
    br = operatorA.substr(cifras - 1, cifras) //info del último caracter
    x = operatorA.substr(0, cifras - 1) //quitar el ultimo caracter
    if (x == "") { x = "0"; } //si ya no quedan caracteres, pondremos el 0
    if (br == ".") { coma = 0; } //Si hemos quitado la coma, se permite escribirla de nuevo.
    display.innerHTML = x;
}
//Borrar sólo el último número escrito.
reset.addEventListener('click', function() {

    let cifras = display.length; //hayar número de caracteres en pantalla
    let br = operatorA.substr(-1, cifras) //info del último caracter
        // let x = operatorA.substr(0, cifras - 1) //quitar el ultimo caracter
        // if (x == "") { x = ""; } //si ya no quedan caracteres, pondremos el 0
    if (br == ".") { coma = 0; } //Si hemos quitado la coma, se permite escribirla de nuevo.
    display.textContent = operatorA;
})

function opuest() {
    operatorA = display.textContent;
    nx = Number(operatorA); //convertir en número
    nx = -nx; //cambiar de signo
    x = String(nx); //volver a convertir a cadena
    display.innerHTML = x; //mostrar en pantalla.
}

function results() {
    var res = 0;
    switch (opera) {
        case "+":
            res = parseFloat(operatorA) + parseFloat(operatorB);
            localStorage.setItem(res, opera)
            break;
        case "-":
            res = parseFloat(operatorA) - parseFloat(operatorB);
            localStorage.setItem(res, opera)
            break;
        case "*":
            res = parseFloat(operatorA) * parseFloat(operatorB);
            localStorage.setItem(res, opera)
            break;
        case "/":
            res = parseFloat(operatorA) / parseFloat(operatorB);
            localStorage.setItem(res, opera)
            break;
    }
    resetAc();
    display.textContent = res;
}