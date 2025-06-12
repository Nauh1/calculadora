let textDisplay = [];
let resetDisplay = false;

document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");

    function updateDisplay() {
        display.textContent = textDisplay.join("");
    }

    function mostrarNaTelinha(valor) {
        if ((textDisplay.length === 0 || (textDisplay.length === 1 && textDisplay[0] === '0'))
            && valor !== '.' && !'()'.includes(valor)) {
            textDisplay = [valor];
        } else {
            if (resetDisplay) {
                textDisplay = [valor];
                resetDisplay = false;
            } else {
                textDisplay.push(valor);
            }
        }
        updateDisplay();
    }

    const botoes = document.querySelectorAll(".num, .op");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const valor = botao.dataset.valor;
            mostrarNaTelinha(valor);
        });
    });

    const botaoApagar = document.getElementById("apagarUm");
    botaoApagar.addEventListener("click", () => {
        textDisplay.pop();
        updateDisplay();
    });

    const botaoApagarTudo = document.getElementById("apagarTudo");
    botaoApagarTudo.addEventListener("click", () => {
        textDisplay = [];
        updateDisplay();
    });

    const botaoCalcular = document.getElementById("calcular");
    botaoCalcular.addEventListener("click", () => {
        try {
            let resultado = eval(textDisplay.join(""));
            textDisplay = [resultado.toString()];
            updateDisplay();
        } catch {
            display.textContent = "Erro";
            textDisplay = [];
        }
    });

});
