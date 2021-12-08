let btn = document.querySelector(".controller");
const cells = document.querySelectorAll(".cell");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let cell = document.querySelector("#cell-selector").value;
  let color = document.querySelector("#color").value;
  cells.forEach((item) => {
    if (item.classList.contains(`cell${cell}`)) {
      item.style.backgroundColor = "#fff";
    } else {
      item.style.backgroundColor = color;
    }
  });
});
