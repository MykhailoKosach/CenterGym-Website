const mainPhoto = document.getElementById("main-photo");
const thumbnailContainer = document.getElementById("thumbnail-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;
const images = [
    "/Images/photo1.jpg",
    "/Images/photo2.jpg",
    "/Images/photo3.jpg",
    "/Images/photo4.jpg",
    "/Images/photo5.jpg",
    "/Images/photo6.jpg",
    "/Images/photo7.jpg",
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