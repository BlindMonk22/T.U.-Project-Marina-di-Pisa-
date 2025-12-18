// Lista di foto o video (puoi aggiungerne quante vuoi)
const mediaList = [
    { type: "image", src: "2.JPG" },
    { type: "image", src: "Pineta1.JPG" },
    { type: "image", src: "Campo da calcio2.JPG" },
    { type: "video", src: "360 Pineta-Mare.MP4" },
    { type: "image", src: "4.JPG" },
    { type: "image", src: "Piazza delle Baleari.JPG" },
    { type: "image", src: "Porto1.JPG" },
    { type: "image", src: "Pineta3.JPG" },
    { type: "video", src: "Porto3.MP4" }
];

// Durata di ogni slide in millisecondi (es: 5000 = 5 secondi)
const slideDuration = 3500;

// Elementi HTML
const bgImage = document.getElementById("bg-image");
const bgVideo = document.getElementById("bg-video");

let currentIndex = 0;

function showSlide(index) {
    const item = mediaList[index];

    if (item.type === "image") {
        bgVideo.style.opacity = 0;
        bgVideo.pause();

        bgImage.src = item.src;
        bgImage.style.opacity = 1;
    } 
    else if (item.type === "video") {
        bgImage.style.opacity = 0;

        bgVideo.src = item.src;
        bgVideo.style.opacity = 1;
        bgVideo.play();
    }
}

// Cambio automatico slide
function startSlideshow() {
    showSlide(currentIndex);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % mediaList.length;
        showSlide(currentIndex);
    }, slideDuration);
}


startSlideshow();
