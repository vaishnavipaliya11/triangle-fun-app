var userInput = document.querySelectorAll(".userInputs")
var calAreaBtn = document.querySelector('#calAreaBtn')
var outputDiv = document.querySelector('.output-div')
var errorDiv = document.querySelector('.errorDiv')

  function calAreaBtnHandler() {
  var sideOne = Number(userInput[0].value);
  var sideTwo = Number(userInput[1].value);
  var sideThree= Number(userInput[2].value);


 if(sideOne==""|| sideTwo==""||sideThree==""){
   errorDisplay("please fill out the feilds")
 }else{
   errorDiv.style.display="none"
   calculateAreaBySide(sideOne,sideTwo,sideThree)
 }
}

function calculateAreaBySide(a,b,c) {
  const s= a+b+c/2;
  outputDiv.innerText = Math.sqrt(s*(s-a)*(s-b)*(s-c))
}

function errorDisplay(msg) {
errorDiv.style.display="block";
errorDiv.innerText=msg;
}

calAreaBtn.addEventListener("click",calAreaBtnHandler)
