var userInput= document.querySelectorAll(".userInput")
var calAreaBtn = document.querySelector("#calAreaBtn")
var outputDiv= document.querySelector(".output-div")
var errorMsg = document.querySelector(".errorDiv")
var outputHeading = document.querySelector("#output-heading")
function calAreaBtnHandler(){
  var base= Number(userInput[0].value)
  var height = Number(userInput[1].value)
  console.log(base);
  console.log(height);

  if(base==""|| height=="" || base <0 || height< 0){
    errorDisplay("please fill proper inputs")
    outputDiv.style.display="none"
    outputHeading.style.display="none"
  }else {
    calculateAreaBase(base,height)
    outputDiv.style.display="block";
    errorMsg.style.display="none"
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
