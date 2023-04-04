/*
// si - condicion
if (true) {
	// bloque de código a ejecutar
    console.log("vas a ver este mensaje");
}
*/

// --------------------------------------------------------------------------------------

/*
if (false){
    console.log("no vas a ver este mensaje");
}
*/

// --------------------------------------------------------------------------------------


/*
let unNumero =5
//let unNumero = Number (prompt("ingresa el 5 o el 6"))

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 6){ 
    console.log("no vas a ver este mensaje");
}
if (unNumero == 5){
    console.log("vas a ver este mensaje");
}
// Con (unNumero == 6) comparamos si unNumero es igual a 6


//Solo se va ejecutar la sentencia del segundo If ya que es la que cumple la condición

*/

// --------------------------------------------------------------------------------------


/*
let unColor = "Rojo"

// Con (unColor == "Rojo") comparamos si unColor es igual "Rojo"
if (unColor == "Rojo"){
    console.log("el color es Rojo");
}else{
//La instrucción se interpreta cuando unColor NO es "Rojo"
    console.log("el color NO es Rojo");
}

*/

// --------------------------------------------------------------------------------------


/*
let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado " + nombreUsuario);
}

*/

// --------------------------------------------------------------------------------------


/*
let precio = 100.5;

if (precio < 20) {
    alert("El precio es menor que 20");
}
else if (precio < 50) {
    alert("El precio es menor que 50");
}
else if (precio < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}

//entra en todas las condiciones pero como ninguna es menor a 100.5 entonces ejecuta el else 
// que ese quiere decir que el precio es mayor de 100
*/

// --------------------------------------------------------------------------------------

/*
let numero   = 10;
let esMayor5 = (numero > 5); // su valor sera true

if (esMayor5) {
    alert("Es boolean true");
}
//como numero es mayor a 5 es un valor TRUE , por lo que cumple la condicion de VERDAD y ejecuta el alert
*/


// -------------------------------------Condicionales con Operadores-------------------------------------------------

/*
let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if(nombreIngresado !="" && apellidoIngresado !=""){
    alert("Nombre: "+ nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}
//Operador AND &&    , quiere decir que de ley se tienen que cumplir esas condiciones que se les da 

*/

// -------------------------------------Condicionales con Operadores-------------------------------------------------

/*
let nombreIngresado   = prompt("Ingresar nombre");

if(nombreIngresado == "ANA" || nombreIngresado =="ana"){
    alert("Hola " + nombreIngresado + " bienvenida"); 
}else{
    alert("El nombre ingresado NO ES ANA o ana"); 
}
//COn   OR ||   -Cualquiera de las 2 condiciones que cumpla este va ejecutar la condicion
*/


// -------------------------------------Condicionales con Operadores-------------------------------------------------
/*
let nombreIngresado = prompt("Ingresar nombre");

if(nombreIngresado !="" && nombreIngresado == "EMA" || nombreIngresado =="ema"){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
}
//Usamos 2 condicionales  que es &&  y ||    , en el que si esta vacio y ingreo EMA ó ema , ejecuta la condición
*/



// -------------------------------------Ejercicio1-------------------------------------------------
/*
Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), 
compare las entradas y, en función de ciertas condiciones, muestre un resultado.

*/

/*
let valor1= Number (prompt("Dijite su Promedio de la Unidad1"))
let valor2=  Number (prompt("Dijite su Promedio de la Unidad2"))
let resultado = (valor1+valor2)/2

if(valor1 == "" && valor2 == ""){
    alert("LLena los campo")
}
if(valor1<70 && valor1>0 && valor2<70 && valor2>0){
    alert("Lo lamento estas reprobado en las 2 unidades y tu promedio es de " + resultado)
}
else if(valor1>=70 && valor1 <=100 && valor2>70 && valor2 <=100){
    alert("Estas exento, tu promedio es de: " + resultado)
}
else if(valor1>0 && valor1<100 && valor2>0 && valor2<=100 ){
    alert("Tu promedio es: " + resultado)
}
else{
    alert("Hay un error ingresa de nuevo")
}
//Cree un ejercicico en el que le pide el promedio de la unidad 1 y 2 y le devuelve la salida si aprovo o no 
*/


// -------------------------------------Ejercicio2-------------------------------------------------

//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.

/*
let numero1= Number(prompt("Ingresa un numero:"))

if(numero1>1000){
    alert("es mayor a 1000")
}else{
    alert("es menor de 1000")
}
*/

// -------------------------------------Ejercicio3-------------------------------------------------
//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

let numero1= Number(prompt("Ingresa un numero:"))

if(numero1=>10 && numero1<=50 ){
    alert("El numero ingresado esta ente el rango 10 y 50 y es el " + numero1)
}else{
    alert("Esta fuera del rango")
}
