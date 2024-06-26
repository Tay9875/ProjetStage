const questions = [
    {
        question: "Comment déclare-t-on une variable en JavaScript ?",
        answer: "var",
        code: "var maVariable = 'valeur';"
    },
    {
        question: "Quelle méthode est utilisée pour afficher un message dans la console ?",
        answer: "console.log",
        code: "console.log('Message');"
    },
    {
        question: "Comment crée-t-on une fonction en JavaScript ?",
        answer: "function",
        code: "function maFonction() {\n  // Code de la fonction\n}"
    },
    {
        question: "Comment appelle-t-on une fonction en JavaScript ?",
        answer: "nomDeLaFonction()",
        code: "maFonction();"
    },
    {
        question: "Comment accède-t-on à un élément par son ID en JavaScript ?",
        answer: "document.getElementById",
        code: "var element = document.getElementById('monID');"
    },
    {
        question: "Quelle méthode est utilisée pour ajouter un écouteur d'événements à un élément ?",
        answer: "addEventListener",
        code: "element.addEventListener('click', function() {\n  // Code à exécuter lors du clic\n});"
    },
    {
        question: "Comment changer le contenu texte d'un élément en JavaScript ?",
        answer: "innerText",
        code: "element.innerText = 'Nouveau texte';"
    },
    {
        question: "Comment vérifier si deux valeurs sont égales en JavaScript ?",
        answer: "===",
        code: "if (a === b) {\n  // Code si a est égal à b\n}"
    }
];




    let htmlCode = document.getElementById("html-code").value;
    let output = document.getElementById("rendered-output");
    output.innerHTML = htmlCode;

let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');

    const questionElement = document.createElement('p');
    questionElement.textContent = question.question;
    questionElement.id = `question${currentQuestionIndex + 1}`;

    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.id = `answer${currentQuestionIndex + 1}`;
    answerInput.placeholder = 'Votre réponse';

    answerInput.setAttribute('autocomplete', 'off');

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
    const answerElement = document.getElementById(`answer${currentQuestionIndex + 1}`);
    const answer = answerElement.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase(); 

    console.log("User Answer:", answer);
    console.log("Correct Answer:", correctAnswer);

    if (answer === correctAnswer) {
        document.getElementById('feedback').textContent = 'Bonne réponse !';
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            document.getElementById('feedback').textContent = 'Toutes les questions ont été résolues ! Félicitations !';
            document.getElementById('question-container').innerHTML = ''; 
        }
    } else {
        document.getElementById('feedback').textContent = 'Réponse incorrecte. Essayez à nouveau.';
    }

    answerElement.value = ''; 
}



displayQuestion();

