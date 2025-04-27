function cadenaMayusculasMinisculas(cadena){
    let cantMayus=0
    for(let i=0; i<cadena.length ; i++){
        if(cadena.charAt(i) === cadena.charAt(i).toUpperCase())
            cantMayus++
    }
    if(cantMayus===cadena.length){
        document.writeln("La cadena está formada solo por Mayúsculas")
    }else if(cantMayus === 0){
        document.writeln("La cadena está formada solo por minúsculas")
    }else {
        document.writeln("La cadena contiene mayusculas y minúsculas")
    }
}

const cadena = prompt("Ingrese un texto")
cadenaMayusculasMinisculas(cadena)