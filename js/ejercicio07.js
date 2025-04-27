function tablaDeMultiplicar(numero){
    document.writeln(`<h2>Tabla de multiplicar del ${numero}</h2><br>`)
    for(let i=0; i<10; i++){
        document.writeln(`${numero} x ${i+1}  = ${numero*(i+1)} <br>`)
    }
}

const numero= parseInt(prompt("Ingrese un número"))
tablaDeMultiplicar(numero)