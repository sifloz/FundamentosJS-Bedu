//console.log("Operador == (igualdad)");
//console.log(typeof(3));
//console.log(typeof('3'));

// La siguiente expresión evalua dos operandos:
//console.log(3 == '3');

//console.log("Operador === (estrictamente igual)");
//console.log(3 !== '3');

// Operador mayor qué (>):
// console.log(4 > 3);

// Operador menor qué (<):
// console.log(3 < 4);

// Operador mayor o igual que (>=):
//console.log(4 >= 4);

// Operador menor o igual que (<=):
//console.log(15 <= 15);

//console.log(4 >= 4); // true
//console.log(15 <= 15); // true

// Operador AND &&
//console.log(4 > 4);
//console.log(15 < 15);

//console.log(4 > 4 && 15 < 15);


// Operador OR ||
//console.log(2 > 1);
//console.log(1 < 0);
//console.log(2 > 1 || 1 < 0);

// if (2 < 1) {
//   /* El código que se ejecuta 
//   si la condición se cumple */
//   console.log("La condición se cumplió");
// } else {
//   /* El código que se ejecuta 
//   si la condición NO se cumple */
//   console.log("La condición NO se cumplió");
// }

// var time = -1;
// var greeting;

// Antes:
// if (time < 12) {
//   greeting = "Good morning";
// }

// if (time < 20) {
//   greeting = "Good afternoon";
// }

// if (time >= 20) {
//   greeting = "Good night"
// }


// Solución:
// if (time >= 5 && time < 12) {
//   greeting = "Good morning";
// } else if (time >= 12 && time < 20) {
//   greeting = "Good afternoon";
// } else if ((time >= 20 && time < 24) || (time >= 0 && time < 5)) {
//   greeting = "Good night"
// } else {
//   greeting = "Error, esa hora no existe"
// }

// console.log(greeting);


// Switch
// switch(/* Expresión a evaluar*/) {
//   case a:
//     /* Código a ejecutar */
//     break;
//   case b:
//     /* Código a ejecutar */
//     break;
//   default:
// }

// Ejemplo de Switch

// var day = 3;
// var text;

// switch (day) {
//   case 0:
//     //Ejecutar si el valor de day = 0
//     text = "Sunday"; // Domingo
//     break;
//   case 1:
//       //Ejecutar si el valor de day = 1
//       text = "Monday"; // Lunes
//       break;
//   case 2:
//       //Ejecutar si el valor de day = 2
//       text = "Tuesday"; // Martes
//     break;
//   case 3:
//       //Ejecutar si el valor de day = 3
//       text = "Wednesday"; // Miércoles
//     break;
//   case 4:
//       //Ejecutar si el valor de day = 4
//       text = "Thursday"; // Jueves
//     break;
//   case 5:
//       //Ejecutar si el valor de day = 5
//       text = "Friday"; // Viernes
//     break;
//   case 6:
//       //Ejecutar si el valor de day = 6
//       text = "Saturday"; // Sábado
//     break;
//   default:
//     text = "Error, el día no existe"
//     break;
// }

// console.log(text);




// Operador Ternario

// var velocidad = 180;
// // var mensaje;

// // if (velocidad > 100) {
// //   mensaje = "Vas muy rápido";
// // } else {
// //   mensaje = "Vas debajo del límite";
// // }

// var mensaje = (velocidad > 100) ? "Vas muy rápido" : "Vas debajo del límite";

// console.log(mensaje);


// Truthy y Falsy

// if ("false") {
//   console.log("Beep")
// } else {
//   console.log("Boop")
// }

// Ciclo FOR

// for(var i = 0; i <= 50; i++) {
//   // Código a ejecutar en cada ciclo
//   console.log("Valor de i");
//   console.log(i);
// }

// Ciclo WHILE

// var i = 0;
// var nombre = "Kiwi";

// while (nombre === "Kiwi") {
//   if (i === 10) {
//     nombre = "Banana";
//   }
//   console.log(nombre);
//   i++;
// }


// Ejemplo de ciclos

// Mostrar números pares del 0 a l 100

// for(var i = 0; i <= 100; i++) {

//   // Evaluar si es par a través del residuo
//   if ((i % 2) === 0) {
//     console.log(i)
//   }

// }

// Ejemplo de números primos
// Un número primo es número natural mayor a 1 que sólo es divisible entre 1 y sí mismo.

// for (var counter = 2; counter <= 100; counter++) {
//   var esPrimo = true;

//   for (var i = 2; i <= counter; i++) {
//     if (counter % i === 0 && i !== counter) {
//       esPrimo = false;
//     }
//   }

//   if (esPrimo) {
//     console.log(counter);
//   }
// }