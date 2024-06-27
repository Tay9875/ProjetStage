document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { question: "Quelle propriété CSS est utilisée pour aligner le texte horizontalement ?", answer: "text-align", code: "<h1>Aligner le texte :</h1>" },
        { question: "Quelle propriété CSS est utilisée pour définir le modèle de boîte d'un élément ?", answer: "display", code: "<h1>Définir le modèle de boîte :</h1>" },
        { question: "Quelle propriété CSS est utilisée pour définir la direction des éléments flexibles ?", answer: "flex-direction", code: "<h1>Définir la direction des éléments flexibles :</h1>" },
        { question: "Quelle propriété CSS est utilisée pour définir l'alignement des éléments flexibles ?", answer: "justify-content", code: "<h1>Définir l'alignement des éléments flexibles :</h1>" },
        { question: "Quelle propriété CSS est utilisée pour définir l'alignement des éléments le long de l'axe transversal ?", answer: "align-items", code: "<h1>Définir l'alignement des éléments le long de l'axe transversal :</h1>" },
        { question: "Quelle propriété CSS est utilisée pour définir la position d'un élément ?", answer: "position", code: "<h1>Définir la position :</h1>" }
    ];

    let currentQuestionIndex = 0;

    const questionContainer = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const codeInput = document.getElementById('code-input');
    const renderedOutput = document.getElementById('rendered-output');
    const feedback = document.getElementById('feedback');
    const runCodeButton = document.getElementById('run-code');
    const nextStepContainer = document.getElementById('next-step');

    function loadQuestion() {
        questionContainer.textContent = questions[currentQuestionIndex].question;
        codeInput.value = questions[currentQuestionIndex].code;
        feedback.textContent = ""; 
    }

    function checkAnswer() {
        const userAnswer = answerInput.value.toLowerCase().trim();
        const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            feedback.textContent = "";
            renderedOutput.textContent += renderedOutput.textContent ? `, ${userAnswer}` : userAnswer;
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
                answerInput.value = ""; 
            } else {
                renderedOutput.textContent += "\n";
                displayNextStepOptions();
            }
        } else {
            feedback.textContent = "Réponse incorrecte. Essayez à nouveau.";
        }
    }

    function displayNextStepOptions() {
        nextStepContainer.innerHTML = `
            <p>Félicitations ! Vous avez fini les exercices CSS.</p>
            <button id="go-home" class="btn btn-primary">Aller à la page d'accueil</button>
            <button id="retry" class="btn btn-secondary">Recommencer les exercices</button>
        `;

        document.getElementById('go-home').addEventListener('click', () => {
            window.location.href = 'acceuil.html';
        });

        document.getElementById('retry').addEventListener('click', () => {
            window.location.href = 'CSSexo1.html';
        });
    }

    runCodeButton.addEventListener('click', checkAnswer);
    answerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });

    loadQuestion();
});
