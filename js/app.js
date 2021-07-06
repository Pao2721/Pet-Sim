//Variables------------------Variables---------------------Variables\\
let happiness = 2
let hunger = 0
let winStatus = false 
let petName  = ""

//Constants------------------Constants---------------------Constants\\
const food = ["apple", "fish", "chocolate"]

//Cached Elements------------Cached Elements---------------Cached Elements\\
const musicBtn = document.getElementById("bgmusic")
const messageEl = document.getElementById("message")
const restartBtn = document.getElementById("restart")
const foodBtn = document.getElementById("feed")
const miniGame = document.getElementById("minigame")
//Event Listeners------------Event Listeners---------------Event Listeners\\
 restartBtn.addEventListener("click", init)
 //musicBtn.addEventListener('click', music)

//Functions------------------Functions---------------------Functions\\
//Initializes the game

function init() {
  winStatus = false
  happiness = 2
  hunger = 2
  render()
}

 function render() {
  if (hunger === 1) {
    messageEl.innerText = `${PetName} is STARVING!!!`
    } else if (hunger === 2) {
      messageEl.innerText = `${PetName} is hungry.`
    } else if (hunger === 3) {
      messageEl.innerText = `${PetName} is not hungry right now.`
    } else {
     messageEl.innerText = `${PetName} is full and dosen't want to eat.`
    }
}
 
function feeding() {
//  if(food === apple) {
//    hunger + 1
//  } else if (food === fish) {
//    hunger + 1 
//  } else if (food === chocolate) {
//    happiness + 1
//  }
}
feeding()

function happyMeter () { 
if(hunger === 1)  {happiness -= 1}
if(hunger === 4)  {happiness += 1}
if(miniScore < 3) {happiness -= 2}
if(miniScore < 4) {happiness -= 1}
if(miniScore > 6) {happiness += 1}
if(miniScore > 9) {happiness += 2}
}
