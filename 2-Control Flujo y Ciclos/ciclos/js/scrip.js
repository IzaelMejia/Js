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
