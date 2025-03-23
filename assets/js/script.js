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
        // About Me 
        const aboutTitle = document.querySelector(".about-title");
        if (aboutTitle) {
            const { isInView, isOutOfView } = checkVisibility(aboutTitle);

            if (isInView && !aboutTitle.classList.contains("animate")) {
                aboutTitle.classList.add("animate");
            } else if (isOutOfView && aboutTitle.classList.contains("animate")) {
                aboutTitle.classList.remove("animate");
            }
        }

        const aboutImage = document.querySelector(".about-image");
        if (aboutImage) {
            const { isInView, isOutOfView } = checkVisibility(aboutImage);
            
            if (isInView && !aboutImage.classList.contains("animate")) {
                aboutImage.classList.add("animate");
            } else if (isOutOfView && aboutImage.classList.contains("animate")) {
                aboutImage.classList.remove("animate");
            }
        }

        const aboutText = document.querySelector(".about-text");
        if (aboutText) {
            const { isInView, isOutOfView } = checkVisibility(aboutText);
            
            if (isInView && !aboutText.classList.contains("animate")) {
                aboutText.classList.add("animate");
            } else if (isOutOfView && aboutText.classList.contains("animate")) {
                aboutText.classList.remove("animate");
            }
        }

        // Project section 
        const projectTitle = document.querySelector(".project-title");
        if (projectTitle) {
            const { isInView, isOutOfView } = checkVisibility(projectTitle);

            if (isInView && !projectTitle.classList.contains("animate")) {
                projectTitle.classList.add("animate");
            } else if (isOutOfView && projectTitle.classList.contains("animate")) {
                projectTitle.classList.remove("animate");
            }
        }

        const projectBoxes = document.querySelectorAll(".project-box");
        projectBoxes.forEach((box, index) => {
            const { isInView, isOutOfView } = checkVisibility(box);
            
            if (isInView && !box.classList.contains("animate")) {
                setTimeout(() => {
                    box.classList.add("animate");
                }, 200 * index); 
            } else if (isOutOfView && box.classList.contains("animate")) {
                box.classList.remove("animate");
                box.style.transitionDelay = "0s";
            }
        });

        // Skills section
        const skillTitle = document.querySelector(".skill-title");
        if (skillTitle) {
            const { isInView, isOutOfView } = checkVisibility(skillTitle);
            if (isInView && !skillTitle.classList.contains("animate")) {
                skillTitle.classList.add("animate");
            } else if (isOutOfView && skillTitle.classList.contains("animate")) {
                skillTitle.classList.remove("animate");
            }
        }
    
        const skillPara = document.querySelector(".skill-para");
        if (skillPara) {
            const { isInView, isOutOfView } = checkVisibility(skillPara);
            if (isInView && !skillPara.classList.contains("animate")) {
                skillPara.classList.add("animate");
            } else if (isOutOfView && skillPara.classList.contains("animate")) {
                skillPara.classList.remove("animate");
            }
        }
    
        const skillBoxes = document.querySelectorAll(".skill-box");
        skillBoxes.forEach((box, index) => {
            // Set the custom property for staggered animations
            box.style.setProperty('--i', index + 1);
            
            const { isInView, isOutOfView } = checkVisibility(box);
            if (isInView && !box.classList.contains("animate")) {
                setTimeout(() => {
                    box.classList.add("animate");
                }, 100 * index); // Shorter delay than projects
            } else if (isOutOfView && box.classList.contains("animate")) {
                box.classList.remove("animate");
                box.style.transitionDelay = "0s";
            }
        });

        // Hero section 
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