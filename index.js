const images = [
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
    'images/img-5.jpg',
    'images/img-6.jpg',
    'images/img-7.jpg',
    'images/img-8.jpg',
    'images/img-9.jpg',
    'images/img-10.jpg',

];
let imgIndex = 0;

const img = document.getElementById('carousel-img');

setInterval( () =>{
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    img.setAttribute('src', imgLink);
    imgIndex++;
}, 1000)