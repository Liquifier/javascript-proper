var allQuestions = [
    {question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Malcom Tucker", "Nicola Murray"], correctAnswer:0},
    {question: "Who is the President of Argentina?", choices: ["Nestor Kirchner", "Christina Fernandez", "Eduardo Dulhalde", "Reynaldo Bignone"], correctAnswer:1},
    {question: "What is the capitol of Australia?", choices: ["Sydney", "Auckland", "Canberra", "Darwin"], correctAnswer:2}
];

//dynamically generate html for next question
function addNextQuestion (nextQuestion) {
    "use strict";
    var questionContent="";
    questionContent += "<p>" + nextQuestion.question + "</p>";
    for(var i = 0; i < nextQuestion.choices.length; i++) {
        questionContent += "<p>" + "<input type ='radio' name='radAnswer' value=" + ' + nextQuestion.choices[i] + ' + ">" + "</p>";
    }
    questionContent += "<input id='submitAnswer' type ='submit' value='Submit Answer'>";
    return questionContent;
}

//load first question after button press
$(document).ready(function() {
    "use strict";
    $("#startQuiz").click(function(){
        $("div.question").html(function() {
            return addNextQuestion(allQuestions[0]);
        });
    });
    $('#submitAnswer').click(function(){
        $("input:radio[name='radAnswer']:checked").val();
    });
});
