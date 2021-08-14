var sides = document.querySelectorAll(".sides-of-triangle")
var checkHypoBtn = document.querySelector("#checkHypoBtn")
var output = document.querySelector(".output-div")
var errorDiv = document.querySelector(".errorDiv")


function checkHypoBtnHandler() {
  var sideOne= Number(sides[0].value)
  var sideTwo = Number(sides[1].value)

  if(sideOne==""|| sideTwo==""){
    errorDisplay("please fill all the sides")
  }else{
    calculateHypotenus(sideOne,sideTwo)
    errorDiv.style.display="none";
  }
}

function calculateHypotenus(sideOne,sideTwo){
  var hypotenus= Math.sqrt((sideOne*sideTwo)+(sideOne*sideTwo))
  output.innerText= hypotenus
}

function errorDisplay(msg) {
errorDiv.style.display="block"
errorDiv.innerText=msg;
}

checkHypoBtn.addEventListener("click",checkHypoBtnHandler)
