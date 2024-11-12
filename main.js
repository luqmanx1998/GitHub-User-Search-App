
const toggleContainer = document.querySelector(".toggle-lightdark");

if (toggleContainer) {
    toggleContainer.addEventListener("click", function (e) {
        const lightMode = document.querySelector(".toggle-lightdark-light");
        const darkMode = document.querySelector(".toggle-lightdark-dark");

        if (lightMode && darkMode) {
            // Toggle hidden classes on the light and dark mode buttons
            lightMode.classList.toggle("hidden");
            darkMode.classList.toggle("hidden");
        } else {
            console.error("Light or dark mode elements not found");
        }

        // Find the clicked element in the toggle container
        const targetElement = e.target.closest(".toggle-lightdark-dark, .toggle-lightdark-light");

        if (targetElement && targetElement.classList.contains("toggle-lightdark-dark")) {
            // If the dark mode button was clicked, switch to light mode
            document.body.classList.add("light");
            document.querySelector('.searchbar').classList.add('light');
            document.querySelector('.user-header').classList.add('light');
            document.querySelector('.user-handle').classList.add('light');
            document.querySelector('.user-join-date').classList.add('light');
            document.querySelector('.user-profile-card').classList.add('light');
            document.querySelector('.user-bio').classList.add('light');
            document.querySelector('.user-stats').classList.add('light');
            document.querySelector('.user-contact').classList.add('light');
        } else {
            // Otherwise, switch back to dark mode
            document.body.classList.remove("light");
            document.querySelector('.searchbar').classList.remove('light');
            document.querySelector('.user-header').classList.remove('light');
            document.querySelector('.user-handle').classList.remove('light');
            document.querySelector('.user-join-date').classList.remove('light');
            document.querySelector('.user-profile-card').classList.remove('light');
            document.querySelector('.user-bio').classList.remove('light');
            document.querySelector('.user-stats').classList.remove('light');
            document.querySelector('.user-contact').classList.remove('light');
        }
    });
} else {
    console.error("Toggle container not found");
}

const checkContact = function () {
    // Select all span elements inside the user-contact section
    const contactInfo = document.querySelectorAll('.user-contact div span');

    contactInfo.forEach(span => {
        if (span.textContent === 'Not Available') {
            span.closest('div').classList.add('unavailable'); // Add the class to the parent div
        } else {
            span.closest('div').classList.remove('unavailable'); // Remove the class if it is available
        }
    });
};

// Call the checkContact function after updating the user data
checkContact();