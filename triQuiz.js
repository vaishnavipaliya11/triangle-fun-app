var triQuizForm= document.forms[0]
var queSet = document.querySelectorAll(".queSet")
var scoreOutput= document.querySelector('.output')
var btnScoreSubmit = document.querySelector("#btnScoreSubmit")

const ans = ["option1","option1","option1","option3","option3",]

let score= 0

triQuizForm.addEventListener("submit", (e)=>{

  e.preventDefault()

const data= new FormData(triQuizForm)

let index=0

for(let entry of data){

  if(entry[1]== ans[index]){
    queSet[index].style.backgroundColor= "#FCA5A5"
    score=score+1

  }else {
    queSet[index].style.backgroundColor="#FCD34D"
  }
  index++
}

scoreOutput.innerText= "Congratulations your score is " +score
})
