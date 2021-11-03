let scoreData = localStorage.getItem('score')
var highScore = document.querySelector("#highscore")
highScore.innerHTML= scoreData

let scoreNameData = localStorage.getItem("name")
var scoreName = document.querySelector("#scoreholder")
scoreName.innerHTML = scoreNameData