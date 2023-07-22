console.log("Sesión 4")

// Diferencias de declaración de variables
var color1 = "Rojo";
const color2 = "Azul";
let color3 = "Verde";

// console.log(color1)
// console.log(color2)
// console.log(color3)

var colores = ["Rojo", "Azul", "Verde"];

// console.log(colores[0]);
// console.log(colores[1]);
// console.log(colores[2]);
// console.log(colores[3]);

// Ejemplo 1 de Arreglo

function duplicaArreglo(arreglo) {
  
  var nuevoArreglo = [];

  for(var i = 0; i < arreglo.length; i++) {
    nuevoArreglo.push(arreglo[i] * 2);
  }

  return nuevoArreglo;
}

//console.log(duplicaArreglo([1, 2, 3, 4, 5, 6, 7, 8]));

// 2, 4, 6, 8, 10

// Reto 1
// Promedio = sum todos elementos / num. de elementos

const calificaciones = [9, 5, 6, 8, 9, 10, 10];
let suma = 0;

function calcularPromedio(numeros) {

  if (numeros.length === 0) {
    return 0;
  }

  for(var i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }

  return suma / numeros.length;
}

//console.log(calcularPromedio(calificaciones))
//console.log(suma)

// Diferencia entre var y let

let nombre = "Betito";

if (1 === 1) {
  let nombre = "Pixel";
}

// console.log(nombre);

// Objetos

var autoNissan = {
  marca: "Nissan"
}

var juanArreglo = ["Perez", "Juan", 34, autoNissan];

//juanArreglo.push("CDMX")
//juanArreglo[0] = "Garcia";
//console.log(juanArreglo)

var juan = {
  nombre: "Juan",
  apellidoPaterno: "Perez",
  apellidoMaterno: "Garcia",
  edad: 18,
  calificaciones: [96, 87, 50],
  auto: autoNissan
};

juan["direccion"] = "CDMX";
juan.nombre = "Juan José";

//console.log(juan)
//console.log(juan["nombre"])

// Transformar objeto en arreglo

var auto = {
  marca: "Nissan",
  modelo: "Versa",
  year: 2022,
  tranmision: "Standar",
};

// [
//   ["marca", "Nissan"],
//   ["modelo", "Versa"],
//   ["year", 2022],
//   ["transmision", "Standar"]
// ]

function objetoArreglo(objeto) {
  //console.log(objeto)
  var claves = Object.keys(objeto); // ["marca", "modelo", "year", "transmision"]
  var valores = [];

  for(var i = 0; i < claves.length; i++) {
    valores.push([claves[i], objeto[claves[i]]]); // ["marca", "Nissan"]
  }

  return valores;
}

// console.log(objetoArreglo(auto));

var pedro = {
  nombre: "Pedro",
  apellidoPaterno: "Hernandez",
  apellidoMaterno: "Garcia",
  edad: 27,
  calcularEdad: function(fechaNacimiento) {
    var hoy = new Date();
    // console.log(hoy.getUTCHours());
    var edad = hoy.getFullYear() - fechaNacimiento;
    return edad;
  }
};

//console.log(pedro.calcularEdad(1980));

var personas = [
  { nombre: 'Steven', profesion: 'Diseñador', edad: 37 },
  { nombre: 'Karen', profesion: 'Programadora', edad: 31 },
  { nombre: 'Pablo', profesion: 'Analista', edad: 29 },
  { nombre: 'Chris', profesion: 'Administrador', edad: 33 },
];

function pluck(arreglo, propiedad) {

  if (arreglo.length === 0 || propiedad === null || propiedad === undefined) {
    console.log("El arreglo está vacío o la propiedad no definida")
    return;
  }

  var claves = Object.keys(personas[0])

  // Validar que la propiedad recibida exista dentro de claves
  if (!claves.includes(propiedad)) {
    console.log("La propiedad NO existe en el objeto");
    return;
  }

  for(var i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i][propiedad])
  }
}

console.log(pluck(personas, "nombre"));
// "Steven", "Karen", "Pablo", "Chris"
