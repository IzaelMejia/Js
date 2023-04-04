alert("Este es el Control de Flujo")
let deuda= 500
alert(`Tiene una deuda de $ ${deuda} a pagar`)
let monto = Number(prompt("Ingrese se cantidad a pagar"))
let resultado = 0

if(monto>500){
    resultado= monto-deuda
    alert(`Tu cambio es de ${resultado} pesos `)
}else if(monto>0 && monto<=500){
    resultado= deuda-monto
    alert(`Le restan ${resultado} a pagar`)

}else{
    alert(`Ingresa otra cantidad`)

}

    

