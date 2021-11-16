function trivia(event){

    event.preventDefault();

    $.get(`https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`, displayName)
    console.log('Working correctly')
    function displayName(data) {
        console.log(data.category);
        document.querySelector('.triviaQuestions').innerHTML =`
        <h1>${data.question}</h1>
        <button>${data.correct_answer}</button>
        <button>${data.incorrect_answers}</button>
        `;
        
    }

}

$( '.trivia' ).on( 'submit', trivia );