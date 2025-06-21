document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    setupInitialAnimations();
    setupScrollAnimations();
});

function setupMobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const right = document.querySelector(".right");
    
    if (!hamburger || !right) return;
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        right.classList.toggle("active");
    });
    
    document.querySelectorAll(".right li").forEach(item => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("active");
            right.classList.remove("active");
        });
    });
}

function setupInitialAnimations() {
    const elements = [
        { selector: ".hero-container .text", delay: 300 },
        { selector: ".hero-container .headshot", delay: 600 }
    ];
    
    elements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            setTimeout(() => element.classList.add("animate"), delay);
        }
    });
}

function setupScrollAnimations() {
    const sections = [
        { selectors: [".hero-container .text", ".hero-container .headshot"] },
        { selectors: [".about-title", ".about-image", ".about-text"] },
        { selectors: [".project-title"], multiSelectors: [".project-box"] },
        { selectors: [".skill-title", ".skill-para"], multiSelectors: [".skill-box"] },
        { 
            selectors: [".contact-title", ".contact-content"], 
            multiSelectors: [".social-link"]
        }
    ];

    setTimeout(handleScrollAnimations, 300);
    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScrollAnimations();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    function handleScrollAnimations() {
        sections.forEach(section => {
            if (section.selectors) {
                section.selectors.forEach(selector => {
                    const element = document.querySelector(selector);
                    if (element) {
                        toggleAnimation(element);
                    }
                });
            }

            if (section.multiSelectors) {
                section.multiSelectors.forEach(selector => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach((element, index) => {
                        if (selector.includes("skill-box")) {
                            element.style.setProperty('--i', index + 1);
                        }
                        if (selector.includes("social-link")) {
                            element.style.setProperty('--i', index);
                        }
                        toggleAnimation(element, index * 100);
                    });
                });
            }
        });
    }
    
    function toggleAnimation(element, delay = 0) {
        const { isInView } = checkVisibility(element);
        
        if (isInView && !element.classList.contains("animate")) {
            if (delay > 0) {
                setTimeout(() => element.classList.add("animate"), delay);
            } else {
                element.classList.add("animate");
            }
        } else if (!isInView && element.classList.contains("animate")) {
            element.classList.remove("animate");
            element.style.transitionDelay = "0s";
        }
    }
    
    function checkVisibility(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isOutOfView = rect.bottom < 0 || rect.top > windowHeight;
        return { isInView: !isOutOfView, isOutOfView };
    }
}
