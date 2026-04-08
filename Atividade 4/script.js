//preço do combustível
const precoGasolina = 6.69;
const precoEtanol = 5.85;
const precoDiesel = 6.10;

//função
const atualizarValor = () => {
    let tipo = document.getElementById("combustivel").value; //valores do elemento HTML
    let litros = parseFloat(document.getElementById("litros").value);
    
    // Validações
    if (!tipo) {
        alert("Por favor, escolha um tipo de combustível.");
        return;
    }
        if(!litros || isNaN(litros) || litros <= 0) {
        alert("Por favor, insira uma quantidade válida de litros (maior que zero).");
        return;
        }
    
    
    let precoPorLitro;
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            console.log("Escolha uma opção");
            return;
    };
    console.log(tipo);
    console.log(precoPorLitro);
    calcularAbastecimento(precoPorLitro, litros); //chamando a função
};

let tipo = document.getElementById("combustivel"); //elemento HTML
tipo.addEventListener("change", atualizarValor); //evento ao elemento HTML

const calcularAbastecimento = (precoCombustivel, litros) => {
    let valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = formatarMoeda(valorTotal);
};

const formatarMoeda = (valor) => {
    return "R$ " + valor.toFixed(2).replace(".", ",");
};

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);

// Evento para prevenir envio do formulário ao pressionar Enter
let form = document.getElementById("formCombustivel");
form.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});