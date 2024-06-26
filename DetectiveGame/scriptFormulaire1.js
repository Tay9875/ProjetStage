const questions = [
    {
        question: "Quelle balise utilise-t-on pour créer un lien hypertexte ?",
        answer: "<a>",
        code: "<a href='http://example.com'>Exemple</a>"
    },
    {
        question: "Quelle balise utilise-t-on pour une image ?",
        answer: "<img>",
        code: "<img src='image.jpg' alt='Description'>"
    },
    {
        question: "Quelle balise utilise-t-on pour créer un paragraphe ?",
        answer: "<p>",
        code: "<p>Ceci est un paragraphe.</p>"
    },
    {
        question: "Quelle balise utilise-t-on pour un titre de niveau 1 ?",
        answer: "<h1>",
        code: "<h1>Titre de niveau 1</h1>"
    },
    {
        question: "Quelle balise utilise-t-on pour une liste non ordonnée ?",
        answer: "<ul>",
        code: "<ul>\n    <li>Élément 1</li>\n    <li>Élément 2</li>\n</ul>"
    },
    {
        question: "Quelle balise utilise-t-on pour une liste ordonnée ?",
        answer: "<ol>",
        code: "<ol>\n    <li>Élément 1</li>\n    <li>Élément 2</li>\n</ol>"
    },
    {
        question: "Quelle balise utilise-t-on pour un champ de saisie de texte ?",
        answer: "<input>",
        code: "<input type='text' placeholder='Votre texte ici'>"
    },
    {
        question: "Quelle balise utilise-t-on pour insérer une ligne horizontale ?",
        answer: "<hr>",
        code: "<hr>"
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
