

// const mainPhoto = document.getElementById("main-photo");
// const thumbnailContainer = document.getElementById("thumbnail-container");
// const prevButton = document.getElementById("prevButton");
// const nextButton = document.getElementById("nextButton");

// let currentIndex = 0;
// const images = [
//     "/Images/trener6.JPG",
//     "/Images/trener1.JPG",
//     "/Images/IMG_6702.JPG",
//     "/Images/IMG_6688.JPG",
//     "/Images/IMG_6703.JPG",
//     "/Images/trener1.JPG",
//     "/Images/trener2.JPG",
//     "/Images/trener6.JPG",
//     // Add more image URLs here...
// ];
// const visibleThumbnails = 5;

// function updateMainPhoto(index) {
//     mainPhoto.src = images[index];
// }

// function updateThumbnails() {
//     thumbnailContainer.innerHTML = "";

//     for (let i = currentIndex; i < currentIndex + visibleThumbnails; i++) {
//         if (i < images.length) {
//             const thumbnail = document.createElement("img");
//             thumbnail.classList.add("thumbnail");
//             thumbnail.src = images[i];
//             thumbnail.alt = `Thumbnail ${i + 1}`;
//             thumbnail.addEventListener("click", () => {
//                 updateMainPhoto(i);
//                 currentIndex = i;
//             });
//             thumbnailContainer.appendChild(thumbnail);
//         }
//     }
// }

// updateThumbnails();

// prevButton.addEventListener("click", () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateThumbnails();
//         updateMainPhoto(currentIndex);
//     }
// });

// nextButton.addEventListener("click", () => {
//     if (currentIndex < images.length - visibleThumbnails) {
//         currentIndex++;
//         updateThumbnails();
//         updateMainPhoto(currentIndex);
//     }
// });

const mainPhoto = document.getElementById("main-photo");
const thumbnailContainer = document.getElementById("thumbnail-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;
const images = [
    // "/Images/trener6.JPG",
    // "/Images/trener1.JPG",
    "/Images/IMG_6702.JPG",
    "/Images/IMG_6688.JPG",
    "/Images/IMG_6703.JPG",
    // "/Images/trener1.JPG",
    // "/Images/trener2.JPG",
    // "/Images/trener6.JPG",
    // Add more image URLs here...
];
const visibleThumbnails = 5;

function updateMainPhoto(index) {
    mainPhoto.src = images[index];
}

function updateThumbnails() {
    thumbnailContainer.innerHTML = "";

    for (let i = currentIndex; i < currentIndex + visibleThumbnails; i++) {
        if (i < images.length) {
            const thumbnail = document.createElement("img");
            thumbnail.classList.add("thumbnail");
            thumbnail.src = images[i];
            thumbnail.alt = `Thumbnail ${i + 1}`;
            thumbnail.addEventListener("click", () => {
                updateMainPhoto(i);
                currentIndex = i;
            });
            thumbnailContainer.appendChild(thumbnail);
        }
    }
}

updateThumbnails();

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateThumbnails();
        updateMainPhoto(currentIndex);
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - visibleThumbnails) {
        currentIndex++;
        updateThumbnails();
        updateMainPhoto(currentIndex);
    }
});

// Swipe functionality for mobile devices
let touchstartX = 0;
let touchendX = 0;

mainPhoto.addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].screenX;
});

mainPhoto.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const minSwipeDistance = 100;

    if (touchstartX - touchendX > minSwipeDistance) {
        // Swiped left, go to the next image
        nextImage();
    }

    if (touchendX - touchstartX > minSwipeDistance) {
        // Swiped right, go to the previous image
        prevImage();
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateThumbnails();
        updateMainPhoto(currentIndex);
    }
}

function nextImage() {
    if (currentIndex < images.length - visibleThumbnails) {
        currentIndex++;
        updateThumbnails();
        updateMainPhoto(currentIndex);
    }
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
