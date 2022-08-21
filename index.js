let firstPage = document.querySelector('.first-page')
let secondPage = document.querySelector('.second-page')
let backButton = document.querySelector('.goback')
let progressBar = document.querySelector('.progress-bar')

let totalEntry = document.getElementsByClassName('entry').length
let inputs =[]
console.log(Array.from(Array(totalEntry).keys(false)))
backButton.addEventListener('click', openFirstPage)
function openFirstPage() {
    firstPage.style.display = 'block'
    secondPage.style.display = 'none'
}

let enteredvalue = document.getElementById('username')
enteredvalue.addEventListener("keyup", () => {
  if (enteredvalue.value.length >= 3) {
    update("increase")
  }
  if (enteredvalue.value.length < 3) {
    update("decrease")
  }
});

function update(action) {
  var progressBar = document.querySelector(".progress-bar");
  var width = 1;
  if (width <= 100) {
    switch (action) {
      case "increase":
        width += 16.6;
        progressBar.style.width = width + "%";
        break;
      case "decrease":
        width = width - 16.6;
        progressBar.style.width = width + "%";
        break;

      default:
        width = 1;
        progressBar.style.width = width + "%";
        break;
    }
  }
}

document.querySelector('#')