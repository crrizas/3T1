document.addEventListener("DOMContentLoaded", function () {
    const btnAumentar = document.getElementById("aumentar-fonte");
    const btnDiminuir = document.getElementById("diminuir-fonte");
    const root = document.documentElement;
    let tamanhoFonteAtual = 100;

    btnAumentar.addEventListener("click", () => {
        if (tamanhoFonteAtual < 150) {
            tamanhoFonteAtual += 10;
            root.style.fontSize = `${tamanhoFonteAtual}%`;
        }
    });

    btnDiminuir.addEventListener("click", () => {
        if (tamanhoFonteAtual > 70) {
            tamanhoFonteAtual -= 10;
            root.style.fontSize = `${tamanhoFonteAtual}%`;
        }
    });

    const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
    const opcoes = document.getElementById("opcoes-acessibilidade");

    botaoAcessibilidade.addEventListener("click", () => {
        opcoes.classList.toggle("apresenta-lista");
    });

    // Modo escuro
    const botaoModoEscuro = document.getElementById("modo-escuro");
    const body = document.body;

    botaoModoEscuro.addEventListener("click", () => {
        body.classList.toggle("modo-escuro");
        botaoModoEscuro.textContent = body.classList.contains("modo-escuro") ? "Modo Claro" : "Modo Escuro";
    });
});