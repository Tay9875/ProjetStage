document.addEventListener('DOMContentLoaded', function() {
    histoireContainer.textContent = questions.histoire;
    questionContainer.innerHTML = questions.question;
    answerInput.placeholder = 'Écrivez votre code Java ici...';

    runCodeButton.addEventListener('click', function() {
        const userAnswer = answerInput.value.trim();
        if (userAnswer === questions.answer) {
            feedback.textContent = 'Bonne réponse !';
            feedback.classList.add('correct');
            feedback.classList.remove('incorrect');
            setTimeout(function() {
                window.location.href = href;
            }, 2000);
        } else {
            feedback.textContent = 'Réessayez !';
            feedback.classList.add('incorrect');
            feedback.classList.remove('correct');
        }
        renderOutput(userAnswer);
    });
});

function runCode() {
    const userCode = answerInput.value;
    renderOutput(userCode);
}

function renderOutput(code) {
    renderedOutput.innerHTML = "<pre>" + code + "</pre>";
}
