var width = 0;
let firstPage = document.querySelector('.first-page')
let secondPage = document.querySelector('.second-page')
let backButton = document.querySelector('.goback')
let placeName = document.querySelector('#placename')
let progressBar = document.querySelector('.progress-bar')
let enteredvalue = document.getElementById('username')
let nodl=document.querySelectorAll('input[name="natureof"]')
let todl = document.querySelectorAll('input[name="typeof"]')
let selectBox = document.querySelectorAll('.select-entry')

backButton.addEventListener('click', openFirstPage)
function openFirstPage() {
    firstPage.style.display = 'block'
    secondPage.style.display = 'none'
    update('decrease')
}


function openSecondPage() {
    firstPage.style.display = 'none'
    secondPage.style.display = 'block'
}
window.addEventListener('change', () => {
    if (width >= 40) { setTimeout(() => {
        openSecondPage()
    }, 1000); }
})

enteredvalue.addEventListener("change", filedinput)
placeName.addEventListener("change", filedinput)


function filedinput() {
    if (enteredvalue.value.length >= 3) 
    update("increase")
    if (enteredvalue.value.length < 3) 
    update("decrease")
}

nodl.forEach(element => {
    element.addEventListener('click',()=>update("increase"))
}, { once: true })
    

selectBox.forEach(element => {
    element.addEventListener('change',()=>update("increase"))
    }, {once:true})


todl.forEach(element => {
    element.addEventListener('click',()=>update("increase"))
    }, { once: true })


function update(action) {
  var progressBar = document.querySelector(".progress-bar");
  
  if (width < 100) {
    switch (action) {
        case "increase":
            if (width > 80)
            {
                width=100
            }
            else {
                
                width += 16.7;
            }
            progressBar.style.width = width + "%";
        break;
        case "decrease":
            width = width - 16.7;
        progressBar.style.width = width + "%";
        break;

        default:
        width = 1;
        progressBar.style.width = width + "%";
        break;
    }
  }
}
