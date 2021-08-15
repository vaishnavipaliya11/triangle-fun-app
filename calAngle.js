var userInputs = document.querySelectorAll(".angle-input")
var btnCheck = document.querySelector("#btn-check")
var outputDiv= document.querySelector(".output-div")
var errorDiv = document.querySelector(".errorDiv")

function checkBtnHandler() {
  var angleOne = Number(userInputs[0].value)
  var angleTwo = Number(userInputs[1].value)
  var angleThree = Number(userInputs[2].value)

  if(angleOne==""|| angleTwo==""||angleThree==""){
    errorDisplay("you have not filled all the angles")
    outputDiv.style.display="none";
  }else {
    triangleFormed(angleOne,angleTwo,angleThree)
    errorDiv.style.display="none";
    outputDiv.style.display="block"
  }
}


function triangleFormed(angleOne,angleTwo,angleThree){
var sum= angleOne+angleTwo+angleThree

  if(sum ===180){
    outputDiv.innerText="angles makes a triangle"
  }else {
    outputDiv.innerText="angles don't make a triangle"
  }
}

function errorDisplay(msg) {
  errorDiv.style.display="block"
  errorDiv.innerText=msg
}

btnCheck.addEventListener('click',checkBtnHandler)
