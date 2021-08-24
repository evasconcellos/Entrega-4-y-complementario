class Productos {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

const productos = [
  "",
  new Productos(`Kit cristales 7 chakras`, 250, 100),
  new Productos(`Portavelas`, 600, 120),
  new Productos(`Sahumador de barro`, 400, 130),
  new Productos(`Pack de 10 sahumerios`, 350, 80),
];

const articulos = prompt(
  `Hola, selecciona el número del artículo que quieres comprar: \n\n1) ${productos[1].nombre}\n\n2) ${productos[2].nombre} \n\n3) ${productos[3].nombre} \n\n4) ${productos[4].nombre}`
);

let cantidad = prompt("Elija la cantidad de artículos que quiere comprar");

function sumaTotal() {
  if (cantidad <= productos[articulos].stock && cantidad >= 1) {
    const totalComprado = productos[articulos].precio * cantidad;
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
      productos[articulos].nombre
    }. <br>Su total es de: $${montoFinal()}.</b></h3> `
  );
}
total();
