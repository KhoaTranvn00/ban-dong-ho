const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// slider
const sliderContainer = $('.slider-container');
const sliderImg = $$('.slider-img')
sliderContainer.style.width = `${sliderImg.length * 100}%`
const sliderImgWidth = sliderContainer.style.width / sliderImg.length
const sliderControls = $$('.slider-control-icon')

let indexC = 0
function next(index = indexC) {
    if(index >= sliderImg.length - 1) {
        index = 0;
        indexC = 0;
    } else {
        index++;
        indexC++;
    }
    $('.slider-control-icon--active').classList.remove('slider-control-icon--active')
    sliderControls[index].classList.add('slider-control-icon--active')
    sliderContainer.style.transform = `translateX(${-100 * index}vw)`;
    console.log('index=' +index)
    console.log('indexC = ' +indexC)
}

setInterval(next, 3000)

sliderControls.forEach( (sliderControl,i) => {    
    sliderControl.addEventListener('click', () => {
        next(i-1)
        console.log(i)
    })
});



// Header scroll
const navBar = $('.navbar')
window.addEventListener('scroll', () => scrollFunction())
function scrollFunction() {
    if(document.documentElement.scrollTop >= 20) {
        navBar.classList.add('scroll')
    } else {
        navBar.classList.remove('scroll')
    }
}


// click scroll up
$('.page-control').addEventListener('click', () => {
    document.documentElement.scrollTop = 0
})
