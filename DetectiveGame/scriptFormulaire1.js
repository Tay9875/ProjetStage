const questions = [
    {
        question: "Quelle balise utilise-t-on pour créer un lien hypertexte ?",
        answer: "<a>"
    },
    {
        question: "Quelle balise utilise-t-on pour une image ?",
        answer: "<img>"
    },
    {
        question: "Quelle balise utilise-t-on pour créer un paragraphe ?",
        answer: "<p>"
    },
    {
        question: "Quelle balise utilise-t-on pour un titre de niveau 1 ?",
        answer: "<h1>"
    },
    {
        question: "Quelle balise utilise-t-on pour une liste non ordonnée ?",
        answer: "<ul>"
    },
    {
        question: "Quelle balise utilise-t-on pour une liste ordonnée ?",
        answer: "<ol>"
    },
    {
        question: "Quelle balise utilise-t-on pour un champ de saisie de texte ?",
        answer: "<input>"
    },
    {
        question: "Quelle balise utilise-t-on pour insérer une ligne horizontale ?",
        answer: "<hr>"
    }
];

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const feedback = document.getElementById('feedback');

    let currentQuestionIndex = 0;

    function renderQuestion() {
        const question = questions[currentQuestionIndex];

        const questionElement = document.createElement('p');
        questionElement.textContent = question.question;
        questionContainer.innerHTML = '';
        questionContainer.appendChild(questionElement);

        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.placeholder = 'Votre réponse';
        questionContainer.appendChild(answerInput);

        const validateButton = document.createElement('button');
        validateButton.textContent = 'Valider';
        validateButton.addEventListener('click', function () {
            validateAnswer(answerInput.value.trim().toLowerCase(), question.answer);
        });
        questionContainer.appendChild(validateButton);

        feedback.textContent = '';
    }

    function validateAnswer(userAnswer, correctAnswer) {
        if (userAnswer === correctAnswer.toLowerCase()) {
            feedback.textContent = 'Bonne réponse !';
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                renderQuestion();
            } else {
                feedback.textContent = 'Toutes les questions ont été résolues !';
                
                window.location.href = 'CSSexo1.html';
            }
        } else {
            feedback.textContent = 'Réponse incorrecte. Essayez à nouveau.';
            
            answerInput.value = '';
        }
    }

    renderQuestion();
}
