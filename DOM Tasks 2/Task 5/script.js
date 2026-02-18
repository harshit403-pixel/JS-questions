let h1 = document.querySelector("h1")
let progress = document.querySelector(".progress")
let addBtn = document.querySelector("button")

let value = 0;

addBtn.addEventListener("click", () => {

   let random = Math.floor(Math.random() * 20) + 10;

   if (value < 100) {
      value += random;

      if (value > 100) {
         value = 100;
      }

      progress.style.width = value + "%";
      h1.innerHTML = value + "%";
   }

   if (value === 100) {
      h1.innerHTML = "Completed";
   }

});

