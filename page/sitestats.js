const slideCaroussel = [
    "imageRedproject/accueil.png",
    "imageRedproject/creation.png",
    "imageRedproject/addFriend.png",
    "imageRedproject/menuB.png"
];

const slideImage = document.querySelectorAll(".slideActive");
let currentIndex = 0;

slideImage.forEach((slideImage) => {
    slideCaroussel.forEach((slide, index))
    const imageElement = document.createElement("img");
    imageElement.src = slide;
    imageElement.alt = `Image ${index + 1}`;
    imageElement.classList.add('carousselItem');
    slideImage.appendChild(imageElement);

});

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slideCaroussel.length - 1;
    } else if (currentIndex >= slideCaroussel.length) {
        currentIndex = 0;
    }

}



function updateImage() {
    const imageElement = document.getElementById('carouselImage');
    imageElement.src = slideCaroussel[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % slideCaroussel.length;
    updateImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + slideCaroussel.length) % slideCaroussel.length;
    updateImage();
}

document.getElementById('previous').addEventListener('click', () => previousImage());
document.getElementById('next').addEventListener('click', () => nextImage());

/*Gestion de l'aggrandissement de l'image au click*/
