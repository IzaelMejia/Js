//-------------------------------------------------------------------  
                    //Funciones declarativas 
//-------------------------------------------------------------------

//Ejemplo funcion calcular are de un triangulo
// function calcularAreaTriangulo(base, altura) {
//     let area = (base * altura) / 2;
//     return area;
//   }
  
// alert(calcularAreaTriangulo(4, 6)); // Mandamos  llamar la funcion

// //-------------------------------------------------------------------

// //Sumar 2 numeros
// function sumar(a, b) {
//     return a + b;
//   }
//   const resultado = sumar(5, 7);
//   alert(resultado); // Output: 12 // Mandamos  llamar la funcion
  
//-------------------------------------------------------------------

//convierte grados Celsius a Fahrenheit:
// function celsiusToFahrenheit(celsius) {  
//     const fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
//   }
  
//   // Ejemplo de uso
//   const temperaturaCelsius = 20;
//   const temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
//   console.log(temperaturaFahrenheit); // Output: 68 // Mandamos  llamar la funcion
  
//-------------------------------------------------------------------  
                    //  Funciones Expresivas
//-------------------------------------------------------------------
// const restar = function(a, b) {
//     return a - b;
//   }
  
//   // Ejemplo de uso
//   const resultado = restar(7, 5);
//   console.log(resultado); // Output: 2  // Mandamos  llamar la funcion

//-------------------------------------------------------------------

//Eleva un número al cuadrado:
  
// const cuadrado = function(numero) {
//     return numero ** 2;
//   }
  
//   // Ejemplo de uso
//   const resultado = cuadrado(5);
//   console.log(resultado); // Output: 25

//-------------------------------------------------------------------

//Función expresiva que crea una cadena de texto aleatoria:
// const generadorDeCadenas = (function() {
//     const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const longitud = 10;
//     return function() {
//       let cadena = '';
//       for (let i = 0; i < longitud; i++) {
//         const index = Math.floor(Math.random() * caracteres.length);
//         cadena += caracteres[index];
//       }
//       return cadena;
//     }
//   })();
  
//   // Ejemplo de uso
//   console.log(generadorDeCadenas()); // Output: 'Df1hTg6s8W'
//   console.log(generadorDeCadenas()); // Output: 'kNjL2Qw1Eh'
//   console.log(generadorDeCadenas()); // Output: 'Gt9XoRc3Kb'
  

//-------------------------------------------------------------------
//crea un contador que se puede reiniciar
// const contador = (function() {
//     let count = 0; // Se inicializa la variable "count" en cero y se declara como privada dentro del closure
//     return {
//       incrementar: function() { // Se define el método "incrementar" en el objeto devuelto por la función expresiva
//         count++; // Se incrementa la variable "count" en uno cada vez que se llama el método "incrementar"
//       },
//       obtenerValor: function() { // Se define el método "obtenerValor" en el objeto devuelto por la función expresiva
//         return count; // Se devuelve el valor actual de la variable "count"
//       },
//       reiniciar: function() { // Se define el método "reiniciar" en el objeto devuelto por la función expresiva
//         count = 0; // Se reinicia la variable "count" a cero cada vez que se llama el método "reiniciar"
//       }
//     };
//   })();
  
//   // Ejemplo de uso
//   console.log(contador.obtenerValor()); // Output: 0
//   contador.incrementar();       //1
//   contador.incrementar();       //2
//   contador.incrementar();       //3
//   console.log(contador.obtenerValor()); // Output: 3
//   contador.reiniciar();         //reiniciamos
//   console.log(contador.obtenerValor()); // Output: 0

  //-------------------------------------------------------------------

//crea un temporizador que cuenta segundos y minutos:
// const temporizador = (function() {
//     let segundos = 0; // Se inicializa la variable "segundos" en cero y se declara como privada dentro del closure
//     let minutos = 0; // Se inicializa la variable "minutos" en cero y se declara como privada dentro del closure
//     let intervalID = null; // Se inicializa la variable "intervalID" en null y se declara como privada dentro del closure
//     return {
//       iniciar: function() { // Se define el método "iniciar" en el objeto devuelto por la función expresiva
//         intervalID = setInterval(function() { // Se define una función anónima que se ejecutará cada segundo y se asigna a la variable "intervalID"
//           segundos++;
//           if (segundos === 60) { // Si los segundos llegan a 60, se reinician a cero y se incrementan los minutos
//             segundos = 0;
//             minutos++;
//           }
//           console.log(`${minutos}:${segundos}`); // Se muestra el tiempo transcurrido en la consola
//         }, 1000);
//       },
//       detener: function() { // Se define el método "detener" en el objeto devuelto por la función expresiva
//         clearInterval(intervalID); // Se detiene el intervalo de tiempo asignado a la variable "intervalID"
//       }
//     };
//   })();
  
  //temporizador.iniciar(); // Inicia el
  


  //------------------------------------------------------------------------------------------------  
                                   //Funciones Fleccha 
