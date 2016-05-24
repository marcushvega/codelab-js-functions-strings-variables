var namBox = document.getElementById('nameBox')
var numBox = document.getElementById('numberBox')
var colorBox = document.getElementById('favColor')
var button = document.getElementById('reset')

var numP = document.getElementById('numberP')
var namP = document.getElementById('nameP')
var colorP = document.getElementById('colorP')

var counter = 0

//Attempts to get the prompt to prompt based on textbox clicked.
function promptIt(id) {
  //use console.log() to check what is going on in the code
  //console.log()
  //var element = document.getElementById(id)
  var theText

  //Disables text boxes after user enters values.
  if (id === 'nameBox'){
    theText = 'Enter your name'
    namBox.disabled = true
  }
  else if (id === 'favColor') {
    theText = "Enter your favorite color"
    colorBox.setAttribute("disabled", false)
  }
  else if (id === 'numberBox') {
    theText = "Enter a number between 1 and 1,000,000"
    counter++
    console.log(counter)
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
    console.log(counter)
    /*
    The line below makes input a number and then (g) globally replaces all
    commas with nothing. Basically, it removes all commas from numbers so that
    they can be checked against other numbers.
    */
    input = Number(input.replace(/,/g,''))
    numBox.value = input
    if (input > 1000000 || input < 1){
      //prompts for a number as long as it 1) is a number and 2) is a number
      //between 1 and 1,000,000
      promptIt('numberBox')
      counter++
      console.log(counter)
    }
  }
  setInnards()
}

//Number(myNumber.replace(/,/g,''))

function resetThem() {
  namBox.value = ""
  namBox.disabled = false

  numBox.value = ""
  numBox.disabled = false

  colorBox.value = ""
  colorBox.disabled = false
}

function setInnards() {
  //console.log(namP)
  /*
    Did not use else if statements because innerHTML will not be changed if
    text fields are changed "out of order"
  */
  if (namBox.disabled === true){
    namP.innerHTML = "The name you chose is: " + namBox.value
  }
  if (numBox.disabled === true){
    numP.innerHTML = "The number you chose is: " + numBox.value
  }
  if (colorBox.disabled === true){
    colorP.innerHTML = "The color you chose is: " + colorBox.value
  }
}
/*nam.addEventListener("focus", promptIt, false) //ctrl + shift + D duplicates lines
num.addEventListener("focus", promptIt, false)*/
