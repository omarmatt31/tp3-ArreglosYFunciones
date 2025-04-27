const ciudades = [];

do{
    ciudades.push(prompt("Ingrese una ciudad"))
}while(confirm("¿Desea continuar cargando ciudades?"))



document.writeln("<br>El arreglo de ciudades tiene ", ciudades.length, " elementos")
document.writeln("<ul>")
document.writeln("<li>Primera Posición: ", ciudades[0], "</li>")
document.writeln("<li>Tercera Posición: ", ciudades[2], "</li>")
document.writeln("<li>Ultima Posición: ", ciudades[ciudades.length-1], "</li>")

ciudades.push("Paris")
document.writeln("<br><li>Segunda Posición: ", ciudades[1], "</li>")
document.writeln("</ul>")
ciudades[1]="Barcelona"

document.writeln("<h1>Arreglo de ciudades</h1>")
document.writeln("<ul>")
for(let i=0; i<ciudades.length ; i++){
    document.writeln("<li>Elemento: ", ciudades[i], "</li>")
}
document.writeln("</ul>")