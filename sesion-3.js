// Ejemplo de una función:

// function miFuncion(parametro1, parametro2) {
  
// }

function calcularEdad(fechaNacimiento) {
  var edad = 2023 - fechaNacimiento;
  return edad;
}

var edadHector = calcularEdad(1996);

// //console.log(edadHector)

function fechaRetiro(year, nombre) {
  // Calcula edad llamando a la función calcularEdad()
  var edadCalculada = calcularEdad(year);
  // Operación
  var retiro = 65 - edadCalculada;

  console.log(nombre + " se retira en " + retiro + " años");
};

// fechaRetiro(1996, "Héctor");


function potencia(base, exponente) {
  var resultado = base;

  if (exponente === 1) {
    return base;
  }

  for (var i = 2; i <= exponente; i++) {
    resultado = resultado * base; // Alternativa: resultado *= base;
  }

  return resultado;
}

// console.log(potencia(2, 2)); // 4
// console.log(potencia(2, 3)); // 8
// console.log(potencia(3, 2)); // 9
// console.log(potencia(3, 3)); // 27
//console.log(potencia(2, 1));

// Expresiones de Función

function teDedicas(job, name) {
  switch(job) {
    case "medico":
      return name + " es " + job + " y ayuda a las personas";
    case "desarrollador/a":
      return name + " es " + job + " crea apps";
    case "diseñador/a":
      return name + " es " + job + " diseña experiencias";
    default:
      return name + " hace otra cosa";
  }
}

var miVariable2 = teDedicas("medico", "Juan Perez");
//console.log(miVariable2);

var miVariable = function(job, name) {
  switch(job) {
    case "medico":
      return name + " es " + job + " y ayuda a las personas";
    case "desarrollador/a":
      return name + " es " + job + " crea apps";
    case "diseñador/a":
      return name + " es " + job + " diseña experiencias";
    default:
      return name + " hace otra cosa";
  }
}

//console.log(miVariable("desarrollador/a", "Lauria García"))

// Expresión de función
var cuadrado = function(num) {
  return num * num;
}

// VS

// Declaración de función
function square(num) {
  return num * num;
}

var miVariable = square(4);

//console.log(miVariable)

// Ejemplo de Expresión de Función

var factorial = function fac(num) {
  //return num < 2 ? 1 : num * fac(num - 1);

  if (num < 2) {
    return num;
  } else {
    return num * fac(num - 1)
  }
}

//console.log(factorial(5)) // 5 * 4 * 3 * 2 * 1 = 120

// Expresion de función Ejecutada Inmediatamente
// (
//   function() {
//     var nombre = "Héctor";
//     console.log(nombre);
//   }
// )();

// Declaración de función convencional

function imprimirNombre() {
  var nombre = "Héctor";
  console.log(nombre);
}

// Ejemplos con párametros

function imprimirNombreCompleto(primerNombre, apellidos) {
  var nombreCompleto = primerNombre + " " + apellidos;
  console.log(nombreCompleto);
}

//imprimirNombreCompleto("Laura", "García");

(
  function(primerNombre, apellidos) {
    var nombreCompleto = primerNombre + " " + apellidos;
    console.log(nombreCompleto);
  }
)//("Juan", "Perez");

var evaluaMayor = function(num1, num2) {
  // if (num1 === num2) {
  //   return "Son iguales";
  // } else if (num1 > num2) {
  //   return num1 + " es mayor";
  // } else {
  //   return num2 + " es mayor";
  // }

  return num1 === num2 ? "Son iguales" : num1 > num2 ? num1 + " es mayor" : num2 + " es mayor";
}

//console.log(evaluaMayor(2, 2));

// 1 posible solución Reto 3 - Sesión 3

function secuenciaFibonacci(limite) {
  var num1 = 1;
  var num2 = 1;

  for(var i = 1; i <= limite; i++) {
    console.log(num1);

    var siguiente = num1 + num2;
    num1 = num2;
    num2 = siguiente;
  }
}

secuenciaFibonacci(100);