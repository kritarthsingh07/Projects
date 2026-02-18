

let thumbnails = document.querySelectorAll(".thumb");
let previewImage = document.getElementById("previewImage");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", function () {

    
    previewImage.src = this.src.replace("/100", "/400");

    
    thumbnails.forEach((img) => img.classList.remove("active"));

    
    this.classList.add("active");
  });
});



function addRow() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;

  if (name === "" || age === "" || course === "") {
    alert("Please fill all fields!");
    return;
  }

  let tableBody = document.querySelector("#studentTable tbody");

  
  let row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${course}</td>
    <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
  `;

  tableBody.appendChild(row);

  
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("course").value = "";
}


function deleteRow(button) {
  button.parentElement.parentElement.remove();
}
