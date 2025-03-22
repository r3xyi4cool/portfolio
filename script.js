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

    const checkVisibility = (element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isOutOfView = rect.bottom < 0 || rect.top > windowHeight;
        const isInView = !isOutOfView;
        return { isInView, isOutOfView };
    };

    const handleScrollAnimations = () => {
        const skillTitle = document.querySelector(".skill-title");
        if (skillTitle) {
            const { isInView, isOutOfView } = checkVisibility(skillTitle);

            if (isInView && !skillTitle.classList.contains("animate")) {
                skillTitle.classList.add("animate");
            } else if (isOutOfView && skillTitle.classList.contains("animate")) {
                skillTitle.classList.remove("animate");
            }
        }

        const skillBoxes = document.querySelectorAll(".skill-box");
        skillBoxes.forEach((box, index) => {
            const { isInView, isOutOfView } = checkVisibility(box);
            
            if (isInView && !box.classList.contains("animate")) {
                setTimeout(() => {
                    box.classList.add("animate");
                }, 150 * index); 
            } else if (isOutOfView && box.classList.contains("animate")) {
                box.classList.remove("animate");
                box.style.transitionDelay = "0s";
            }
        });

        if (heroText) {
            const { isInView, isOutOfView } = checkVisibility(heroText);
            if (isInView && !heroText.classList.contains("animate")) {
                heroText.classList.add("animate");
            } else if (isOutOfView && heroText.classList.contains("animate")) {
                heroText.classList.remove("animate");
            }
        }
        
        if (heroImage) {
            const { isInView, isOutOfView } = checkVisibility(heroImage);
            if (isInView && !heroImage.classList.contains("animate")) {
                heroImage.classList.add("animate");
            } else if (isOutOfView && heroImage.classList.contains("animate")) {
                heroImage.classList.remove("animate");
            }
        }
    };

    setTimeout(handleScrollAnimations, 300);
    let scrollTimeout;
    window.addEventListener("scroll", () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScrollAnimations, 10);
    });
});