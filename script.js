function verificarResposta(correto) {
    const elementoResultado = document.getElementById("resultado");

    if (correto) {
        elementoResultado.textContent = "Parabéns! Você acertou! 🌱 A rotação de culturas protege o solo.";
        elementoResultado.style.color = "#2e7d32"; // Verde para correto
    } else {
        elementoResultado.textContent = "Ops, resposta errada. Tente novamente! 🍂";
        elementoResultado.style.color = "#c62828"; // Vermelho para incorreto
    }
}
