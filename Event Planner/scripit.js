document.addEventListener("DOMContentLoaded", function () {
    // Navbar active link handling
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Smooth scrolling for navbar links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Testimonials Slider Animation
    const slider = document.querySelector(".testimonial-slider");
    if (slider) {
        let direction = 1;
        setInterval(() => {
            slider.style.transform = `translateX(${direction * -50}%)`;
            direction = direction === 1 ? 0 : 1;
        }, 5000);
    }

    // Image Popup for About Section
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal-content");
    const images = document.querySelectorAll(".about-img");
    const closeModal = document.querySelector(".close");

    if (images.length > 0 && modal && modalImg) {
        images.forEach(img => {
            img.addEventListener("click", function () {
                modal.style.display = "flex";
                modalImg.src = this.src;
            });
        });

        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });

        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
                
            }
        });
    }
});
