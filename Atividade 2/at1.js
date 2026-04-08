const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 20) + 1;
let tentativas = 0;

function jogar() {
  rl.question("Digite um número entre 1 e 20: ", (entrada) => {

    const chute = Number(entrada);
    tentativas++;

    if (chute > numeroSecreto) {
      console.log("O número secreto é MENOR.");
      jogar();
    } 
    else if (chute < numeroSecreto) {
      console.log("O número secreto é MAIOR.");
      jogar();
    } 
    else {
      console.log(`Acertou! Foram ${tentativas} tentativas.`);
      rl.close();
    }

  });
}

jogar();