function perimetroRectangulo(base, altura){
    document.writeln(2*(altura+base))
}

const base= parseInt(prompt("Ingrese la base del rectángulo"))
const altura= parseInt(prompt("Ingrese la altura del rectángulo"))

document.writeln(`El perímetro del rectángulo de base ${base} y altura ${altura} es`)
perimetroRectangulo(base, altura)