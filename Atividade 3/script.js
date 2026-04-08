let contador = 0;

const spanContador = document.getElementById("contador");
const btnInc = document.getElementById("incrementar");
const btnDec = document.getElementById("decrementar");

const inputTexto = document.getElementById("inputTexto");
const contadorCaracteres = document.getElementById("contadorCaracteres");
const divParagrafos = document.getElementById("paragrafos");

const tipoLista = document.getElementById("tipoLista");
const btnLista = document.getElementById("adicionarLista");
const divListas = document.getElementById("listas");

const btnReset = document.getElementById("resetar");

btnInc.addEventListener("click", () => {
  contador++;
  spanContador.textContent = contador;
});

btnDec.addEventListener("click", () => {
  if (contador > 0) {
    contador--;
    spanContador.textContent = contador;
  } else {
    alert("O contador já está em zero!");
  }
});

inputTexto.addEventListener("input", () => {
  const texto = inputTexto.value.replace(/\s/g, "");
  contadorCaracteres.textContent = texto.length;
});

inputTexto.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const texto = inputTexto.value.trim();
    if (texto !== "") {
      const p = document.createElement("p");
      p.textContent = texto;
      divParagrafos.appendChild(p);
      inputTexto.value = "";
      contadorCaracteres.textContent = 0;
    }
  }
});

btnLista.addEventListener("click", () => {
  const tipo = tipoLista.value;
  const lista = document.createElement(tipo);

  for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    lista.appendChild(li);
  }

  divListas.appendChild(lista);
});

btnReset.addEventListener("click", () => {
  contador = 0;
  spanContador.textContent = 0;

  divParagrafos.innerHTML = "";
  divListas.innerHTML = "";

  inputTexto.value = "";
  contadorCaracteres.textContent = 0;
});
