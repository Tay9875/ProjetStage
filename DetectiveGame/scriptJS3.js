document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { question: "Quelle déclaration permet de créer une variable à portée de bloc en JavaScript ?", answer: "let", code: "<h1>Créez une variable :</h1>" },
        { question: "Quelle déclaration permet de créer une constante en JavaScript ?", answer: "const", code: "<h1>Déclarez une constante :</h1>" },
        { question: "Quelle déclaration est utilisée pour définir une fonction en JavaScript ?", answer: "function", code: "<h1>Définissez une fonction :</h1>" },
        { question: "Quelle structure de contrôle est utilisée pour des conditions en JavaScript ?", answer: "if", code: "<h1>Utilisez une structure conditionnelle :</h1>" },
        { question: "Quelle boucle est utilisée pour répéter des actions en JavaScript ?", answer: "for", code: "<h1>Créez une boucle :</h1>" },
        { question: "Quelle instruction arrête l'exécution d'une fonction et renvoie une valeur en JavaScript ?", answer: "return", code: "<h1>Retournez une valeur :</h1>" }
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
            <p>Félicitations ! Vous avez fini les exercices JavaScript.</p>
            <button id="go-home" class="btn btn-primary">Aller à la page d'accueil</button>
            <button id="retry" class="btn btn-secondary">Recommencer les exercices</button>
        `;

        document.getElementById('go-home').addEventListener('click', () => {
            window.location.href = 'acceuil.html';
        });

        document.getElementById('retry').addEventListener('click', () => {
            window.location.href = 'JSexo1.html';
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
