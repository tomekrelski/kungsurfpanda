const modal = document.getElementById('serviceModal');
const modalDescription = document.getElementById('modalDescription');

// Add click event to all service buttons
document.querySelectorAll('.button-group .btn').forEach(button => {
    button.addEventListener('click', () => {
        const description = button.getAttribute('data-service');
        modalDescription.textContent = description;
        modal.style.display = 'flex';
    });
});

function closeModal() {
    modal.style.display = 'none';
}

// Optional: close when clicking outside modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
    closeModal();
    }
});


// Hamburger Navbar
function toggleMenu() {
        document.querySelector('.nav-links').classList.toggle('active');
}


// Copy Code 
function copyCode() {
    var copyText = document.getElementById("discountCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Copied: " + copyText.value);
}

// Read More Kite: 

function toggleText() {
    const fullText = document.getElementById("fullText");
    const button = document.querySelector(".read-more-btn");

    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        button.textContent = "Read less";
    } else {
        fullText.style.display = "none";
        button.textContent = "Read more";
    }
}

// Read more Surf:

function toggleSurfText() {
    const fullText = document.getElementById("surfFull");
    const button = document.querySelector(".read-more-btn");

    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        button.textContent = "Read less";
    } else {
        fullText.style.display = "none";
        button.textContent = "Read more";
    }
}

// Prana

function toggleTextPrana() {
    const fullText = document.getElementById("fullTextPrana");
    const button = document.querySelector(".read-more-btn");

    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        button.textContent = "Read less";
    } else {
        fullText.style.display = "none";
        button.textContent = "Read more";
    }
}

