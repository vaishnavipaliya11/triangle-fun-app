var sides = document.querySelectorAll(".sides-of-triangle")
var checkHypoBtn = document.querySelector("#checkHypoBtn")
var output = document.querySelector(".output-div")
var formForHypotenus= document.forms[0];


function checkHypoBtnHandler() {
  var sideOne= Number(sides[0].value)
  var sideTwo = Number(sides[1].value)

  if(sideOne==""|| sideTwo==""){
    errorDiv.innerText="please fill all the sides"
  }else{
    calculateHypotenus(sideOne,sideTwo)
  }
}

function calculateHypotenus(sideOne,sideTwo){
  var hypotenus= Math.sqrt((sideOne*sideTwo)+(sideOne*sideTwo))
  output.innerText= hypotenus
}


checkHypoBtn.addEventListener("click",checkHypoBtnHandler)
