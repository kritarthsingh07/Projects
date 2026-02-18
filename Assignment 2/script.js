body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1, h2 {
  text-align: center;
}

/* ======================= */
/* TASK 1 IMAGE GALLERY */
/* ======================= */

.gallery-container {
  text-align: center;
}

.preview img {
  width: 400px;
  height: 250px;
  border: 3px solid black;
  margin-bottom: 20px;
}

.thumbnails img {
  width: 100px;
  height: 70px;
  margin: 10px;
  cursor: pointer;
  border: 3px solid transparent;
  transition: 0.3s;
}

/* Highlight Selected Thumbnail */
.thumbnails img.active {
  border: 3px solid red;
}

/* ======================= */
/* TASK 2 TABLE GENERATOR */
/* ======================= */

.form-container {
  text-align: center;
  margin-bottom: 20px;
}

input {
  padding: 8px;
  margin: 5px;
}

button {
  padding: 8px 15px;
  cursor: pointer;
}

table {
  width: 80%;
  margin: auto;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  border: 1px solid black;
  text-align: center;
}

/* Alternate Row Colors */
tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr:nth-child(odd) {
  background-color: white;
}

.delete-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
}
