const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

images.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});

function showImage(){

    lightboxImg.src = images[currentIndex].src;

}

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage();

});

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage();

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if(e.target !== lightboxImg &&
       e.target !== nextBtn &&
       e.target !== prevBtn){

        lightbox.style.display = "none";
    }

});

document.addEventListener("keydown", (e) => {

    if(lightbox.style.display === "flex"){

        if(e.key === "ArrowRight"){

            currentIndex++;

            if(currentIndex >= images.length){
                currentIndex = 0;
            }

            showImage();
        }

        if(e.key === "ArrowLeft"){

            currentIndex--;

            if(currentIndex < 0){
                currentIndex = images.length - 1;
            }

            showImage();
        }

        if(e.key === "Escape"){
            lightbox.style.display = "none";
        }

    }

});
