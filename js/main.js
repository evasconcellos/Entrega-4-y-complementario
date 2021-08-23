const productos = [
  "",
  "Kit de cristales chakra",
  "Portavelas",
  "Sahumerio",
  "Sahumador de barro",
];
const stock = [0, 100, 120, 130, 80];
const precios = [0, 400, 250, 300, 450];

const articulos = prompt(
  `Hola, selecciona el número del artículo que quieres comprar: \n\n1) Kit de cristales chakra\n\n2) Portavelas \n\n3) Kit de sahumerios \n\n4) Sahumador de barro`
);

let cantidad = prompt("Elija la cantidad de artículos que quiere comprar");

function sumaTotal() {
  if (cantidad <= stock[articulos] && cantidad >= 1) {
    const totalComprado = precios[articulos] * cantidad;
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
    `<h3>Felicidades, compraste un ${
      productos[articulos]
    }. <br>Su total es de: $${montoFinal()}.</b></h3> `
  );
}
total();
