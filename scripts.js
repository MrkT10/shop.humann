// variable declarations
const   largeCarousel = document.getElementById('carousel-fullscreen'),
        mainImg = document.getElementById('mainImg'),
        details = document.getElementById('zoomDetails'),
        wrapper = document.getElementById('wrapper');
let     carouselLinks = document.querySelectorAll('.zoomIn'),
        mainImgs = document.querySelectorAll('.mainCarouselImg'),
        carouselImg = document.querySelectorAll('.large-img'),
        thumbs = document.querySelectorAll('.thumbnail');

// CAROUSEL
// set event listeners
carouselLinks.forEach(el => el.addEventListener('click', event => {
    toggleCarousel();
}));

details.addEventListener('click', showDetails);

// toggle fullscreen
function toggleCarousel(){
    largeCarousel.classList.toggle('active');
}
largeCarousel.addEventListener('click', toggleCarousel);

// reset img state constructor
function resetState(n){
    n.forEach(el => {
        el.classList.remove('active');
    })
};
// change active state of: thumbnails, main carousel image, fullscreen carousel images depending on NodeList index
function changeMainImg(n){
    resetState(carouselImg);
    resetState(mainImgs);
    carouselImg[n].classList.add('active');
    mainImgs[n].classList.add('active');
}

thumbs.forEach((el, index) => {
    el.addEventListener('click', function(){
        changeMainImg(index);
    })
});

// show details only slide
function showDetails(){
     toggleCarousel();
     carouselImg[4].classList.add('active');
}
//infinite thumbnail slider
function getPositionLeft(id, property){
    var id = document.getElementById(id);
    return window.getComputedStyle(id,null).getPropertyValue(property);
}
/// -------------------- in progress -------------------------
function moveTop(){
    //     thumbs[0].parentNode.appendChild(thumbs[0]);
    //     thumbs[4].parentNode.prepend(thumbs[4]);
}

function carouselPrev() {
    var position = parseFloat(getPositionLeft('wrapper', 'left'));
    wrapper.addEventListener('transitionend', function(){
        // if ('wrapper > div:first-of-type.value == 1') {
        //     moveTop();
        //     wrapper.style.left = '-105px';
        //     // alert('test');
        // }
    });
    wrapper.style.left = position +105+'px';
}

function carouselNext() {
    var position = parseFloat(getPositionLeft('wrapper', 'left'));
    wrapper.style.left = position -105+'px';
}

function show(){
    alert(parseFloat(getPositionLeft('wrapper', 'left')));
}