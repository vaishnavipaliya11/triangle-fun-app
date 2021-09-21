var userInput = document.querySelectorAll(".userInputs")
var calAreaBtn = document.querySelector('#calAreaBtn')
var outputDiv = document.querySelector('.output-div')
var errorDiv = document.querySelector('.errorDiv')

  function calAreaBtnHandler() {
  var sideOne = Number(userInput[0].value);
  var sideTwo = Number(userInput[1].value);
  var sideThree= Number(userInput[2].value);


 if(sideOne==""|| sideTwo==""||sideThree=="" || sideOne<0 ||sideTwo<0 ||sideThree<0){
   errorDisplay("please fill the feilds properly")
   outputDiv.style.display="none";
 }else{

   calculateAreaBySide(sideOne,sideTwo,sideThree)
   errorDiv.style.display="none";
   outputDiv.style.display="block";
 }
}

function calculateAreaBySide(a,b,c) {
  const s= a+b+c/2;
  var result = Math.sqrt((s*(s-a)*(s-b)*(s-c)))
  outputDiv.innerText = result.toFixed()
}


function errorDisplay(msg) {
errorDiv.style.display="block";
errorDiv.innerText=msg;
}

calAreaBtn.addEventListener("click",calAreaBtnHandler)
