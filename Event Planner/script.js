document.addEventListener("DOMContentLoaded", function () {
    // Gallery Filter Functionality
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    function filterGallery(category) {
        galleryItems.forEach(item => {
            item.style.display = (category === "all" || item.dataset.category === category) ? "block" : "none";
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".filter-btn.active").classList.remove("active");
            this.classList.add("active");
            filterGallery(this.dataset.category);
        });
    });

    // Show all images by default
    filterGallery("all");

    // Image Popup Functionality
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    const modalImg = document.createElement("img");
    modalImg.classList.add("modal-content");
    modal.appendChild(modalImg);

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = "&times;";
    modal.appendChild(closeBtn);

    document.querySelectorAll(".gallery img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
