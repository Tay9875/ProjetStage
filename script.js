document.addEventListener('DOMContentLoaded', () => {
    const questions = {
        html: [
            { question: "Quelle balise utilise-t-on pour créer un lien hypertexte ?", answer: "<a>", code: "<a href='http://example.com'>Exemple</a>" },
            { question: "Quelle balise utilise-t-on pour une image ?", answer: "<img>", code: "<img src='image.jpg' alt='Description'>" },
            { question: "Quelle balise utilise-t-on pour créer un paragraphe ?", answer: "<p>", code: "<p>Ceci est un paragraphe.</p>" },
            { question: "Quelle balise utilise-t-on pour un titre de niveau 1 ?", answer: "<h1>", code: "<h1>Titre de niveau 1</h1>" },
            { question: "Quelle balise utilise-t-on pour une liste non ordonnée ?", answer: "<ul>", code: "<ul>\n    <li>Élément 1</li>\n    <li>Élément 2</li>\n</ul>" },
            { question: "Quelle balise utilise-t-on pour une liste ordonnée ?", answer: "<ol>", code: "<ol>\n    <li>Élément 1</li>\n    <li>Élément 2</li>\n</ol>" },
            { question: "Quelle balise utilise-t-on pour un champ de saisie de texte ?", answer: "<input>", code: "<input type='text' placeholder='Votre texte ici'>" },
            { question: "Quelle balise utilise-t-on pour insérer une ligne horizontale ?", answer: "<hr>", code: "<hr>" }
        ],
        css: [
            { question: "Comment définir une couleur de fond en CSS ?", answer: "background-color", code: "body {\n  background-color: #f4f4f4;\n}" },
            { question: "Quelle propriété CSS est utilisée pour changer la taille de la police ?", answer: "font-size", code: "p {\n  font-size: 16px;\n}" },
            { question: "Comment centrer un texte en CSS ?", answer: "text-align: center", code: "h1 {\n  text-align: center;\n}" },
            { question: "Quelle propriété CSS est utilisée pour ajouter des marges internes (padding) ?", answer: "padding", code: "div {\n  padding: 20px;\n}" },
            { question: "Quelle propriété CSS est utilisée pour ajouter des marges externes (margin) ?", answer: "margin", code: "p {\n  margin: 10px;\n}" },
            { question: "Comment changer la couleur du texte en CSS ?", answer: "color", code: "p {\n  color: blue;\n}" },
            { question: "Quelle propriété CSS est utilisée pour changer la famille de polices ?", answer: "font-family", code: "body {\n  font-family: Arial, sans-serif;\n}" },
            { question: "Comment rendre un élément invisible en CSS ?", answer: "display: none", code: ".hidden {\n  display: none;\n}" }
        ],
        javascript: [
            { question: "Comment déclare-t-on une variable en JavaScript ?", answer: "var", code: "var maVariable = 'valeur';" },
            { question: "Quelle méthode est utilisée pour afficher un message dans la console ?", answer: "console.log", code: "console.log('Message');" },
            { question: "Comment crée-t-on une fonction en JavaScript ?", answer: "function", code: "function maFonction() {\n  // Code de la fonction\n}" },
            { question: "Comment appelle-t-on une fonction en JavaScript ?", answer: "nomDeLaFonction()", code: "maFonction();" },
            { question: "Comment accède-t-on à un élément par son ID en JavaScript ?", answer: "document.getElementById", code: "var element = document.getElementById('monID');" },
            { question: "Quelle méthode est utilisée pour ajouter un écouteur d'événements à un élément ?", answer: "addEventListener", code: "element.addEventListener('click', function() {\n  // Code à exécuter lors du clic\n});" },
            { question: "Comment changer le contenu texte d'un élément en JavaScript ?", answer: "innerText", code: "element.innerText = 'Nouveau texte';" },
            { question: "Comment vérifier si deux valeurs sont égales en JavaScript ?", answer: "===", code: "if (a === b) {\n  // Code si a est égal à b\n}" }
        ]
    };

    let currentLevel = 0;
    let currentSubject = 'html';

    const subjects = ['html', 'css', 'javascript'];
    const questionsPerSubject = 8;

    const questionContainer = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const feedback = document.getElementById('feedback');
    const levelDisplay = document.getElementById('level');
    const codeInput = document.getElementById('code-input');
    const renderedOutput = document.getElementById('rendered-output');
    const runCodeButton = document.getElementById('run-code');

    function loadQuestion() {
        if (currentLevel % questionsPerSubject === 0 && currentLevel !== 0) {
            currentSubject = subjects[subjects.indexOf(currentSubject) + 1];
        }
        const questionIndex = currentLevel % questionsPerSubject;
        const currentQuestion = questions[currentSubject][questionIndex];
        questionContainer.textContent = currentQuestion.question;
        levelDisplay.textContent = `Niveau: ${currentLevel + 1} (${currentSubject.toUpperCase()})`;
        codeInput.value = currentQuestion.code;
        renderedOutput.innerHTML = currentQuestion.code;
    }

    function checkAnswer() {
        const questionIndex = currentLevel % questionsPerSubject;
        if (answerInput.value.toLowerCase() === questions[currentSubject][questionIndex].answer.toLowerCase()) {
            feedback.textContent = "Bonne réponse !";
            currentLevel++;
            if (currentLevel === 24) {
                alert("Félicitations ! Vous avez terminé le jeu !");
                currentLevel = 0;
                currentSubject = 'html';
            }
            loadQuestion();
        } else {
            feedback.textContent = "Mauvaise réponse. Essayez encore.";
        }
        answerInput.value = '';
    }

    function runCode() {
        const code = codeInput.value;
        renderedOutput.innerHTML = code;
    }

    document.getElementById('submit-answer').addEventListener('click', checkAnswer);
    answerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });
    runCodeButton.addEventListener('click', runCode);

    loadQuestion();
});
