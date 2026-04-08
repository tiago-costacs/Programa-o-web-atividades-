const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const opcoes = ["pedra", "papel", "tesoura"];
const computador = opcoes[Math.floor(Math.random() * 3)];

rl.question("Escolha pedra, papel ou tesoura: ", (usuario) => {

  usuario = usuario.toLowerCase();

  console.log("Você escolheu:", usuario);
  console.log("Computador escolheu:", computador);

  if (usuario === computador) {
    console.log("Empate!");
  }
  else if (
    (usuario === "pedra" && computador === "tesoura") ||
    (usuario === "tesoura" && computador === "papel") ||
    (usuario === "papel" && computador === "pedra")
  ) {
    console.log("Você venceu!");
  }
  else {
    console.log("Computador venceu!");
  }

  rl.close();
});