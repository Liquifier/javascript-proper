var allQuestions = [
    {question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Malcom Tucker", "Nicola Murray"], correctAnswer:0},
    {question: "Who is the President of Argentina?", choices: ["Nestor Kirchner", "Christina Fernandez", "Eduardo Dulhalde", "Reynaldo Bignone"], correctAnswer:1},
    {question: "What is the capitol of Australia?", choices: ["Sydney", "Auckland", "Canberra", "Darwin"], correctAnswer:2}
];
var nextQuestion = allQuestions[0]; //testing out first question

//dynamically generate html for next question
function addNextQuestion (nextQuestion) {
    "use strict";
    var questionContent="";
    questionContent += "<p>" + nextQuestion.question + "</p>";
    for(var i = 0; i < nextQuestion.choices.length; i++) {
        questionContent += "<p>" + nextQuestion.choices[i] + "</p>";
    }
    return questionContent;
}

$(document).ready(function() {
    "use strict";
    $("div.question").html(function() {
        return addNextQuestion(nextQuestion);
    });
});
//I guess stop trying to script the html content and just load it all and hide it one at a time by setting display:none