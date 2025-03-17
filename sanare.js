function openModal(title, image, description) {
    console.log("Opening modal for:", title); // Debugging
    let modalImage = "";
    let modalDescription = description; // Default description if provided

    // Assign the correct image and description based on the rental name
    if (title === "Sanare 1") {
        modalImage = "pop1.jpg";
        modalDescription = "Perfect for Barkadas! (good for 6 persons)";
    } else if (title === "Sanare 2") {
        modalImage = "pop2.jpg";
        modalDescription = "Perfect for Couples! (good for 2-4 persons)";
    } else if (title === "Sanare 3") {
        modalImage = "pop3.jpg";
        modalDescription = "Perfect for Families! (good for 6-8 persons)\n\n" +
                           "Rate: 4000/night\n" +
                           "Check-in time: 2:00 pm\n" +
                           "Check-out time: 12:00 pm\n" +
                           "- Reservation basis -";
    }

    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-image").src = modalImage; // Use the correct image
    document.getElementById("modal-description").innerText = modalDescription;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
};


let currentIndex = 0;
const slides = document.querySelector(".gallery-slides");
const totalSlides = Math.ceil(document.querySelectorAll(".gallery-card").length / 3);

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    showSlide(currentIndex);
}

// Show first slide on load
showSlide(currentIndex);
