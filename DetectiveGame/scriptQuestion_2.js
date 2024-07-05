document.addEventListener('DOMContentLoaded', () => {
    const histoireContainer = document.getElementById('histoire');
    const questionContainer = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const feedback = document.getElementById('feedback');

    let htmlCode = document.getElementById("html-code").value;
    let htmlCode2 = document.getElementById("html-code-2").value;
    let renderedOutput = document.getElementById("rendered-output");
    renderedOutput.innerHTML = htmlCode + htmlCode2;

    const runCodeButton = document.getElementById('run-code');

    function loadQuestion() {
        histoireContainer.textContent = questions.histoire;
        questionContainer.textContent = questions.question;
        renderedOutput.innerHTML = htmlCode + htmlCode2;
    }

    function checkAnswer() {
        if (answerInput.value.toLowerCase() === questions.answer.toLowerCase()) {
            const answer = answerInput.value;
            renderedOutput.innerHTML = htmlCode + answer + htmlCode2;
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
        const answer = answerInput.value;
        renderedOutput.innerHTML = htmlCode + answer + htmlCode2;
  
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
