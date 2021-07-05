//Variables------------------Variables---------------------Variables\\
let happiness, hunger, winStatus, timer, petName, 

//Constants------------------Constants---------------------Constants\\
const food = [apple,fish, chocolate ]

//Cached Elements------------Cached Elements---------------Cached Elements\\
const musicBtn = document.getElementById('bgmusic')
const messageEl = document.getElementById('message')
const restartBtn = document.getElementById('restart')
//Event Listeners------------Event Listeners---------------Event Listeners\\
 restartBtn.addEventListener('click', init)
 musicBtn.addEventListener('click', music)

//Functions------------------Functions---------------------Functions\\
//Initializes the game
 function init() {
  winStatus = false
  happiness = 2
  hunger = 2
  render()
}

 function render() {
  if (gauge === 1) {
    messageEl.innerText = `${PetName} is STARVING!!!`
    } else if (gauge === 2) {
      messageEl.innerText = `${PetName} is hungry.`
    } else if (gauge === 3) {
      messageEl.innerText = `${PetName} is not hungry right now.`
    } else {
     messageEl.innerText = `${PetName} is full and dosen't want to eat.`
    }
}
 
function hungerGauge(gauge) {
  
}

function happyMeter (meter) {
if(hungerGauge === 1) {meter -= 1}
if(hungerGauge === 4) {meter += 1}
if(miniScore < 3) {meter -= 2}
if(miniScore < 4) {meter -= 1}
if(miniScore > 6) {meter += 1}
if(miniScore > 9) {meter += 2}
}
