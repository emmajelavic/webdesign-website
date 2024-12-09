// Simple dataset for search
const searchableItems = [
    { title: "Home", url: "index.html" },
    { title: "About", url: "about.html" },
    { title: "Portfolio", url: "portfolio.html" },
    { title: "Contact", url: "contact.html" },
];

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get the search form element by ID
    const searchForm = document.getElementById("searchForm");

    // Add event listener to handle form submission
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();  // Stop the form from submitting and changing the URL

        // Get the value typed in the search bar (query)
        const query = new FormData(searchForm).get("q").toLowerCase(); // Get query and convert to lowercase

        // Find the matching page in the searchableItems array
        const result = searchableItems.find(item => item.title.toLowerCase() === query);

        if (result) {
            // If a match is found, navigate to the URL of the matched page
            window.location.href = result.url;
        } else {
            // If no match is found, alert the user
            alert("Page not found. Please check your input.");
        }
    });
});

// Select all images in the gallery
const images = document.querySelectorAll('.placeholder');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const modalDescription = document.getElementById('modal-description'); // Description element
const closeBtn = document.getElementById('modal-close');

// When an image is clicked, open the modal
images.forEach(image => {
    image.addEventListener('click', function () {
        // Get the source, alt text, and description for the clicked image
        const imgSrc = this.querySelector('img').src;
        const imgAlt = this.querySelector('img').alt;
        const imgDescription = this.getAttribute('data-description'); // Get description from data attribute

        // Set the modal content
        modalImage.src = imgSrc;
        modalImage.alt = imgAlt;
        modalText.textContent = this.querySelector('.overlay-text').textContent; // Overlay text
        modalDescription.textContent = imgDescription; // Display the description

        // Display the modal
        modal.style.display = 'flex';
    });
});

// Open the Navigation
function openNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.classList.add("open");  // Add the 'open' class to show the nav
}

// Close the Navigation
function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.classList.remove("open");  // Remove the 'open' class to hide the nav
}

// Open Modal
function openModal(imageSrc, imageAlt, imageDescription) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalText = document.getElementById("modal-text");

    // Set modal content
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modalText.textContent = imageDescription;

    // Show the modal
    modal.style.display = "flex";
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";  // Hide modal
}

// Close Button Event Listener
document.getElementById("modal-close").addEventListener("click", closeModal);

// Close Modal When Clicking Outside the Content
document.getElementById("modal").addEventListener("click", function (event) {
    if (event.target === this) {
        closeModal();  // Close when clicking outside
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.placeholder');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.getElementById('modal-close');
    const videoButton = document.getElementById('video-button'); // Static button for Image 5 in modal
    let additionalButton = null; // Dynamically created button for Image 2

    // Function to open the YouTube link for Image 5
    function openDocumentation() {
        window.open("https://youtu.be/UZrZo3MGWhI", "_blank");
    }

    // Function to open a video link for Image 2
    function openVideoForImage2() {
        window.open("https://youtu.be/DvzgL5HpoZ8", "_blank");
    }

    // Set event listener for the "Watch Documentation" button (Image 5)
    videoButton.addEventListener('click', openDocumentation);

    // Function to open the modal for a specific image
    function openModalForImage(imageElement) {
        const imgSrc = imageElement.querySelector('img').src;
        const imgAlt = imageElement.querySelector('img').alt;
        const imgDescription = imageElement.getAttribute('data-description');
        const imageId = imageElement.id;

        // Set modal content
        modalImage.src = imgSrc;
        modalImage.alt = imgAlt;
        modalText.textContent = imageElement.querySelector('.overlay-text').textContent;
        modalDescription.textContent = imgDescription;

        // Show or hide buttons based on the image ID
        if (imageId === "image-5") {
            videoButton.style.display = 'inline-block'; // Show the "Watch Documentation" button for Image 5
        } else {
            videoButton.style.display = 'none'; // Hide the button for other images
        }

        if (imageId === "image-2") {
            // Create a new button for Image 2 if not already created
            if (!additionalButton) {
                additionalButton = document.createElement('button');
                additionalButton.id = 'additional-video-button';
                additionalButton.className = 'modal-button'; // Shared CSS class
                additionalButton.textContent = 'Watch Video';
                additionalButton.addEventListener('click', openVideoForImage2);
                modalDescription.parentNode.appendChild(additionalButton); // Add button below description
            }
            additionalButton.style.display = 'inline-block'; // Show the button for Image 2
        } else if (additionalButton) {
            additionalButton.style.display = 'none'; // Hide the button for other images
        }

        // Display the modal
        modal.style.display = 'flex';
    }

    // Close the modal and reset content
    function closeModal() {
        modal.style.display = 'none';

        // Reset modal content
        modalImage.src = '';
        modalImage.alt = '';
        modalText.textContent = '';
        modalDescription.textContent = '';

        // Hide both buttons on close
        videoButton.style.display = 'none';
        if (additionalButton) {
            additionalButton.style.display = 'none';
        }
    }

    // Add click event listeners to all images
    images.forEach(img => {
        img.addEventListener('click', () => openModalForImage(img));
    });

    // Close modal when the close button is clicked
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the content
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
