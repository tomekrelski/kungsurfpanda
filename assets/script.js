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
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}


// Copy Code 
function copyCode() {
    var copyText = document.getElementById("discountCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Copied: " + copyText.value);
}

// Utility function for localized button text
function getButtonText(language, expanded) {
    const texts = {
        en: { more: "Read more", less: "Read less" },
        pl: { more: "Czytaj więcej", less: "Czytaj mniej" },
        es: { more: "Leer más", less: "Leer menos" }
    };

    const lang = texts[language] ? language : "en";
    return expanded ? texts[lang].less : texts[lang].more;
}

// Read More: Kite
function toggleText() {
    const fullText = document.getElementById("fullText");
    const button = document.querySelector(".read-more-btn");
    const language = document.documentElement.lang;

    const isExpanded = fullText.style.display === "block";
    fullText.style.display = isExpanded ? "none" : "block";
    button.textContent = getButtonText(language, !isExpanded);
}

// Read More: Surf
function toggleSurfText() {
    const fullText = document.getElementById("surfFull");
    const button = document.querySelector(".read-more-btn");
    const language = document.documentElement.lang;

    const isExpanded = fullText.style.display === "block";
    fullText.style.display = isExpanded ? "none" : "block";
    button.textContent = getButtonText(language, !isExpanded);
}

// Read More: Prana
function toggleTextPrana() {
    const fullText = document.getElementById("fullTextPrana");
    const button = document.querySelector(".read-more-btn");
    const language = document.documentElement.lang;

    const isExpanded = fullText.style.display === "block";
    fullText.style.display = isExpanded ? "none" : "block";
    button.textContent = getButtonText(language, !isExpanded);
}

// Read More: Tarifa
function toggleTextTarifa() {
    const fullText = document.getElementById("fullTextTarifa");
    const button = document.querySelector(".read-more-btn");
    const language = document.documentElement.lang;

    const isExpanded = fullText.style.display === "block";
    fullText.style.display = isExpanded ? "none" : "block";
    button.textContent = getButtonText(language, !isExpanded);
}


// Styles
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const style = button.getAttribute('data-style');
        const infoDiv = document.getElementById(style);

        if (infoDiv.hasAttribute('hidden')) {
            // Hide all other info
            document.querySelectorAll('.style-info').forEach(div => div.setAttribute('hidden', ''));
            infoDiv.removeAttribute('hidden');
        } else {
            infoDiv.setAttribute('hidden', '');
        }
    });
});