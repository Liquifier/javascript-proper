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
        $("div.question").html(function() {
            return addNextQuestion(allQuestions[0]);
        });
        //set data attribute to keep track of current question number
        $("div.question").data("q", 0);
    });
    //probably have to move the stuff below out of documentReady
    $('#submitAnswer').click(function(){
        //get answer just submitted
        var answer = $("input:radio[name='radAnswer']:checked").val();
        //get the question number that was just answered
        var getCurrQ = $("div.question").data("q");
        //nested if loop maybe problematic; next question is not loading, it goes back to original state
        if(typeof answer === 'number') { //check for a valid answer before continuing
            if(answer === allQuestions[getCurrQ].correctAnswer) {
                //get current score so we can add 1 to it after a correct answer
                var getCurrScore = $('div.score').data('score');
                $('div.score').data('score', getCurrScore+1);
            }
            //generate next question
            $('div.question').html(function() {
                return addNextQuestion(allQuestions[getCurrQ+1]);
            });
        } else {
            alert('Please select an answer');
        }
    });
        //how to tally the score within this function scope? use an html data attribute?
});
