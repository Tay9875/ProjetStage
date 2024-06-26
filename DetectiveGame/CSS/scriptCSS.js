const questions = [
    {
        question: "Comment définir une couleur de fond en CSS",
        answer: "background-color",
        code: "body {\n  background-color: #f4f4f4;\n}"
    },
    {
        question: "Quelle propriété CSS est utilisée pour changer la taille de la police ?",
        answer: "font-size",
        code: "p {\n  font-size: 16px;\n}"
    },
    {
        question: "Comment centrer un texte en CSS ?",
        answer: "text-align: center",
        code: "h1 {\n  text-align: center;\n}"
    },
    {
        question: "Quelle propriété CSS est utilisée pour ajouter des marges internes ?",
        answer: "padding",
        code: "div {\n  padding: 20px;\n}"
    },
    {
        question: "Quelle propriété CSS est utilisée pour ajouter des marges externes ?",
        answer: "margin",
        code: "p {\n  margin: 10px;\n}"
    },
    {
        question: "Comment changer la couleur du texte en CSS ?",
        answer: "color",
        code: "p {\n  color: blue;\n}"
    },
    {
        question: "Quelle propriété CSS est utilisée pour changer la famille de polices ?",
        answer: "font-family",
        code: "body {\n  font-family: Arial, sans-serif;\n}"
    },
    {
        question: "Comment rendre un élément invisible en CSS ?",
        answer: "display: none",
        code: ".hidden {\n  display: none;\n}"
    }
];

    let currentQuestionIndex = 0;
    
    let htmlCode = document.getElementById("html-code").value;
    let output = document.getElementById("rendered-output");
    output.innerHTML = htmlCode;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');

    const questionElement = document.createElement('p');
    questionElement.textContent = question.question;
    questionElement.id = `question${currentQuestionIndex + 1}`;

    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.id = `answer${currentQuestionIndex + 1}`;
    answerInput.autocomplete = 'off';
    answerInput.placeholder = 'Votre réponse';

    const answerButton = document.createElement('button');
    answerButton.textContent = 'Valider';
    answerButton.addEventListener('click', validateAnswer);

    questionContainer.innerHTML = '';
    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(answerInput);
    questionContainer.appendChild(answerButton);

    document.getElementById('feedback').textContent = '';
}

function validateAnswer() {
    const answerInput = document.getElementById(`answer${currentQuestionIndex + 1}`);
    const answer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (answer === correctAnswer) {
        document.getElementById('feedback').textContent = 'Bonne réponse !';

        if (currentQuestionIndex === questions.length - 1) {
            setTimeout(function() {
                window.location.href = 'JSexo1.html'; // Redirection vers la prochaine étape du jeu
            }, 1000); // Délai avant redirection
        } else {
            currentQuestionIndex++;
            displayQuestion();
        }

        answerInput.value = ''; // Effacer le champ de réponse
    } else {
        document.getElementById('feedback').textContent = 'Réponse incorrecte. Essayez à nouveau.';
        answerInput.value = ''; // Effacer le champ de réponse
    }
}




displayQuestion(); // Appel initial pour afficher la première question
