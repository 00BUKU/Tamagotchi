const startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none"
    let gameVal = setInterval (()=>{
        eatVal.innerHTML--
        sleepVal.innerHTML--
        playVal.innerHTML--
        if (eatVal.innerHTML < 1 || sleepVal.innerHTML < 1 || playVal.innerHTML < 1){
            clearInterval(gameVal)
        }
    },2500)
});

const eatButton = document.querySelector("#eatBtn");

eatButton.addEventListener("click", () => {
    
})

const sleepButton = document.querySelector("#sleepBtn");

sleepButton.addEventListener("click", () => {
    
})
const playButton = document.querySelector("#playBtn");

    playButton.addEventListener("click", () => {
        
})


const eatVal = document.querySelector(".eatVal");

eatVal.addEventListener("click", () => {
    
})

const sleepVal = document.querySelector(".sleepVal");

sleepVal.addEventListener("click", () => {
    
})

const playVal = document.querySelector(".playVal");

playVal.addEventListener("click", () => {
    
})

let ageVal = document.querySelector("#ageVal");

ageVal.addEventListener("click" , () => {
    
})