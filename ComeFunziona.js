// Effetto di evidenziazione al passaggio del mouse
const paragraphs = document.querySelectorAll(".content p");

paragraphs.forEach(p => {
    p.addEventListener("mouseenter", () => {
        p.style.background = "rgba(255, 255, 255, 0.2)";
    });

    p.addEventListener("mouseleave", () => {
        p.style.background = "rgba(255, 255, 255, 0.1)";
    });
});