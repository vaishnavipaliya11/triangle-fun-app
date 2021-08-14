var userInputs = document.querySelectorAll(".angle-input")
var btnCheck = document.querySelector("#btn-check")
var outputDiv= document.querySelector(".output-div")
var errorDiv = document.querySelector(".errorDiv")

function checkBtnHandler() {
  var angleOne = Number(userInputs[0].value)
  var angleTwo = Number(userInputs[1].value)
  var angleThree = Number(userInputs[2].value)

  if(angleOne==""|| angleTwo==""||angleThree==""){
    errorDisplay("fill all the angles")
  }else {
    triangleFormed(angleOne,angleTwo,angleThree)
    errorDiv.style.display="none"
  }
}


function triangleFormed(angleOne,angleTwo,angleThree){
var sum= angleOne+angleTwo+angleThree

  if(sum ===180){
    outputDiv.innerText="it makes a triangle"
  }else {
    outputDiv.innerText="don't make a triangle"
  }
}

function errorDisplay(msg) {
  errorDiv.style.display="block"
  errorDiv.innerText=msg
}

btnCheck.addEventListener('click',checkBtnHandler)
