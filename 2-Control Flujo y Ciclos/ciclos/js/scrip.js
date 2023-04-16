//Ciclos por conteo - For
//Ciclos por condicional - While , do While

/* 
for(desde; hasta; actualización) {
 … //lo que se escriba acá se ejecutará mientras dure el ciclo
}
*/

//--------------------------------------------FOR-----------------------------------------------------------------------

/*
for (let i = 0; i < 10; i++) {
    alert(i);
}

*/

//----------------------------------------------------------------------------------------------------------------------


/*

//Algoritmo para calcular la tabla de multiplicar de un número
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}
//Esto es una tabla multiplicar , ingresa numero el usuario y de ahí entra en el ciclo for que 
// cada vez que pasa el siguiente ciclo es multiplicado por ese numero

*/

//----------------------------------------------------------------------------------------------------------------------

/*
for(let i=1; i<=20;i++){
    let nombre=prompt("Dame tu nombre")
    alert("Hola: "+ nombre +"\nTu turno es el N°: " + i )
}
*/

//----------------------------------------------------------------------------------------------------------------------

/*
for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for. 
    if(i == 5){
        break;
    }
    alert(i);
}
//Imprimimos los turnos con alert , y vemos que solo llega hasta el 5 ya que el break nos interumpe
*/

//----------------------------------------------------------------------------------------------------------------------

/*
for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if(i == 5){
        continue;
    }
    alert(i);
}
//salta esa repetición y siga con la próxima
*/

//-----------------------------------------------------------------------------------------------------------------------
/*
//Así se genera un Bucle

let repetir = true;
while(repetir){
    console.log("Al infinito y...¡Más allá!");
}
*/

//-----------------------------------------------------------------------------------------------------------------------


/*
let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}
*/

//----------------------------------------------------DO   WHILE-------------------------------------------------------------------
// //Sintaxis
// do { 
//     //sentencias del bucle 
// } while (condición)

//----------------------------------------------------DO   WHILE-------------------------------------------------------------------

// let repetir = false;
// do{
// console.log("¡Solo una vez!");
// }while(repetir)

// //--------------------------------Ejemplo-------------------------------
// var color 
// do { 
//    	color = prompt("dame un color (escribe rojo para salir)","") 
// } while (color != "rojo")


// //--------------------------------Ejemplo-------------------------------

// let numero = 0;
// do{
//    //Repetimos con do...while mientras el usuario ingresa un n°
//    numero = prompt("Ingresar Número");
//    console.log(numero);
// //Si el parseo no resulta un número se interrumpe el bucle.   
// }while(parseInt(numero));



//----------------------------------------------------SWICH-------------------------------------------------------------------


// let entrada = prompt("Ingresar un nombre");
// //Repetimos hasta que se ingresa "ESC"
// while(entrada != "ESC" ){
//    switch (entrada) {
//        case "ANA":
//             alert("HOLA ANA");
//             break;
//         case "JUAN":
//             alert("HOLA JUAN");
//             break;
//        default:
//            alert(entrada+"? ¿QUIÉN SOS?")
//            break;
//    }
//    entrada = prompt("Ingresar un nombre");
// }

//-----------------------------------------------------------------------------------------------------------------------------


// Ejercicicoo Pedir número mediante prompt y sumarle otro número 
//en cada repetición,realizando una salida por cada resultado

// let entrada, contador , sumado

// for (let i = 1; i <=5; i++) {
    
//     entrada= Number (prompt("Dame un numero"))
//     sumado= Number (prompt("Dame un a sumar"))
    
//     contador= entrada + sumado
//     alert("Suma: " + contador)
     
// }

//-----------------------------------------------------------EJEMPLO------------------------------------------------------------------


//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

// let entrada, contador , sumado

// while(entrada != "ESC"){
//     entrada=prompt("Ingresa una entrada de texto: ")
//     contador=entrada+"2"
//     alert(contador)

// }


//----------------------------------------------------------EJEMPLO-------------------------------------------------------------------

//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces 

// let entrada = Number(prompt("Dame un numero"))
// for(let i=1; i<=entrada; i++){
//     alert("Hola" + " "+ i)
// }

//-----------------------------------------------------------------------------------------------------------------------------

//    Calcular la suma de los números del 1 al 100:

// let resultado=0
// for(let i=0; i<=100; i++){
//    resultado= resultado+i
//    alert(resultado)

// }
// alert(resultado)

//-----------------------------------------------------------------------------------------------------------------------------

//Imprimir los números del 1 al 50, pero si el número es múltiplo de 3 imprimir "Fizz" en vez del número,
// si es múltiplo de 5 imprimir "Buzz", y si es múltiplo de ambos imprimir "FizzBuzz":

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------------

//Se requiere un algoritmo para obtener la edad promedio de n alumnos
let alumnosRegistrados = Number(prompt("Alumnos a registrar"))
let edadRegistro //registro de las edades
let suma =0  //acumulador de las edades


for(i=1; i<=alumnosRegistrados;i++){
    edadRegistro= Number(prompt("Edad del alumno" + i))
    suma=suma + edadRegistro
}
alert("El promedio de las edades de los "+ alumnosRegistrados+ " alumnos es: "+ suma/alumnosRegistrados )