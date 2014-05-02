var allQuestions = [
    {question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Malcom Tucker", "Nicola Murray"], correctAnswer:0},
    {question: "Who is the President of Argentina?", choices: ["Nestor Kirchner", "Christina Fernandez", "Eduardo Dulhalde", "Reynaldo Bignone"], correctAnswer:1},
    {question: "What is the capitol of Australia?", choices: ["Sydney", "Auckland", "Canberra", "Darwin"], correctAnswer:2}
];

//basic score tally, probably not even secure
var score = 0;

//dynamically generate html for next question
function addNextQuestion (nextQuestion) {
    "use strict";
    var questionContent="";
    questionContent += "<form>" + "<p>" + nextQuestion.question + "</p>";
    for(var i = 0; i < nextQuestion.choices.length; i++) {
        questionContent += "<br>" + "<input type ='radio' name='radAnswer' value=" + i + ">"  + nextQuestion.choices[i];
    }
    questionContent += "<br><input id='submitAnswer' type ='submit' value='Submit Answer'></form>";
    return questionContent;
}

//load first question after button press
$(document).ready(function() {
    "use strict";
    //initialize the score tally
    $("div.score").data('score', 0);
    $("#startQuiz").click(function(){
        $("div.start").html("");
        $("div.question").html(function() {
            return addNextQuestion(allQuestions[0]);
        });
        //set data attribute to keep track of current question number
        $("div.question").data("q", 0);
    });
    $('body').on('click', '#submitAnswer' ,function(){
        //get answer just submitted
        var answer = $("input:radio[name='radAnswer']:checked").val();
        //get the question number that was just answered
        var getCurrQ = $("div.question").data("q");
        if(typeof answer === 'string') { //check for a valid answer before continuing
            if(answer == allQuestions[getCurrQ].correctAnswer) {
                //get current score so we can add 1 to it after a correct answer
                var getCurrScore = $('div.score').data('score');
                $('div.score').data('score', getCurrScore+1);
                alert('Correct! Your current score is ' + $('div.score').data('score'));
            }
            //generate next question if last question has not been loaded
            //getCurrQ is 0 index based
            if(getCurrQ < allQuestions.length - 1) {
                $('div.question').html(function() {
                    return addNextQuestion(allQuestions[getCurrQ+1]);
                }).data("q", getCurrQ+1);
            }
            else {
                $('div.question').html("");
                var scoreText = "<p>" + "You got " + $('div.score').data('score') + " question(s) out of " + allQuestions.length + " correct!" + "</p>";
                $('div.score').html(function(){
                    return scoreText;
                });
            }


        //implement handling after last question is answered
        } else {
            //this part resets the page to the original state, don't want that
            alert('Please select an answer');
        }
    });
});
