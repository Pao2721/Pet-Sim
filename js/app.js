//Variables------------------Variables---------------------Variables\\
let happiness = 2
let maxHappiness = 10
let hunger = 1
let maxHunger = 4
let winStatus = false 
let petName  = "Don Dotmarco"

//Constants------------------Constants---------------------Constants\\


//Cached Elements------------Cached Elements---------------Cached Elements\\
//const musicBtn = document.getElementById("bgmusic")
const messageEl = document.getElementById("message")
const restartBtn = document.getElementById("restart")
const foodBtn = document.getElementById("feed")
const miniGame = document.getElementById("minigame")
//Event Listeners------------Event Listeners---------------Event Listeners\\
 restartBtn.addEventListener("click", init)
 //musicBtn.addEventListener('click')

 foodBtn.addEventListener("click",(e) =>  {
   hunger = hunger + 1, render()
})
//miniGame.addEventListener("click", )


/*Functions------------------Functions---------------------Functions*/
//Initializes the game
init()


function init() {
  winStatus = false
  happiness = 0
  
  render()
}

 function render() {
  
  if (hunger === 1) {
    messageEl.innerText = `Don Dotmarco is STARVING!!!`
    } else if (hunger === 2) {
      messageEl.innerText = `Don Dotmarco is hungry.`
    } else if (hunger === 3) {
      messageEl.innerText = `Don Dotmarco is not hungry right now.`
    } else {
     messageEl.innerText = `Don Dotmarco is full and dosen't want to eat.`
    }

  //if(hunger === 4)
}
 

function happyMeter () { 
  if(hunger === 1)  {happiness -= 1}
  if(hunger === 4)  {happiness += 1}
  if(miniScore < 3) {happiness -= 2}
  if(miniScore < 4) {happiness -= 1}
  if(miniScore > 6) {happiness += 1}
  if(miniScore > 9) {happiness += 2}
}




/*To do's
  -restart button
  -minigame & minigame button
  -background art(optional)
  -
*/