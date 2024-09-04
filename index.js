'use strict'
document.write('<h1>Hola mundo</h1>')

// Tipos de datos
// cadena
;('Hola Mundo')
;('Hola Mundo')

// Número
10000
;-2.3

// Booleano
true
false

// Objeto
const objeto = {
 nombre: 'Papuronald',
 valor1: 99.99,
 valor2: 35,
}

// Variables
var nombre = 'Gabriel'
let apellido = 'Gonzalez'
nombre = 'gabo'
const PI = 3.1415
console.log(nombre)
console.log(apellido)
console.log(PI)

// Estuche de camellos
let nombreUsuario = 'AAAA'
var lastNameOfPerson = 'toiletza'

// Operadores
let NumeroUno = 1
let NumeroDos = 2
let resultado = NumeroUno + NumeroDos
console.log(resultado)

let name = 'Papu'
let apellido2 = 'Medina'
let resultt = namee + apellido2
console.log(resultt)

let contraseña = 'Notoiletsigma'
let entrada = 'Notoiletsigm'
let resulttt = entrada === contraseña
console.log(resulttt)

if (resulttt === true) {
 console.log('Inicio de sesión correcto')
} else {
 console.log('Inicio de sesión incorrecto')
}

let puntuacion = 70
if (puntuacion > 30) {
 console.log('Estás good')
} else {
 console.log('Estas bad')
}

let tipoCard = 'Tarjeta de débito'
switch (tipoCard) {
 case 'Tarjeta nequi':
  console.log('madre')
  break
 case 'Tarjeta de débito':
  console.log('Síííí')
  break
 default:
  console.log('¿Qué usas?')
  break
}

// Iteradores
let cuenta = 1
while (cuenta < 50) {
 console.log(cuenta)
 cuenta++
}

let nombres = ['Gabriel', 'Papuronald', 'Papu']
console.log(nombres.length)
for (let i = 0; i < nombres.length; i++) {
 console.log(nombres[i])
}

// Funciones
function saludo() {
 console.log('Hola')
}
saludo()