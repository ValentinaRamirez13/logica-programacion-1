///Punto 1. Solicitar al usuario 3 números y guardarlos
let num1 = parseInt(prompt("Ingresa el primer número = "));
let num2 = parseInt(prompt("Ingresa el segundo número = "));
let num3 = parseInt(prompt("Ingresa el tercer número = "));
console.log("Los números ingresados son = " + num1 + "-" + num2 + "-" + num3);    

///Punto 2.Analizar los números, identificar cual es el número mayor, el número del centro y el número menor.</h2>
function calcularMayor(){
let numMayor = 0;
if (num1>=num2 && num1>=num3){
    numMayor = num1;
    } else if (num2>=num1 && num2>=num3){
        numMayor = num2;
    } else {
        numMayor = num3;
    }
    return numMayor;
}

function calcularCentro(){
    let numCentro = 0;
    if ((num2>num1 && num2<num3)||(num2<num1 && num2>num3)){
        numCentro = num2;
    }else if ((num1>num2 && num1<num3)||(num1<num2 && num1>num3)){
        numCentro = num1;
    }else{
        numCentro = num3;
    }
    return numCentro
}


function calcularMenor(){
    let numMenor = 0;
    if (num1<=num2 && num1<=num3){
        numMenor = num1;
    } else if (num2<=num1 && num2<=num3){
        numMenor = num2;
    } else {
        numMenor = num3;
    }
    return numMenor;
}

let mayor = calcularMayor(num1, num2, num3);
let menor = calcularMenor(num1, num2, num3);
let centro = calcularCentro(num1, num2, num3);

console.log("El número mayor es: " + mayor);
console.log("El número central es: " + centro);
console.log("El número menor es: " + menor);

///Punto 3. Imprimir los números ordenados de mayor a menor, y de menor a mayor.
console.log("Los números que ingreso son = " + num1 + "-" + num2 + "-" + num3)
console.log("Ordenados de mayor a menor = " + mayor + "-" + centro + "-" + menor)
console.log("Ordenados de menor a mayor = " + menor + "-" + centro + "-" + mayor)

/// Punto 4. Identificar si los números son iguales e imprimir un mensaje diciendo que los números son iguales.
function calcularIguales(){
    if (num1 === num2 && num1 === num3){
        console.log("Todos los números ingresados son iguales = " + num1)
    }else if  (num1 === num2 || num1===num3 || num2===num3){
        console.log("Dos de los números ingresados son iguales.")
    }else{
        console.log ("Todos los números que ingreso son diferentes")
    }
}
calcularIguales()