const qna = [{
    question:"In the context of web development, which of the following components is NOT typically part of the Front-end (Client-Side)?",
answers:[
{text:"React Component Lifecycle",correct:false},
{text:"CSS Grid and Flexbox Layouts",correct:false},
{text:"The Logic for JWT (JSON Web Token) Verification and Issuance",correct:true},
{text:"DOM (Document Object Model) Manipulation",correct:false}]
},{
    question:"What is the primary function of a RESTful API in a Full-stack application architecture?",
    answers:[
        {text:"To transpile JavaScript code into Native mobile device code.",correct:false},
        {text:"To store user session data directly in the browser's Local Storage.",correct:false},
        {text:"To provide the visual interface that users see in their browsers.",correct:false},
        {text:"To connect the Front-end (Client) with the Database (Data Storage) using standard HTTP requests.",correct:true},
    ]
},{
    question:"In Node.js, what is the role of middleware within the Express.js framework?",
    answers:[
        {text:"To determine the TCP/IP port where the server should listen for requests.",correct:false},
        {text:"To print errors to the server console.",correct:false},
        {text:"To automatically convert relational database data into JSON format.",correct:false},
        {text:"A function that has access to the request and response objects and can process them before the final route handler is executed.",correct:true},
    ]
},{
    question:"If you are building an e-commerce application that requires high data integrity (e.g., tracking inventory, orders, and financial transactions), which type of Database is most recommended?",
    answers:[
        {text:"Cache Database (e.g., Redis)",correct:false},
        {text:"NoSQL (e.g., MongoDB)",correct:false},
        {text:"SQL (e.g., PostgreSQL or MySQL)",correct:true},
        {text:"Graph Database",correct:false},
    ]
},{
    question:"What is the primary function of Docker in a Full-stack Developer's deployment process?",
    answers:[
        {text:"To manage the global state of the Front-end application.",correct:false},
        {text:"To automatically write Back-end code.",correct:false},
        {text:"As an alternative Front-end framework to React.",correct:false},
        {text:"To isolate the application and all its dependencies into a container to ensure it runs consistently everywhere.",correct:true},
    ]
}]
let score;
let currentQuestionIndex;

const questionText = document.getElementById('question')
const nextBtn = document.querySelector('.next-button')
const prevBtn = document.querySelector('.prev-button')
const completeBtn = document.querySelector('.complete-button')
const startBtn = document.getElementById('startButton')
const page = document.getElementById('progress')
const answerButtons = document.querySelector('.answer-container')
const returnBtn = document.querySelector('.return-button')

function startQuiz(){
    score = 0;
    currentQuestionIndex = 0;
    startBtn.style.display = "none"
    nextBtn.style.display = "block"
    prevBtn.style.display = "block"
    page.style.display = "block"
    returnBtn.style.display = 'none'
    showQuestion()
}

function showQuestion(){
    resetState()
    const currentQuestion = qna[currentQuestionIndex]
    questionText.textContent = currentQuestion.question 
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button')
        page.textContent = `Progress: ${currentQuestionIndex}/4`;
        button.textContent = answer.text
        button.classList.add('answer-button')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        answerButtons.appendChild(button)
        button.addEventListener('click',selectAnswer)
    })
}
function resetState(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct === 'true'
    if(correct){
        selectedButton.style.backgroundColor = "#47cc4eff"
        score++
    }else{
        selectedButton.style.backgroundColor = "#f00000"
    }
    Array.from(answerButtons.children).forEach(button =>{
        button.disabled = true;
        if(button.dataset.correct){
            button.style.backgroundColor = '#47cc4eff'
        }
    })
}
startQuiz()

function nextButton(){
    if(currentQuestionIndex == 4){
        nextBtn.style.display = 'none'
        completeBtn.style.display = 'block'
    }else{
        nextBtn.style.display = 'block'
        nextBtn.disabled = false
        currentQuestionIndex++
    showQuestion()
    }
}
function returnButton(){
    startQuiz()
    showQuestion()
}
function completeButton(){
    showResult()
    returnBtn.style.display = 'block'
    completeBtn.style.display = 'none'
}
function showResult(){
    questionText.textContent = `Your Score: ${score}/5`
    answerButtons.style.display = "none"
}
function prevButton(){
    currentQuestionIndex--;
    showQuestion()
}
startBtn.addEventListener('click',()=>{
    startQuiz()
    currentQuestionIndex = 0;
})
returnBtn.addEventListener('click',returnButton)
nextBtn.addEventListener('click',nextButton)
prevBtn.addEventListener('click',prevButton)
completeBtn.addEventListener('click',completeButton)

