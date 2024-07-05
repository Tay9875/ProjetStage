    
    let htmlCode = document.getElementById("html-code").value;
    let output = document.getElementById("rendered-output");
    output.innerHTML = htmlCode;
  

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
                window.location.href = href;
            }
        } else {
            feedback.textContent = 'Réponse incorrecte. Essayez à nouveau.';
            
            answerInput.value = '';
        }
    }

    renderQuestion();
}