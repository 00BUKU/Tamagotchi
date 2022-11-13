const startBtn = document.querySelector("#startBtn");

const eatVal = document.querySelector(".eatVal");

const sleepVal = document.querySelector(".sleepVal");

const playVal = document.querySelector(".playVal");

let ageVal = document.querySelector("#ageVal");

const eatButton = document.querySelector("#eatBtn");

const sleepButton = document.querySelector("#sleepBtn");

const playButton = document.querySelector("#playBtn");

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none"

    let ageValue = setInterval (()=>{
        ageVal.innerHTML++
    },10000);

    let gameVal = setInterval (()=>{
        eatVal.innerHTML--
        sleepVal.innerHTML--
        playVal.innerHTML--
        if (eatVal.innerHTML < 1 || sleepVal.innerHTML < 1 || playVal.innerHTML < 1){
            clearInterval(gameVal)
            gameOver.style.display = "inline"


        }
    },2500)
});


eatButton.addEventListener("click", () => {
    if (eatVal.innerHTML < 10){
        eatVal.innerHTML++
    }
})


sleepButton.addEventListener("click", () => {
    if (sleepVal.innerHTML < 10){
        sleepVal.innerHTML++
    }
})

    playButton.addEventListener("click", () => {
        if (playVal.innerHTML < 10){
            playVal.innerHTML++
        }
})
