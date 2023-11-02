

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