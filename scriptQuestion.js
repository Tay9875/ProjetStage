document.addEventListener('DOMContentLoaded', () => {
    function loadQuestion() {
        histoireContainer.textContent = questions.histoire;
        questionContainer.textContent = questions.question;
        codeInput.value = questions.code;
        renderedOutput.innerHTML = questions.code;
    }

    function checkAnswer() {
        if (answerInput.value.toLowerCase() === questions.answer.toLowerCase()) {
            const code = codeInput.value;
            const answer = answerInput.value;
            renderedOutput.innerHTML = code + answer;
            feedback.textContent = "Bonne réponse !";
            //alert("Félicitations ! Vous avez terminé le jeu !");
            //loadQuestion();
            location.href = href;//change 
            return true;
        } else {
            feedback.textContent = "Mauvaise réponse. Essayez encore.";
        }
    }

    function runCode() {
        const code = codeInput.value;
        const answer = answerInput.value;
        renderedOutput.innerHTML = code + answer;
    }

    document.getElementById('run-code').addEventListener('click', checkAnswer);
    answerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if(checkAnswer()===true){
                alert("true2");
                location.href = href;//change 
            }
        }
    });
    runCodeButton.addEventListener('click', runCode);

    loadQuestion();
});
