let botao = document.getElementById("botao")
function mostrarMensagem() {
    let nome = document.getElementById("nome").value
    document.getElementById("resposta").innerHTML = "Olá, " + nome + "!"
}
botao.addEventListener("click", mostrarMensagem)