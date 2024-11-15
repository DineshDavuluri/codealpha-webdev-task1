const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg"
];

let currentIndex = 0;

function openImage(index) {
  currentIndex = index;
  document.getElementById("largeImage").src = images[currentIndex];
  document.getElementById("imageViewer").style.display = "flex";
}

function closeImage() {
  document.getElementById("imageViewer").style.display = "none";
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("largeImage").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("largeImage").src = images[currentIndex];
}