//------------------------------------------------------------------------------------------------- 
//Convierte una cadena de caracteres en una lista de palabras
// const stringToList = str => str.split(' '); //método split() para separar la cadena en un arreglo de palabras." ' ' "separan por espacios en blanco.
// console.log(stringToList('Hola mundo')); // Output: ["Hola", "mundo"]

//-------------------------------------------------------------------------------------------------

// calcula la edad a partir de la fecha de nacimiento
// const calculateAge = birthDate => {   //(birthDate) es el parametro
//     const diffInMs = Date.now() - new Date(birthDate).getTime();
//     const ageDate = new Date(diffInMs);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
  
//   console.log(calculateAge('2001-06-09')); // Output: 33 (dependiendo de la fecha actual)

//-------------------------------------------------------------------------------------------------
//Calcular area de un triangulo
// const triangleArea = (base, height) => {
//     const area = (base * height) / 2;
//     return area;
//   };
  
//   console.log(triangleArea(5, 8)); // Output: 20


//-------------------------------------------------------------------------------------------------

  // Mostrar objetos en un arreglo según una propiedad
//   const cars = [
//     { make: 'Ford', model: 'Mustang', year: 2019 },
//     { make: 'Chevrolet', model: 'Camaro', year: 2020 },
//     { make: 'Dodge', model: 'Challenger', year: 2018 },
//     { make: 'Ford', model: 'F-150', year: 2021 }
//   ];
  
//   const filterCarsByMake = (carList, make) =>
//     carList.filter(car => car.make.toLowerCase() === make.toLowerCase());  // método filter() para crear un nuevo arreglo
  
//   console.log(filterCarsByMake(cars, 'Ford')); // Output: [{ make: 'Ford', model: 'Mustang', year: 2019 }, { make: 'Ford', model: 'F-150', year: 2021 }]

//-------------------------------------------------------------------------------------------------

//suma valores de un arreglo y aplica un factor de escala
// const numbers = [2, 4, 6, 8];

// const scaleAndSum = (numList, factor) =>
//   numList.reduce((total, num) => total + (num * factor), 0); //método reduce() para sumar los valores del arreglo y aplicar el factor de escala.

// console.log(scaleAndSum(numbers, 0.5)); // Output: 10


//-------------------------------------------------------------------------------------------------
//convierte una cadena a mayúsculas
// const toUpperCase = str => str.toUpperCase();
// console.log(toUpperCase('hola mundo')); // Output: "HOLA MUNDO"



//------------------------------------------------------------------------------------------------  
                                   //Funciones Anonimas 
//------------------------------------------------------------------------------------------------- 
//Función anónima como callback
// Definimos un array de números
// const numbers = [1, 2, 3, 4, 5];

// // Utilizamos la función `map` con una función anónima como callback
// const squares = numbers.map(function(num) {
//   // Retornamos el cuadrado de cada número
//   return num ** 2;
// });

// // Mostramos el resultado por consola
// console.log(squares); // [1, 4, 9, 16, 25]

//-------------------------------------------------------------------------------------------------

//Función anónima autoejecutable
// Definimos una función anónima autoejecutable
(function() { //definimos una función anónima autoejecutable que se ejecuta inmediatamente después de ser definida.
    // Creamos una variable local `count` y la inicializamos en 0
    let count = 0;
  
    // Definimos una función anónima que incrementa el valor de `count`
    const increment = function() {
      count++;
      console.log(`El contador es ${count}`);
    }
  
    // Ejecutamos la función `increment` tres veces
    increment();    //1
    increment();    //2
    increment();    //3
  })();
  
  // `count` no está definido en este ámbito, por lo que este código genera un error
  console.log(count);
  