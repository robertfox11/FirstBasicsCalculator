//funcion results que realiza la operacion
function results() {
    var res = 0;
    switch (opera) {
        case "+":
            res = parseFloat(operatorA) + parseFloat(operatorB);
            break;
        case "-":
            res = parseFloat(operatorA) - parseFloat(operatorB);
            break;
        case "*":
            res = parseFloat(operatorA) * parseFloat(operatorB);
            break;
        case "/":
            res = parseFloat(operatorA) / parseFloat(operatorB);
            break;
    }
    resetAc();
    display.textContent = res;

}
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
    //clear  una vez que se haga click a la operacion 
function clearC() {
    display.textContent = "";
}
//clear una vez que se haga equals  function btn AC
function resetAc() {
    display.textContent = "";
    operatorA = 0;
    operatorb = 0;
    opera = "";
}
// function btn AC
clear.addEventListener('click', resetAc());

//reset funcion btn c borra el ultimo numero escrito
reset.addEventListener('click', function() {
        operatorA = display.textContent = "";
        coma = 0;
    })
    //retro funcion del ultimo escrito
del.onclick = function(e) {
        operatorA = display.textContent;
        cifras = operatorA.length;
        br = operatorA.substr(cifras - 1, cifras)
        x = operatorA.substr(0, cifras - 1)
        if (x == "") { x = "0"; }
        if (br == ".") { coma = 0; }
        display.innerHTML = x;
    }
    //converitmos valor negativo o positivo
opuesto.onclick = function(e) {
    operatorA = display.textContent;
    let nx = Number(operatorA);
    let nx = -nx;
    letx = String(nx);
    display.innerHTML = x;
}