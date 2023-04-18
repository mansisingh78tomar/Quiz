const questions = [
    {
        question: "HTML stand for_____?",
        answer:[
            {text: "Hyper Text Markup Language", correct:true},
            {text: "High Text Markup Language", correct:false},
            {text: "Hyper Text Mark Language", correct:false},
            {text: "Highest Textior Markup Lang", correct:false},
        ]
    },

    {
        question: "CSS stand for_____?",
        answer:[
            {text: "Categories Size System ", correct:false},
            {text: "Cascading Style Sheet", correct:true},
            {text: "Collector Simple Shade ", correct:false},
            {text: "Cominations ofsize system ", correct:false},
        ]
    },

    {
        question: "JS stand for_____?",
        answer:[
            {text: "Jumpersystem", correct:false},
            {text: "Jackshade", correct:false},
            {text: "Jointer point", correct:false},
            {text: "Javascript", correct:true},
        ]
    },

    {
        question: "CSS stand for_____?",
        answer:[
            {text: "Categories Size System ", correct:false},
            {text: "Cascading Style Sheet", correct:true},
            {text: "Collector Simple Shade ", correct:false},
            {text: "Cominations ofsize system ", correct:false},
        ]
    },

    {
        question: "CSS stand for_____?",
        answer:[
            {text: "Categories Size System ", correct:false},
            {text: "Cascading Style Sheet", correct:true},
            {text: "Collector Simple Shade ", correct:false},
            {text: "Cominations ofsize system ", correct:false},
        ]
    },

    {
        question: "CSS stand for_____?",
        answer:[
            {text: "Categories Size System ", correct:false},
            {text: "Cascading Style Sheet", correct:true},
            {text: "Collector Simple Shade ", correct:false},
            {text: "Cominations ofsize system ", correct:false},
        ]
    },


];

const questionElement = document.getElementById("ques");
const answerbtns = document.getElementById("answer-btn");
const nextbtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startquiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHtml = 'Next';
    showques();
}

function showques(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerbtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function  resetState(){
    nextbtn.style.display = 'none';
    while(answerbtns.firstChild){
        answerbtns.removeChild(answerbtns.firstChild);
    }
}

function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === 'true';
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++; 
    } else{
        selectedbtn.classList.add("incorrect");
    };
    Array.from(answerbtns.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextbtn.style.display = "block";
    
}

function showscore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML = `Play Again`;
    nextbtn.style.display = "block";

}
function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showques();
    }else{
        showscore(); 
    }
}

nextbtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }else{
        startquiz();
    }
})

startquiz();
