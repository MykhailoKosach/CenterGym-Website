// const mainPhoto = document.getElementById("main-photo");
// const thumbnails = document.querySelectorAll(".thumbnail");

// let currentIndex = 0;

// function updateMainPhoto(index) {
//     mainPhoto.src = thumbnails[index].src;
// }

// // Event listeners for thumbnail clicks
// thumbnails.forEach((thumbnail, index) => {
//     thumbnail.addEventListener("click", () => {
//         updateMainPhoto(index);
//         currentIndex = index;
//     });
// });

// // Function to navigate using arrow keys
// document.addEventListener("keydown", (event) => {
//     if (event.key === "ArrowLeft" && currentIndex > 0) {
//         currentIndex--;
//         updateMainPhoto(currentIndex);
//     } else if (event.key === "ArrowRight" && currentIndex < thumbnails.length - 1) {
//         currentIndex++;
//         updateMainPhoto(currentIndex);
//     }
// });

// const mainPhoto = document.getElementById("main-photo");
// const thumbnailsContainer = document.getElementById("thumbnails");

// let currentIndex = 0;
// const images = [
//     "/Images/CENTER MMA•TRX•CROSSFIT.png photo.png",
//     "/Images/trener6.JPG photo.png",
//     "/Images/trener1.JPG",
//     "/Images/IMG_6702.JPG",
//     "/Images/IMG_6688.JPG",
//     "/Images/IMG_6703.JPG",
//     "/Images/trener1.JPG",
//     "/Images/trener2.JPG",
//     "/Images/trener6.JPG",
//     // Add more image URLs here...
// ];

// function updateMainPhoto(index) {
//     mainPhoto.src = images[index];
// }

// // Create and append thumbnail images dynamically
// images.forEach((image, index) => {
//     const thumbnail = document.createElement("img");
//     thumbnail.classList.add("thumbnail");
//     thumbnail.src = image;
//     thumbnail.alt = `Thumbnail ${index + 1}`;
//     thumbnail.addEventListener("click", () => {
//         updateMainPhoto(index);
//         currentIndex = index;
//     });
//     thumbnailsContainer.appendChild(thumbnail);
// });

// // Event listener for arrow keys
// document.addEventListener("keydown", (event) => {
//     if (event.key === "ArrowLeft" && currentIndex > 0) {
//         currentIndex--;
//         updateMainPhoto(currentIndex);
//     } else if (event.key === "ArrowRight" && currentIndex < images.length - 1) {
//         currentIndex++;
//         updateMainPhoto(currentIndex);
//     }
// });


const mainPhoto = document.getElementById("main-photo");
const thumbnailContainer = document.getElementById("thumbnail-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;
const images = [
    "/Images/trener6.JPG",
    "/Images/trener1.JPG",
    "/Images/IMG_6702.JPG",
    "/Images/IMG_6688.JPG",
    "/Images/IMG_6703.JPG",
    "/Images/trener1.JPG",
    "/Images/trener2.JPG",
    "/Images/trener6.JPG",
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