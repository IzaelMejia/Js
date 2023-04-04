alert("Este es el Ciclo ")
alert("Tiene una deuda de $500 pesos ")
let totalPago = 0;
while (totalPago < 500) {
  let pago = parseInt(prompt("Ingrese la cantidad a pagar:"));
  totalPago += pago;
  console.log(`Total pagado: ${totalPago}`);
}

if (totalPago > 500) {
  let cambio = totalPago - 500;
  console.log(`Gracias por su compra! Aquí tiene su cambio: ${cambio}`);
} else {
  console.log("Gracias por su compra!");
}