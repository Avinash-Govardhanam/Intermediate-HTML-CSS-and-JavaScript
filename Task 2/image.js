const images = ["images/img1.jpeg","images/img2.jpeg", "images/img3.jpeg", "images/img4.jpeg", "images/img5.jpeg", "images/img6.jpeg", "images/img7.jpeg", "images/img8.jpeg"]
  document.getElementById("mainImage").style.width = "500px";
document.getElementById("mainImage").style.height = "400px"; // optional
let current = 0;

  function showImage() {
    document.getElementById("mainImage").src = images[current];
  
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(); 
  }

  function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage();
  }