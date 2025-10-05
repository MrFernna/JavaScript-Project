// Array that store a list of quotes and their author
const quotes = [
    { text:"the greatest of all time", author:"Fer"},
    {text:"Technology is anything that wasn’t around when you were born.",author:'Alan Kay'},
    {text:'Any sufficiently advanced technology is equivalent to magic.',author:'Arthur C.Clark'},
    {text:'All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness.',author:'Mark Kennedy'},
    {text:'Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.',author:'Thomas Edison'},
    {text:'It has become appallingly obvious that our technology has exceeded our humanity.',author:'Albert Einstein'}
];
// Get element from html by their id
const quoteText = document.getElementById('quote')
const authorName = document.getElementById('author')
const quoteButton = document.getElementById('newQuote')
// function to generate a random quote
function generateQuote(){
    const randomIndex = Math.floor(Math.random()*quotes.length)
    const quotesIndex = quotes[randomIndex]
    
    quoteText.textContent = `"${quotesIndex.text}"`
    authorName.textContent = `${quotesIndex.author}`
}
quoteButton.addEventListener('click',generateQuote)