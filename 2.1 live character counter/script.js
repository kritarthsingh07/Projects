const textInput = document.getElementById("textInput");
const counter = document.getElementById("counter");
const limit = 150;

textInput.addEventListener("input", () => {
  const length = textInput.value.length;
  counter.textContent = length + "/" + limit;

  if (length === limit) {
    counter.classList.add("limit");
  } else {
    counter.classList.remove("limit");
  }
});
