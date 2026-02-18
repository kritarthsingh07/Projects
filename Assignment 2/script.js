let thumbs = document.querySelectorAll(".thumb");
let mainImage = document.getElementById("mainImage");

thumbs.forEach((img) => {
  img.addEventListener("click", function () {

    // Change Preview Image
    mainImage.src = this.src.replace("100/70", "400/250");

    // Remove Highlight from All
    thumbs.forEach((thumb) => thumb.classList.remove("active"));

    // Highlight Selected Thumbnail
    this.classList.add("active");
  });
});
