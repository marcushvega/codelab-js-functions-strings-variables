var namBox = document.getElementById('nameBox')
var numBox = document.getElementById('numberBox')
var colorBox = document.getElementById('favColor')
var button = document.getElementsById('reset')

var numP = document.getElementsById('number')
var namP = document.getElementsById('name')
var colorP = document.getElementsById('color')

//Attempts to get the prompt to prompt based on textbox clicked.
function promptIt(id) {
  //console.log()
  //var element = document.getElementById(id)
  var theText

  //Disables text boxes after user enters values.
  if (id === 'nameBox'){
    theText = 'Enter your name'
    namBox.setAttribute("disabled", false)
  }
  else if (id === 'favColor') {
    theText = "Enter your favorite color"
    colorBox.setAttribute("disabled", false)
  }
  else if (id === 'numberBox') {
    theText = "Enter a number between 1 and 1,000,000"
      if (theText > 1000000 || theText < 1){
        promptIt('number')
      }
    numBox.setAttribute("disabled", false)
  }
  else {
    theText = "Good job. You broke my site."
  }

  var input = prompt(theText)

  if (id === 'nameBox'){
    namBox.value = input
  }
  else if (id === 'favColor') {
    colorBox.value = input
  }
  else if (id === 'numberBox') {
    numBox.value = input
  }
  setInnards()
}

function resetThem() {
  namBox.value = ""
  namBox.disabled = false

  numBox.value = ""
  numBox.disabled = false

  colorBox.value = ""
  colorBox.disabled = false
}

function setInnards() {
  if (namBox.disabled === false){
    namP.innerHTML = "The name you chose is:" + namBox.value
  }
}
/*nam.addEventListener("focus", promptIt, false) //ctrl + shift + D duplicates lines
num.addEventListener("focus", promptIt, false)*/
