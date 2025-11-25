const qna = [{
    question:"In the context of web development, which of the following components is NOT typically part of the Front-end (Client-Side)?",
answer:[
{text:"React Component Lifecycle",correct:false},
{text:"CSS Grid and Flexbox Layouts",correct:false},
{text:"The Logic for JWT (JSON Web Token) Verification and Issuance",correct:true},
{text:"DOM (Document Object Model) Manipulation",correct:false}]
},{
    question:"What is the primary function of a RESTful API in a Full-stack application architecture?",
    answer:[
        {text:"To transpile JavaScript code into Native mobile device code.",correct:false},
        {text:"To store user session data directly in the browser's Local Storage.",correct:false},
        {text:"To provide the visual interface that users see in their browsers.",correct:false},
        {text:"To connect the Front-end (Client) with the Database (Data Storage) using standard HTTP requests.",correct:true},
    ]
},{
    question:"In Node.js, what is the role of middleware within the Express.js framework?",
    answer:[
        {text:"To determine the TCP/IP port where the server should listen for requests.",correct:false},
        {text:"To print errors to the server console.",correct:false},
        {text:"To automatically convert relational database data into JSON format.",correct:false},
        {text:"A function that has access to the request and response objects and can process them before the final route handler is executed.",correct:true},
    ]
},{
    question:"If you are building an e-commerce application that requires high data integrity (e.g., tracking inventory, orders, and financial transactions), which type of Database is most recommended?",
    answer:[
        {text:"Cache Database (e.g., Redis)",correct:false},
        {text:"NoSQL (e.g., MongoDB)",correct:false},
        {text:"SQL (e.g., PostgreSQL or MySQL)",correct:true},
        {text:"Graph Database",correct:false},
    ]
},{
    question:"What is the primary function of Docker in a Full-stack Developer's deployment process?",
    answer:[
        {text:"To manage the global state of the Front-end application.",correct:false},
        {text:"To automatically write Back-end code.",correct:false},
        {text:"As an alternative Front-end framework to React.",correct:false},
        {text:"To isolate the application and all its dependencies into a container to ensure it runs consistently everywhere.",correct:true},
    ]
}]
const question = document.getElementById('question')
const answerButton1 = document.getElementById("answer1")
const answerButton2 = document.getElementById("answer2")
const answerButton3 = document.getElementById("answer3")
const answerButton4 = document.getElementById("answer4")

question.textContent = question(qna.value)

answerButton1.textContent = qna(answer1.value)
answerButton2.textContent = qna(answer2.value)
answerButton3.textContent = answer.length
answerButton4.textContent = answer4.length

function solveQuiz(){
    let randomQna = Math.floor(Math.random(qna.value))
}
