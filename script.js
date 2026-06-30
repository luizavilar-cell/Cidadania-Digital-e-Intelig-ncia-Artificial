// 1. Funcionalidade do Modo Escuro
const toggleBtn = document.getElementById('toggle-dark-mode');

toggleBtn.addEventListener('click', () => {
    // Verifica qual é o tema atual do body
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});

// 2. Validador do Quiz de Fake News
const btnChecar = document.getElementById('btn-checar');
const resultado = document.getElementById('quiz-resultado');

btnChecar.addEventListener('click', () => {
    // Pega a opção selecionada pelo usuário
    const respostaSelecionada = document.querySelector('input[name="quiz"]:checked');
    
    if (!respostaSelecionada) {
        resultado.textContent = "Por favor, selecione uma opção antes de checar! ⚠️";
        resultado.style.color = "orange";
        return;
    }

    // Processamento com variáveis conforme critério do Nível 4
    const valorResposta = respostaSelecionada.value;

    if (valorResposta === "correto") {
        resultado.textContent = "Parabéns! Você é um cidadão digital consciente. Sempre cheque os fatos. 👍";
        resultado.style.color = "#16a34a"; // Verde limpo para o acerto
    } else {
        resultado.textContent = "Cuidado! Compartilhar sem checar espalha desinformação e prejudica a sociedade. ❌";
        resultado.style.color = "#dc2626"; // Vermelho limpo para o erro
    }
});
