// Sesión 5

// Programación imperativa
// Programación Orientada a objectos (P00)

// Progrmación declarativa
// Programación funcional

var maria = {
  nombre: "Maria",
  apellidos: "González",
  nacimiento: 1989,
  empleo: "Desarrolladora"
};

var raul = {
  nombre: "Raul",
  apellidos: "Gutierrez",
  nacimiento: 1982,
  empleo: "Arquitecto"
};

var ismael = {
  nombre: "Ismael",
  apellidos: "Perez",
  nacimiento: 1992,
  empleo: "Consultor"
};

//console.log(ismael)

String()
Number()
Boolean()
Object()
Array()
Date()

// Ejemplo 1

var Persona = function(nombre, apellidos, nacimiento, empleo, dinero) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.nacimiento = nacimiento;
  this.empleo = empleo;
  this.nombreCompleto = nombre + " " + apellidos;
  this.dineroEnBanco = dinero;
};

var laura = new Persona("Laura", "Figueroa", 1991, "Diseñadora", 500);
var maria = new Persona("Maria", "Gónzalez", 1989, "Desarrolladora", 600);
var ismael = new Persona("Ismael", "Perez", 1992, "Consultor", 400);

console.log("¿Laura es una instancia de Persona?");
console.log(laura instanceof Persona);

console.log("¿Laura es una instancia de Persona?", laura instanceof Persona);
// console.log(laura);
// console.log(maria);
// console.log(ismael);

// Ejemplo 2

var CuentaBancaria = function(dinero) {
  this.cantidad = dinero;
  this.sumaDinero = function(otraCuenta) {
    return new CuentaBancaria(this.cantidad + otraCuenta.cantidad)
  }
}

console.log("¿Laura es una instancia de CuentaBancario?");
console.log(laura instanceof CuentaBancaria);

var cuentaLaura = new CuentaBancaria(500);
var cuentaIsmael = new CuentaBancaria(400);

var nuevaCuenta = cuentaLaura.sumaDinero(cuentaIsmael);

//console.log(nuevaCuenta);
//console.log(cuentaIsmael);

// Reto

var Vec = function(x, y) {
  this.x = x;
  this.y = y;
  this.plus = function(otroVector) {
    return new Vec(this.x + otroVector.x, this.y + otroVector.y);
  };
  this.minus = function(otroVector) {
    return new Vec(this.x - otroVector.x, this.y - otroVector.y);
  };
}

var vec1 = new Vec(1, 2);
var vec2 = new Vec(2, 3);

//console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
//console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }


var Producto = function(codigoBarras, precio, unidades) {
  this.codigoBarras = codigoBarras;
  this.precio = precio;
  this.disponibilidad = unidades;
  this.actualizarInventario = function(unidades) {
    this.disponibilidad = this.disponibilidad + unidades;
  }
}

var jabon = new Producto(12345, 20, 10);
var shampoo = new Producto(92345, 40, 1);

var inventario = [jabon, shampoo]

jabon.actualizarInventario(-2);

//medicamento.darDeAlta(10);

//console.log(medicamento);


// Herencia

var SerVivo = function() {
  this.tieneCelulas = true;
  this.seReproduce = true;
}

var Animal = function() {
  SerVivo.call(this)
  this.comerPlanta = function() {

  }
}

var Perro = function() {
  Animal.call(this)
  this.sonido = "Ladrar";
}

var Gato = function() {
  Animal.call(this)
  this.sonido = "Maullar";
}

var Planta = function() {
  SerVivo.call(this)
  this.fotosintesis = function() {

  }
}

var flor = new Planta();
var pastorAleman = new Perro();
var siames = new Gato();
//var perro = new Animal();

// console.log(flor);
// console.log(pastorAleman);
// console.log(siames);

var Person = function(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
};

var Computadora = function(modelo) {
  this.modelo = modelo;
}

var Developer = function(nombre, apellido, habilidades, experiencia, modeloComputadora) {
  Person.call(this, nombre, apellido)
  Computadora.call(this, modeloComputadora)

  this.habilidades = habilidades;
  this.experiencia = experiencia;
};

//var karen = new Developer("Karen", "Perez", ["js", "php"], 3, "Mac")

//console.log(karen);

var Group = function(arreglo) {
  this.members = arreglo;
  
  this.has = function(num) {
    return this.members.includes(num);
  };

  this.add = function(num) {
    if (!this.members.includes(num)) {
      this.members.push(num)
    }
  };
}

var group = new Group([1, 2, 3, 4, 5]);
// console.log(group);
// // Group { members: [ 1, 2, 3, 4, 5 ] }
// console.log(group.has(5)); // true
// console.log(group.has(10)); // false

// group.add(10);
// group.add(10);
// console.log(group.has(10)); // true
// console.log(group);


var Person1 = function(nombre, apellido, nacimiento) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.nacimiento = nacimiento;
};

var Equipo = function(codigo) {
  this.codigo = codigo;
}

var computadora = new Equipo("AIKJS812")


Person1.prototype.calcularEdad = function() {
  var hoy = new Date();
  var year = hoy.getFullYear();

  console.log(year - this.nacimiento);
}

var lalo = new Person1("Eduardo", "Lopez", 1980);

//console.log(lalo)
//console.log(lalo.calcularEdad())
//console.log(lalo.direccion);

//console.log(computadora.prototype);

var marco = {
  name: "Marco",
  auto: {
    modelo: "Nissan",
    props: {
      color: "Rojo"
    }
  }
}

//console.log(marco.auto.props.color);