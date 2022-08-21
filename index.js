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
 enteredvalue.addEventListener("keyup",update)

// enteredvalue.addEventListener("keyup", function () {
//      console.log('pressed')
//     if (enteredvalue.value.length >= 3) {      
//     progressBar.style.width = "20%"
//     console.log('more 3')  
//     }
//     if (enteredvalue.value.length < 3) {
//     progressBar.style.width = "16%"
//     console.log('less 2')
//         }
// })
    

function update() {
  var progressBar = document.querySelector('.progress-bar')  
  var width = 1
  var identity = setInterval(scene, 10)
  function scene() {
    if (width >= 100) {
      clearInterval(identity)
    } else {
      width++
      progressBar.style.width = width + '%'
    }
  }
}