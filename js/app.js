//Variables------------------Variables---------------------Variables\\
let happiness = 4
let hunger = 1
let winStatus = false 
let petName  = "Don Dotmarco"

//Constants------------------Constants---------------------Constants\\


//Cached Elements------------Cached Elements---------------Cached Elements\\
//const musicBtn = document.getElementById("bgmusic")

const header = document.querySelector("h1")
const messageEl = document.getElementById("message")
const restartBtn = document.getElementById("restart")
const foodBtn = document.getElementById("feed")
const miniGame = document.getElementById("minigame")
const Dotta = document.getElementById("dotty")

//Event Listeners------------Event Listeners---------------Event Listeners\\
 restartBtn.addEventListener("click", init)
 //musicBtn.addEventListener('click')

 foodBtn.addEventListener("click",(e) =>  {
   hunger = hunger + 1, render()
})
//miniGame.addEventListener("click", (e) => {
// hunger = hunger -1, minigame()
// })
// 
// 
/*----------Animation----------*/ 










/*Functions------------------Functions---------------------Functions*/
//Initializes the game
init()


function init() {
  winStatus = null
  
  
  render()
}

 function render() {
  
  if (hunger === 1) {
    messageEl.innerText = `Don Dotmarco is STARVING!!!`
    } else if (hunger === 2) {
      messageEl.innerText = `Don Dotmarco is hungry.`
      Dotta.style.backgroundColor = "orange"
    } else if (hunger === 3) {
      messageEl.innerText = "Don Dotmarco is not hungry right now."
      Dotta.style.backgroundColor = "purple"
    } else {
     messageEl.innerText = "Don Dotmarco is full and dosen't want to eat."
     Dotta.style.backgroundColor = "blue"
    }
  
    if(hunger === 4 && happiness === 6) {
      messageEl.innerText = `You've lived to dot another day`
      header.innerText = `You Won!!`
    }

    if(hunger === 0) {
      messageEl.innerText = `You somehow managed to kill a dot. Congratulations???`
      header.innerText = `(you lost)`
    }

    if(happiness === 0) {
      messageEl.innerText = `Don Dotmarco has left the building.`
       header.innerText = `That's All Folks!!!`
    }
  
}
 


function happyMeter () { 
  if(hunger === 1)  {happiness -= 1}
  if(hunger === 4)  {happiness += 1}
  if(miniScore < 3) {happiness -= 2}
  if(miniScore < 4) {happiness -= 1}
  if(miniScore > 6) {happiness += 1}
  if(miniScore > 9) {happiness += 2}

  render()
}




/*To do's
  -restart button
  -minigame & minigame button
  -background art(optional)
  -
*/