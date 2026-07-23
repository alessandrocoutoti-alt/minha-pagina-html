const botao = document.getElementById("botao-tema");

botao.addEventListener("click", function () {
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        botao.textContent = "☀️ Modo Claro";
    } else {
        botao.textContent = "🌙 Modo Escuro";
    }
});