const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a quantidade de termos: ", function(n) {

  n = Number(n);

  let numero = 0;
  let soma = 0;
  let serie = "";

  for (let i = 1; i <= n; i++) {
    numero = numero * 10 + 1;
    soma += numero;

    serie += numero;
    if (i < n) {
      serie += " + ";
    }
  }

  console.log(serie);
  console.log("A soma é:", soma);

  rl.close();
});