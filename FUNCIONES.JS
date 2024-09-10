// Variables usando let
let nombre = "Santiago";
let edad = 25;
let ciudad = "Madrid";
let esEstudiante = true;
let saldo = 1500.75;

// Variables usando const
const PI = 3.14159;
const URL_API = "https://api.example.com";
const MAX_INTENTOS = 5;
const DESCUENTO = 0.1;
const COLOR_FAVORITO = "Azul";

// Función tipo flecha con cero parámetros, realizando una sola función
const saludar = () => "Hola, ¡bienvenido!";

// Versión extendida con más funcionalidades (validación, switch, etc.)
const saludarExtendido = () => {
  const horaActual = new Date().getHours();
  let saludo;

  switch (true) {
    case horaActual < 12:
      saludo = "Buenos días";
      break;
    case horaActual < 18:
      saludo = "Buenas tardes";
      break;
    default:
      saludo = "Buenas noches";
  }
  return saludo + ", ¡bienvenido!";
};

// Función tipo flecha con un parámetro, realizando una sola función
const cuadrado = (num) => num * num;

// Versión extendida con más funcionalidades (validación, etc.)
const cuadradoExtendido = (num) => {
  if (typeof num !== "number") {
    return "Por favor, ingresa un número válido.";
  }
  return `El cuadrado de ${num} es ${num * num}.`;
};

// Función tipo flecha con dos parámetros, realizando una sola función
const sumar = (a, b) => a + b;

// Versión extendida con más funcionalidades (validación, etc.)
const sumarExtendido = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Ambos parámetros deben ser números.";
  }

  if (a < 0 || b < 0) {
    return "No se permiten números negativos.";
  }

  return `La suma de ${a} y ${b} es ${a + b}.`;
};

// Ejemplo de uso de las funciones
console.log(saludar());
console.log(saludarExtendido());
console.log(cuadrado(4));
console.log(cuadradoExtendido("4")); // Prueba con string para validar
console.log(sumar(5, 10));
console.log(sumarExtendido(5, -10)); // Prueba con número negativo para validar
