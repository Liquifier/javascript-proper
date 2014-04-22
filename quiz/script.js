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
        questionContent += "<p>" + nextQuestion.choices[i] + "</p>";
    }
    return questionContent;
}

//load first question after button press
$(document).ready(function() {
    "use strict";
    $("#btnSubmit").click(function(){
        $("div.question").html(function() {
            return addNextQuestion(allQuestions[0]);
        });
    });
});
