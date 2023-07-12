//Saludos
let saludo = "Hola"

let IngreseNombre = prompt ("Ingrese su nombre");

while (IngreseNombre === ""){
    alert("No has ingresado tu nombre");
    IngreseNombre = prompt ("Ingrese su nombre");
 } 
 
 let nombreIngresado = saludo +", " + IngreseNombre + " ¿Deseas comprar?";
     alert(nombreIngresado);



     
//Eleccion de producto
     let ingreseProducto = prompt("Ingresa que producto deseas - ¿polera o taza?");
     let polera = 35000;
     let taza = 10000;
     
        while (ingreseProducto === ""){
         alert(IngreseNombre +", "+ "no has ingresado el producto.");
         ingreseProducto = prompt("Ingresa que producto deseas - ¿polera o taza?");
        }

        ingreseProducto = ingreseProducto.toLowerCase();

        while ((ingreseProducto != "polera") && (ingreseProducto != "taza")){
            alert(IngreseNombre + ", " + "este producto no existe");
            ingreseProducto = prompt("Ingresa que producto deseas - ¿polera o taza?");
            ingreseProducto = ingreseProducto.toLowerCase();
           }

        if (ingreseProducto == "polera"){
            alert("El precio de la polera es de :" + polera + "¿Deseas cotizar?");
            let ingresaCantidad = prompt("¿Cuantas unidades deseas cotizar?");
            alert("El monto a pagar es: " + polera * ingresaCantidad + " pesos." + " ¿Deseas comprar?");
        }else{
            alert ("El precio de la taza es de :" + taza);
            let ingresaCantidad = prompt("¿Cuantas unidades deseas cotizar?");
            alert("El monto a pagar es: " + taza * ingresaCantidad + " pesos." + " ¿Deseas comprar?");
        }
//Pago del producto