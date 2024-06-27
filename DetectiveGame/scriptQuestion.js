document.addEventListener('DOMContentLoaded', () => {
    const href = 'HTMLexo3.html'; // Définir l'URL cible

    function loadQuestion() {
        histoireContainer.textContent = questions.histoire;
        questionContainer.textContent = questions.question;
        codeInput.value = questions.code;
        renderedOutput.innerHTML = questions.code;
    }

    function checkAnswer() {
        if (answerInput.value.toLowerCase() === questions.answer.toLowerCase()) {
            const code = codeInput.value;
            const answer = answerInput.value;
            renderedOutput.innerHTML = code + answer;
            location.href = href; // Rediriger vers l'URL cible
            return true;
        } else {
            feedback.textContent = "Mauvaise réponse. Essayez encore.";
            return false; // Ajouté pour assurer un retour booléen
        }
    }

    function runCode() {
        const code = codeInput.value;
        const answer = answerInput.value;
        renderedOutput.innerHTML = code + answer;
    }

    document.getElementById('run-code').addEventListener('click', checkAnswer);
    answerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (checkAnswer() === true) {
                location.href = href; // Rediriger vers l'URL cible
            }
        }
    });
    runCodeButton.addEventListener('click', runCode);

    loadQuestion();
});
