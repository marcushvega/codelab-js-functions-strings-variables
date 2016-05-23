var nam = document.getElementById('nameBox')
var num = document.getElementById('numberBox')
var color = document.getElementById('favColor')

//Attempts to get the prompt to prompt based on textbox clicked.
function promptIt(id) {
  //console.log()
  //var element = document.getElementById(id)
  var theText

  //Disables text boxes after user enters values.
  if (id === 'nameBox'){
    theText = 'Enter your name'
    nam.setAttribute("disabled", false)
  }
  else if (id === 'favColor') {
    theText = "Enter your favorite color"
    color.setAttribute("disabled", false)
  }
  else if (id === 'numberBox') {
    theText = "Enter a number between 1 and 1,000,000"
      if (theText > 1000000 || theText < 1){
        promptIt('number')
      }
    num.setAttribute("disabled", false)
  }
  else {
    theText = "Good job. You broke my site."
  }

  var input = prompt(theText)

  if (id === 'nameBox'){
    document.getElementById('nameBox').value = input
  }
  else if (id === 'favColor') {
    document.getElementById('favColor').value = input
  }
  else if (id === 'numberBox') {
    document.getElementById('numberBox').value = input
  }

}
/*nam.addEventListener("focus", promptIt, false) //ctrl + shift + D duplicates lines
num.addEventListener("focus", promptIt, false)*/
