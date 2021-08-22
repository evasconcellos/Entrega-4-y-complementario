/* const productos = [
  "",
  "Kit de cristales chakra",
  "Portavelas",
  "Sahumerio",
  "Sahumador de barro",
];
const precios = [0, 400, 250, 300, 450]; */



class Productos {
  constructor (nombre, precio, stock) {
    this.nombre = nombre || undefined
    this.precio = precio || undefined
    this.stock = stock || undefined
    
  }
}


  const Portavelas = new Productos ("Portavelas", 250, 100);
  const kitCristales = new Productos ("Kit cristales 7 chakras", 600, 100);
  const Sahumador = new Productos ("Sahumador de barro", 400, 100);
  const Sahumerios = new Productos ("Pack de 10 sahumerios", 350, 100);



const articulos = prompt(
  `Hola, selecciona el número del artículo que quieres comprar: \n\n1) ${kitCristales.nombre} \n\n2) ${Portavelas.nombre} \n\n3) ${Sahumerios.nombre} \n\n4) ${Sahumador.nombre}`
);

/* let stock = 100; */
let cantidad = prompt("Elija la cantidad de artículos que quiere comprar");

function sumaTotal() {
  if (cantidad <= Productos.stock && cantidad >= 1) {
    const totalComprado = Productos.precio[articulos] * cantidad;
    return totalComprado;
  } else {
    alert("No disponemos de stock suficiente, pruebe con otra cantidad.");
  }
}

function montoFinal() {
  let financiacion = prompt(
    `El monto a pagar es: ${sumaTotal()} , elija su método de pago: \n\n1. Efectivo = Accedes a un 5% de descuento sobre el total. \n2. Tarjeta de crédito o débito = ${sumaTotal()}.`
  );

  if (financiacion == "1") {
    const efectivo = sumaTotal() * 0.95;
    return efectivo;
  } else {
    return sumaTotal();
  }
}

function total() {
  document.write(
    `<h3>Felicidades, compraste un 
    ${articulos[Productos.precio]}. <br>
      Su total es de: $${montoFinal()}.</b></h3> `
  );
}
total();



