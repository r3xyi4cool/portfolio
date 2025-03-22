document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const right = document.querySelector(".right");

    if (hamburger && right) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            right.classList.toggle("active");
        });

        document.querySelectorAll(".right li").forEach(n => {
            n.addEventListener("click", () => {
                hamburger.classList.remove("active");
                right.classList.remove("active"); 
            });
        });
    }
    
    const heroText = document.querySelector(".hero-container .text");
    const heroImage = document.querySelector(".hero-container .headshot");
    setTimeout(() => {
        if (heroText) {
            heroText.classList.add("animate");
        }
    }, 300);
    
    setTimeout(() => {
        if (heroImage) {
            heroImage.classList.add("animate");
        }
    }, 600);
});