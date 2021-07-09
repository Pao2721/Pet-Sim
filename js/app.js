//------------------Variables---------------------\\
//The Dots starting stats
let happiness = 2
let hunger = 2



//------------Cached Elements---------------\\
const Ignore = document.getElementById("ignore")
const header = document.querySelector("h1")
const messageEl = document.getElementById("message")
const restartBtn = document.getElementById("restart")
const foodBtn = document.getElementById("feed")
const Play = document.getElementById("play")
const Dotta = document.getElementById("dotty")

//------------Event Listeners---------------\\
//Dictates what happens in the game when clicked
 restartBtn.addEventListener("click", reInit)
 //musicBtn.addEventListener('click')
 foodBtn.addEventListener("click",(e) =>  {
   hunger = hunger + 2, 
   happiness = happiness + 1,
   Init()
})
 Play.addEventListener("click",(e) => {
   hunger = hunger - 1,
   happiness = happiness + 1, 
   Init()
 })

 Ignore.addEventListener("click",(e) => {
  hunger = hunger - 1,
  happiness = happiness - 2, 
  Init()
})

/*Functions------------------Functions---------------------Functions*/
//Initializes the game
Init()




 function Init() {
  //Changes properties of the dot depending on hunger & happiness
  if (hunger === 1) {
    messageEl.innerText = "Don Dotmarco is STARVING!!!"
    Dotta.style.backgroundColor = "crimson"
    
  } else if (hunger === 2) {
      messageEl.innerText = "Don Dotmarco is hungry."
      Dotta.style.backgroundColor = "orange"
    } else if (hunger === 3) {
      messageEl.innerText = "Don Dotmarco is not hungry right now."
      Dotta.style.backgroundColor = "purple"
    } else {
     messageEl.innerText = "Don Dotmarco is full and dosen't want to eat."
     Dotta.style.backgroundColor = "blue"
    } 

    if (hunger === 1 && happiness === 2) {
      messageEl.innerText = "Don Dotmarco is STARVING!!!"
      Dotta.style.backgroundColor = "rgb(223,85,113)"
      
    } else if (hunger === 2 && happiness === 3) {
        messageEl.innerText = "Don Dotmarco is hungry."
        Dotta.style.backgroundColor = "rgb(228,179,89)"
      } else if (hunger === 3 && happiness === 4) {
        messageEl.innerText = "Don Dotmarco is not hungry right now."
        Dotta.style.backgroundColor = "rgb(156,15,156)"
      } else if(hunger === 4 && happiness === 5)  {
       messageEl.innerText = "Don Dotmarco is full and dosen't want to eat."
       Dotta.style.backgroundColor = "rgb(65,65,204)"
      } 
      //Sets Win Coondition
  if(hunger === 4 && happiness === 6) {
      messageEl.innerText = "You've lived to dot another day."
      header.innerText = "You Won!!"
    }
     //Sets Loss Conditions
  if(hunger === 0) {
      messageEl.innerText = "You somehow managed to kill a dot. Congratulations???"
      header.innerText = "(you lost)"
      Dotta.style.width = 0
    }

  if(happiness === 0) {
      messageEl.innerText = "Don Dotmarco has left the building."
       header.innerText = "That's All Folks!!!"
       Dotta.style.width = 0
    }
  
}
 


function happyMeter () { 
  if(hunger === 1)  {happiness = happiness - 1}
  if(hunger === 4)  {happiness = happiness + 1}
 
  Init()
}

function reInit () {
   window.location.reload()
}


