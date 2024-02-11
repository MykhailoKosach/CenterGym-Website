// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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


// // Get the button:
// let mybutton2 = document.getElementById("myBtnClick");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction2()};

// function scrollFunction2() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     mybutton2.style.display = "block";
//   } else {
//     mybutton2.style.display = "none";
//   }
// }








/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  const mainPhoto = document.getElementById("main-photo");
  const thumbnailContainer = document.getElementById("thumbnails");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  let currentIndex = 0;
  const images = [
    "/Images/gym1.JPG",
    "/Images/gym2.JPG",
    "/Images/gym3.JPG",
    "/Images/gym4.JPG",
    "/Images/gym5.JPG",
    "/Images/gym6.JPG",
    "/Images/gym7.JPG",
    "/Images/gym8.JPG",
    "/Images/comp1.JPG",
    "/Images/comp2.JPG",
    "/Images/comp3.JPG",
    "/Images/comp4.JPG",
    "/Images/comp5.JPG",
    "/Images/comp6.JPG",
    "/Images/comp7.JPG",
    "/Images/comp8.JPG",
      // Add more image URLs here...
  ];
  const totalImages = images.length;
  const visibleThumbnails = 5;

  // function updateMainPhoto(index) {
  //     mainPhoto.src = images[index];
  // }

  function updateMainPhoto(index) {
    mainPhoto.style.opacity = 0; // Fading out
    setTimeout(() => {
        mainPhoto.src = images[index];
        mainPhoto.style.opacity = 1; // Fading in
    }, 500); // Use the same duration as the transition in CSS
}

  function updateThumbnails() {
      thumbnailContainer.innerHTML = "";

      for (let i = currentIndex - 2; i <= currentIndex + 2; i++) {
          let adjustedIndex = (i + totalImages) % totalImages;
          const thumbnail = document.createElement("img");
          thumbnail.classList.add("thumbnail");
          if (adjustedIndex === currentIndex) {
              thumbnail.classList.add("active");
          }
          thumbnail.src = images[adjustedIndex];
          thumbnail.alt = `Thumbnail ${adjustedIndex + 1}`;
          thumbnail.addEventListener("click", () => {
              currentIndex = adjustedIndex;
              updateMainPhoto(currentIndex);
              updateThumbnails();
          });
          thumbnailContainer.appendChild(thumbnail);
      }
  }

  updateThumbnails();

  prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateMainPhoto(currentIndex);
      updateThumbnails();
  });

  nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateMainPhoto(currentIndex);
      updateThumbnails();
  });


  const popupOverlay = document.getElementById('popup-overlay');
  const closeButton = document.getElementById('close-button');
  
  // Show the popup after 5 seconds
  setTimeout(() => {
    popupOverlay.style.display = 'block';
  }, 1000);
  
  // Close the popup when clicking the close button or outside the content
  popupOverlay.addEventListener('click', (event) => {
    if (event.target.id !== 'popup-content') {
      popupOverlay.style.display = 'none';
    }
  });
  
  closeButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
  });
  
