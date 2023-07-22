// Programación declarativa
// Programación funcional

// Ejemplo de programación imperativa

var numbers = [1, 2, 3, 4, 5];
var doubles = [];

for(var i = 0; i < numbers.length; i++) {
	doubles.push(numbers[i] * 2);
}

// console.log("numbers: ", numbers); // [1, 2, 3, 4, 5]
// console.log("doubles: ", doubles); // [2, 4, 6, 8, 10]

// Ejemplo de programación funcional

var duplicaNumero = function(number) {
  return number * 2;
}

var doublesFunctional = numbers.map(duplicaNumero);

// console.log("doublesFunctional: ", doublesFunctional);

// Inmutabilidad

var autoJuan = {
  marca: "Nissan",
  modelo: "Sentra",
  year: 2020
};

// Ejemplo de mutabilidad (estamos mutando un valor incial)

function agregaColor(auto) {
  auto.color = "Negro";

  return auto;
};

// Ejemplo de inmutabilidad (NO estamos mutando un valor incial)

function agregaColorSinMutar(auto) {
  var nuevoAuto = Object.assign({}, auto, {
    color: "Negro"
  });

  return nuevoAuto;
};

var autoLaura = agregaColorSinMutar(autoJuan);

//console.log("El auto de Juan: ", autoJuan);
//console.log("El auto de Laura: ", autoLaura);

//console.log("¿autoJuan es identico a autoLaura?", autoJuan === autoLaura);


// Funciones puras


// Ejemplo de función pura:
function suma(a, b) {
  var miNumero = 2;
  return a + b * miNumero;
}

//console.log("Ejecutar función suma:", suma(2, 2));

// Ejemplo de función inpura:
function numeroAleatorio(numero) {
  return Math.floor(Math.random() * numero);
}

//console.log("Ejecutar numeroAleatorio:", numeroAleatorio(10));

var carrito = [
  {
    item: "Laptop",
    cantidad: 1
  }
];

function agregarItemAlCarrito(item, cantidad) {
  carrito.push({
    item: item,
    cantidad: cantidad
  });
}

function agregarItemAlCarritoSinMutar(carro, item, cantidad) {
  // Operador spread (copia nueva a partir del arreglo original)
  var nuevoCarrito = [...carro];

  nuevoCarrito.push({
    item: item, 
    cantidad: cantidad
  })

  return nuevoCarrito;
};

var carritoActualizado = agregarItemAlCarritoSinMutar(carrito, "Cámara", 1);

//console.log("Carrito:", carrito);
//console.log("Carrito Actualizado:", carritoActualizado);

// Funciones de primera clase

// Ejemplo de función de primera clase:

var cuadrado = function(numero) {
  return numero * numero;
}

var resultado = cuadrado(4);

//console.log("Resultado: ", resultado);

// Ejemplo de función de primera clase aplicado:

var imprimeSaludo = function(nombrePersona) {
  console.log("Hola " + nombrePersona);
};

// Función de alto orden

function otraFuncion(nombre, saluda) {
  saluda(nombre);
};

//otraFuncion("Juan", imprimeSaludo);

// Función de alto orden (map, filter, reduce)

var numeros = [1, 2, 3, 4, 5, 6, 7];

var duplicarNumero = function(number) {
  return number * 2;
}

//console.log("Números: ", numeros);

// Ejemplo con .map()
var numerosDuplicados = numeros.map(duplicarNumero);

//console.log("Números duplicados (map): ", numerosDuplicados)

// Ejemplo con .filter()
var numerosPares = numeros.filter(function(number) {
  // if ((number % 2) === 0) {
  //   return number;
  // }
  return number % 2 === 0;
});

//console.log("Números pares (filter): ", numerosPares);

var sumaDeNumeros = numeros.reduce(function(acumulador, valorActual) {
  return acumulador + valorActual;
}, 0);

//console.log("Suma de números (reduce): ", sumaDeNumeros)

// Reto 1

function flatten(arrays) {
  var newArray = arrays.reduce(function(acumulador = [1, 2, 3, 4, 5], valorActual = [6]) {
    return acumulador.concat(valorActual); // contact()
  }, []);

  return newArray;
}

var arrays = [[1, 2, 3], [4, 5], [6]];
var array = flatten(arrays);

console.log("Resultado reto 1: ", array); // [1, 2, 3, 4, 5, 6]
 
// Reto 2

function compact(array) {
  var nuevoArreglo = array.filter(function(elemento) {
    // if (Boolean(elemento)) {
    //   return elemento;
    // }

    //return Boolean(elemento);

    return elemento;
  })

  return nuevoArreglo;
}

var array = [0, 1, false, 2, '', 3, null, undefined];
var compactedArray = compact(array);

console.log("Resultado Reto 2: ", compactedArray); // [1, 2, 3]

// Reto 3

function loop(start, test, update, body) {
  for (var i = start; test(i); i = update(i)) {
    body(i);
  }
}

var test = function(n) {
  return n > 0;
}

var update = function(n) {
  return n - 1;
}

console.log("Resultado Reto 3: ");
loop(8, test, update, console.log);
// 3
// 2
// 1
