document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { question: "Quelle balise représente un formulaire HTML ?", answer: "form", code: "<h1>Rentrez l'adresse :</h1>" },
        { question: "Quelle balise représente un contrôle qui fournit une liste d'options ?", answer: "select", code: "<h1>Sélectionnez une option :</h1>" },
        { question: "Quelle balise est utilisée pour créer un contrôle interactif dans un formulaire web ?", answer: "input", code: "<h1>Entrez votre réponse :</h1>" },
        { question: "Quelle balise est utilisée pour créer un bouton dans un formulaire ?", answer: "button", code: "<h1>Cliquez sur le bouton :</h1>" },
        { question: "Quelle balise est utilisée pour créer une zone de texte multiligne où les utilisateurs peuvent saisir du texte ?", answer: "textarea", code: "<h1>Entrez vos commentaires :</h1>" },
        { question: "Quelle balise permet de formuler un intitulé à un champ de formulaire ?", answer: "label", code: "<h1>Étiquette du champ :</h1>" }
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
            <p>Félicitations ! Vous avez fini les exercices HTML.</p>
            <button id="go-home" class="btn btn-primary">Aller à la page d'accueil</button>
            <button id="retry" class="btn btn-secondary">Recommencer les exercices</button>
        `;

        document.getElementById('go-home').addEventListener('click', () => {
            window.location.href = 'acceuil.html';
        });

        document.getElementById('retry').addEventListener('click', () => {
            window.location.href = 'HTMLexo1.html';
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
