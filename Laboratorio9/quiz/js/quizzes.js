
var modal = document.getElementById("modal");
let questions = createQuiz();
let questionsNum = 0;
let questionsKeys = Object.keys(questions);

function checkAnswers() {
    for(let index = 0; index < questionsNum; ++index) {
        let answer = document.getElementById("answer" + (index + 1) ).value;
        let correctAnswer = document.getElementById("correctAnswer" + (index + 1) );
        let key = questionsKeys[index];

        if(answer != "" && answer == questions[key]) 
            correctAnswer.style.color = "green";
        else 
            correctAnswer.style.color = "red";
                
        correctAnswer.style.display = "block";      
    }

    hideModal();
}

function checkAll() {
    if(modal.style.display == "none") {
        modal.style.display = "block";
    } else {
        hideModal();
    }
}

function generateQuiz(){
    questionsNum = document.getElementById("questionsNum").value;
    if(questionsNum > 20 || questionsNum < 5) {
        document.getElementById("errorMsg").style.display = "block";
    } else {
        let questionsList = document.getElementById("questionsList");

        for(let index = 0; index < questionsNum; ++index) {
            let listItem = document.createElement("li");
            let key = questionsKeys[index];
            listItem.classList.add("before");
            listItem.innerHTML = '<p style="display: inline-block; width: 35%;">' + key + '</p> <input id = "answer' + (index + 1) + '" type="number"></input></li>' +
                                    '<p id = "correctAnswer' + (index + 1) + '" style="display: none; margin: 0 0 15px 0"> Correct answer: ' + questions[key] + '</p>';
        
            questionsList.appendChild(listItem);
        }

        document.getElementById("chooseQuestions").style.display = "none";
        document.getElementById("quiz").style.display = "block";
        document.getElementById("errorMsg").style.display = "none";
    }
}

function createQuiz() {
    let questions = { 
                        "(9 - 3) / 3 + 1" : 3, 
                        "(6 / 2)(1 + 2)" : 9,
                        "(6 - 1 * 0 + 2) / 2" : 4,
                        "20 / 4 - 2 * 3 + 8" : 7,
                        "5 + 2 * 7 - 2" : 17,
                        "8 * 2 / (1 + 6)" : 2,
                        "5 * 6 / 3 - 8 + 4" : 6,
                        "4(5 + 2 - 3 + 6)" : 40,
                        "30 - 3(9 - 2)" : 9,
                        "75 - 6 / (2 * 7)" : 54,
                        "14 + 8 (6 - 3)" : 38,
                        "10 (6 + 15 - (10 - 5))" : 160,
                        "7 - 4 + 6 * 8 / 2" : 27,
                        "9 + (9 - 3) * 2" : 21,
                        "4 * 3 + 12 / 2" : 18,
                        "1 + 5 * 2 * 3" : 31,
                        "(2 + 1) * 3 - 8" : 1,
                        "8 (4 * 2 - 6) + 10" : 26,
                        "(64 - 32 * 2) + 22 - 9" : 13,
                        "(6 * 2 - 5)((3 + 9) * 4 / 8) - 35" : 7 
                    };

    return questions;
}

function hideModal() {
    modal.style.display = "none";
}