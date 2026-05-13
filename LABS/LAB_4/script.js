// Gera número aleatório entre 0 e 99
let numeroSecreto = Math.floor(Math.random() * 100);

function verificar() {
  let input = document.getElementById("inputnumero");
  let valor = Number(input.value);
  let resultado = document.getElementById("resultado");

  if (valor === numeroSecreto) {
    resultado.innerText = "🎉 Acertou!";
    document.getElementById("body")
      .style.setProperty("background-color", "green");
  } else {
    document.getElementById("body")
      .style.setProperty("background-color", "red");

    if (valor > numeroSecreto) {
      resultado.innerText = "🔻 Muito alto!";
    } else {
      resultado.innerText = "🔺 Muito baixo!";
    }
  }
}