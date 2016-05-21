var nam = document.getElementById('nameBox')
var num = document.getElementById('numberBox')
var color = document.getElementById('favColor')


//Attempts to get the prompt to prompt based on textbox clicked.
function promptIt(id) {
  //console.log()
  //var element = document.getElementById(id)
  var theText

  if (id === 'nameBox'){
    theText = 'Enter your name'
    nam.setAttribute("disabled", false)
  }
  else if (id === 'favColor') {
    theText = "Enter your favorite color"
  }
  else if (id === 'numberBox') {
    //Edit this so this prompt prompts an audio
    theText = "Enter a number between 1 and 1,000,000"
  }
  else {
    theText = "Crap, I'm confused."
  }

  var input = prompt(theText)

  if (id === 'nameBox'){
    document.getElementById('nameBox').value = input
  }
  else if (id === 'favColor') {
    document.getElementById('favColor').value = input
  }
  else if (id === 'numberBox') {
    //Edit this so this prompt prompts an audio
    document.getElementById('numberBox').value = input
  }

}
/*nam.addEventListener("focus", promptIt, false) //ctrl + shift + D duplicates lines
num.addEventListener("focus", promptIt, false)*/
