document.addEventListener('DOMContentLoaded', () => {
    const histoireContainer = document.getElementById('histoire');
    const questionContainer = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const feedback = document.getElementById('feedback');

    const codeInput = document.getElementById('code-input');
    const renderedOutput = document.getElementById('rendered-output');
    const runCodeButton = document.getElementById('run-code');

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
            setTimeout(function() {
                    location.href = href; // Redirection vers la prochaine étape du jeu
            }, 1000);
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
                setTimeout(function() {
                    location.href = href; // Redirection vers la prochaine étape du jeu
                }, 1000);
            }
        }
    });
    runCodeButton.addEventListener('click', runCode);

    loadQuestion();
});
