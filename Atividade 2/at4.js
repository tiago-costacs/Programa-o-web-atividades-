const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o número de linhas: ", function(linhas) {

  linhas = Number(linhas);

  for (let i = 1; i <= linhas; i++) {
    console.log("*".repeat(i));
  }

  rl.close();
});