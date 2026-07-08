document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -20px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('back-to-top');
    let isVisible = false;
    
    function toggleBackToTop() {
        const scrollY = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        const showThreshold = Math.min(500, windowHeight * 0.5);
        
        if (scrollY > showThreshold) {
            if (!isVisible) {
                isVisible = true;
                backToTopBtn.classList.add('show');
            }
        } else {
            if (isVisible) {
                isVisible = false;
                backToTopBtn.classList.remove('show');
            }
        }
    }
    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    
    backToTopBtn.addEventListener('click', scrollToTop);
    
    toggleBackToTop();
});