var sides = document.querySelectorAll(".sides-of-triangle")
var checkHypoBtn = document.querySelector("#checkHypoBtn")
var output = document.querySelector(".output-div")
var errorDiv = document.querySelector(".errorDiv")


function checkHypoBtnHandler() {
  var sideOne= Number(sides[0].value)
  var sideTwo = Number(sides[1].value)

  if(sideOne==""|| sideTwo=="" || sideOne<0 ||sideTwo<0){

    errorDisplay("please fill all the sides")
      output.style.display="none";

  }else{
    calculateHypotenus(sideOne,sideTwo)
    errorDiv.style.display="none";
    output.style.display="block";
  }
}

function calculateHypotenus(sideOne,sideTwo){
  var hypotenus= Math.sqrt((sideOne*sideOne)+(sideTwo*sideTwo))
  output.innerText= hypotenus.toFixed()
}

function errorDisplay(msg) {
errorDiv.style.display="block";
errorDiv.innerText=msg;
}

checkHypoBtn.addEventListener("click",checkHypoBtnHandler)
