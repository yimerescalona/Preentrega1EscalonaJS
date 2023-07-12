// Saludos
let saludo = "Hola";
let ingreseNombre = prompt("Ingrese su nombre");
while (ingreseNombre === "") {
  alert("No has ingresado tu nombre");
  ingreseNombre = prompt("Ingrese su nombre");
}
let nombreIngresado = saludo + ", " + ingreseNombre + " ¿Deseas comprar?";
alert(nombreIngresado);
// Eleccion de producto
let ingreseProducto = prompt("Ingresa qué producto deseas - ¿polera o taza?");
let polera = 35000;
let taza = 10000;
while (ingreseProducto === "") {
  alert(ingreseNombre + ", no has ingresado el producto.");
  ingreseProducto = prompt("Ingresa qué producto deseas - ¿polera o taza?");
}
ingreseProducto = ingreseProducto.toLowerCase();
while (ingreseProducto != "polera" && ingreseProducto != "taza") {
  alert(ingreseNombre + ", este producto no existe");
  ingreseProducto = prompt("Ingresa qué producto deseas - ¿polera o taza?");
  ingreseProducto = ingreseProducto.toLowerCase();
}
let precioProducto;
if (ingreseProducto == "polera") {
  precioProducto = polera;
} else {
  precioProducto = taza;
}
alert("El precio del producto es: " + precioProducto + " pesos. ¿Deseas comprar?");
// Cotización y pago del producto
let ingresaCantidad = prompt("¿Cuántas unidades deseas cotizar?");
while (ingresaCantidad === "" || ingresaCantidad === "0") {
  alert(ingreseNombre + ", no has ingresado una cantidad válida.");
  ingresaCantidad = prompt("¿Cuántas unidades deseas cotizar?");
}
let montoPagar = precioProducto * ingresaCantidad;
alert("El monto a pagar es: " + montoPagar + " pesos.");

let pagoDeProducto = prompt("Ingrese el pago");
while (pagoDeProducto === "" || pagoDeProducto === "0") {
  alert(ingreseNombre + ", no has ingresado tu pago.");
  pagoDeProducto = prompt("Ingrese el pago");
}
let cambio = pagoDeProducto - montoPagar;
let dineroFaltante = montoPagar - pagoDeProducto;

while (pagoDeProducto < montoPagar) {
  alert(
    ingreseNombre +
    ", tu pago es insuficiente, te faltan " +
    dineroFaltante + " pesos"
  );
  pagoDeProducto = prompt("Ingrese un nuevo pago");
  while (pagoDeProducto === "" || pagoDeProducto === "0") {
    alert(ingreseNombre + ", no has ingresado tu pago.");
    pagoDeProducto = prompt("Ingrese el pago");
  }
  cambio = pagoDeProducto - montoPagar;
  dineroFaltante = montoPagar - pagoDeProducto;
}
alert(
  "Pago exitoso, " +
  ingreseNombre +
  ", tu vuelto es: " +
  cambio + " pesos"
);
function despedida (){
  console.log(1)
  return "Muchas gracias por tu compra"
}
const despido = despedida();
console.log(despido) 