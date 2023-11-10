const mainPhoto = document.getElementById("main-photo");
const thumbnailContainer = document.getElementById("thumbnail-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;
const images = [
    "/Images/photo1.JPG",
    "/Images/photo2.JPG",
    "/Images/photo3.JPG",
    "/Images/photo4.JPG",
    "/Images/photo5.JPG",
    "/Images/photo6.JPG",
    "/Images/photo7.JPG",
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
            if (i === currentIndex) {
                thumbnail.classList.add("active");
            }
            thumbnail.src = images[i];
            thumbnail.alt = `Thumbnail ${i + 1}`;
            thumbnail.addEventListener("click", () => {
                currentIndex = i;
                updateMainPhoto(currentIndex);
                updateThumbnails();
            });
            thumbnailContainer.appendChild(thumbnail);
        }
    }
}

updateThumbnails();

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateMainPhoto(currentIndex);
        updateThumbnails();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateMainPhoto(currentIndex);
        updateThumbnails();
    }
});