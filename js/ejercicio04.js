function parOImpar(numero){
    let resultado
    if(numero%2 === 0){
        return resultado = "Par"
    }else{
        return resultado = "Impar"
    }
}

const numero = parseInt(prompt("Ingrese un numero"))
document.writeln(`El numero ${numero} es ${parOImpar(numero)}`)