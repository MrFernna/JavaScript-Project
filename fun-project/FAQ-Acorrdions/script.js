const faqData = [
    {question:"What Is HTML?",
        answer:"HTML, or Hypertext Markup Language, is the standard language used to create and structure web pages. It uses a system of tags and elements to define the content, such as headings, paragraphs, and images, and provides the basic structure for all websites. HTML works in tandem with other technologies like CSS for styling and JavaScript for functionality to create a complete web page. "
    },{
        question:"What Is CSS?",
        answer:"CSS, which stands for Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects like SVG, MathML, or XHTML). While HTML provides the structure and content of a webpage, CSS is responsible for its visual appearance and layout. "
    },
    {
        question:"What Is JavaScript?",
        answer:"JavaScript Is Programming Language For Web Development, JavaScript is brain of websites that can make build interactive web page can be functional, like for a button click, or hover any objects."
    }
]

const accordionContainer = document.getElementById('accordion')

function generateAccordionItems(faqData){
    faqData.forEach(item =>{
        const accordionItems = document.createElement('div')
        accordionItems.classList.add('accordion-item')

        const accordionHeader = document.createElement('button')
        accordionHeader.classList.add('accordion-header')
        accordionHeader.textContent = item.question

        const accordionContent = document.createElement('div')
        accordionContent.classList.add('accordion-content')

        const contentText = document.createElement('p')
        contentText.textContent = item.answer

        accordionContainer.appendChild(accordionItems)
        accordionItems.appendChild(accordionHeader)
        accordionItems.appendChild(accordionContent)
        accordionContent.appendChild(contentText)
    })
}
generateAccordionItems(faqData)

const accordionHeader = document.querySelectorAll('.accordion-header')

accordionHeader.forEach(header => {
    header.addEventListener('click',()=>{
        header.classList.toggle('active') 
        const accordionContent = header.nextElementSibling
        if(header.classList.contains('active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }else{
            accordionContent.style.maxHeight = 0
        }
    })
})