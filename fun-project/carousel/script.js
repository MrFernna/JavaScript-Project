// calling class From html
const carouselSlide = document.querySelector('.carousel-slide')
const carouselImage = document.querySelectorAll('.carousel-slide img')
const prevButton = document.querySelector('.prev-btn')
const nextButton = document.querySelector('.next-btn')
const indicators = document.querySelectorAll('.indicator')

let currentIndex = 0;

let autoSlideInterval;

const totalImages = carouselImage.length
// function for update the display with slide right and left
function carouselUpdate(){
    carouselSlide.style.transform = `translateX(${-currentIndex *100}%)`
//for update active indicator from display
    indicators.forEach((indicator,index)=>{
        indicator.classList.toggle('active',index === currentIndex)
    })
}
// for changing the display to left
function prevSlide(){
    currentIndex = (currentIndex + 1 - totalImages) % totalImages
    carouselUpdate()
}
// for changing the display to right
function nextSlide(){
    currentIndex = (currentIndex + 1) % totalImages
    carouselUpdate()
}
//calling prevSlide and nextSlide function with addEventListener
nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)
//make the display automatically sliding to the next display for 5000 ms
function autoSlide(){
    clearInterval(autoSlideInterval)

    autoSlideInterval = setInterval(nextSlide,5000)
}
//setInterval to default
autoSlideInterval = setInterval(nextSlide, 5000)
//for selecting display from indicator  
indicators.forEach((indicator,index)=>{
    indicator.addEventListener('click',()=>{
        currentIndex = index;
        carouselUpdate()
        autoSlide()
    })
})