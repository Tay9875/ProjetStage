document.addEventListener('DOMContentLoaded', () => {
    const href = 'CSSexo3.html'; 

    const questions = {
        histoire: "Vous avez décidé d'examiner les documents de la clé USB pour trouver des motifs ou des communications suspectes.",
        question: "Changez la couleur du texte de l'adresse en bleu à l'aide de CSS.",
        answer: "h2 { color: blue; }",
        code: "<h1>Rentrez l'adresse:</h1><h2>38 Rue de l'Entrepreneur</h2>"
    };

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
            renderedOutput.innerHTML = code + "<style>" + answer + "</style>";
            location.href = href; 
            return true;
        } else {
            feedback.textContent = "Mauvaise réponse. Essayez encore.";
            return false; 
        }
    }

    function runCode() {
        const code = codeInput.value;
        const answer = answerInput.value;
        renderedOutput.innerHTML = code + "<style>" + answer + "</style>";
    }

    document.getElementById('run-code').addEventListener('click', checkAnswer);
    answerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (checkAnswer() === true) {
                location.href = href; 
            }
        }
    });
    runCodeButton.addEventListener('click', runCode);

    loadQuestion();
});
