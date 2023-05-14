const images = [
    '../img/pexels-cesar-perez-733745.jpg',
    '../img/pexels-maria-geller-2127037.jpg',
    '../img/pexels-vlad-alexandru-popa-1402787.jpg',
];

let index = 0;
const max = images.length;

const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

prevSlideButton.addEventListener('click', function() {
    index--;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);
})

nextSlideButton.addEventListener('click', function() {
    index++;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);
})

function setImageIndex() {
    if(index < 0) index = max -1;
    if(index === max) index = 0;
}

function changeBackgroundImage(backgroundImage, element) {
    element.style.backgroundImage = `url(${backgroundImage})`
}