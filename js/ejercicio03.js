const apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) {
  const suma =
    Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
  apariciones[suma - 2]++;
}

document.writeln(`<table> <thead> <tr> <th><p>Suma🎲🎲</p></th> <th><p>Apariciones</p></th> </tr> </thead> <tbody>`);
for (let i = 0; i < apariciones.length; i++) {
  document.writeln(`<tr> <td>${i + 2}</td> <td>${apariciones[i]}</td> </tr>`);
}
document.writeln(`</tbody> </table>`);
