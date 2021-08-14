var userInput= document.querySelectorAll(".userInput")
var calAreaBtn = document.querySelector("#calAreaBtn")
var outputDiv= document.querySelector(".output-div")
var errorMsg = document.querySelector(".errorDiv")

function calAreaBtnHandler(){
  var base= Number(userInput[0].value)
  var height = Number(userInput[1].value)
  console.log(base);
  console.log(height);

  if(base==""|| height==""){
    errorDisplay("please fill the inputs")
  }else {
    calculateAreaBase(base,height)
  }
}

function calculateAreaBase(b,h) {
  outputDiv.innerText= (b+h)/2
}

function errorDisplay(msg) {
  errorMsg.style.display="block"
  errorMsg.innerText=msg
}

calAreaBtn.addEventListener("click",calAreaBtnHandler)
