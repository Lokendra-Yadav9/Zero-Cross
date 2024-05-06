console.log("welcome to the tic tac toe game!");

const start = document.getElementById("start");
const reset = document.getElementById("reset");
let Game_turn = new Audio("game-turn.wav");
let click_game = new Audio("click-game.wav");
let click_game2 = new Audio("click-game2.wav");
let Gamme_win = new Audio("game-win.wav");
let gameOver = false;
let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const checkWin = () => {
    let tics = document.getElementsByClassName("tic");
    let win = [
        [0, 1, 2, 0, 10, 0],
        [3, 4, 5, 0,32 , 0],
        [6, 7, 8, 0, 54, 0],
        [0, 3, 6, -10, 32, 90],
        [1, 4, 7, 0, 32, 90],
        [2, 5, 8, 10, 32, 90],
        [0, 4, 8, 0, 32, 45],
        [2, 4, 6, 0, 32, 135]
    ]

    win.forEach(e => {
        if ((tics[e[0]].innerText === tics[e[1]].innerText) && (tics[e[1]].innerText === tics[e[2]].innerText) && tics[e[0]].innerText !== '') {
            document.querySelector(".turns").innerText = "congratulation is " + tics[e[0]].innerText + " won";
            gameOver = true;
            document.querySelector("#imgs").childNodes[1].style.width = "200px";
            Gamme_win.play();
            document.getElementById("line").style.width=`30vw`
            document.getElementById("line").style.backgroundColor=`rgb(${Math.floor(Math.random()*250)},${Math.floor(Math.random()*250)},${Math.floor(Math.random()*250)})`
            document.getElementById("line").style.transform=`translate(${e[3]}vw,${e[4]}vh ) rotate( ${e[5]}deg)`
        }

    })
}
let tick = document.getElementsByClassName("tick");
Array.from(tick).forEach(element => {
    const tic = element.querySelector(".tic");
    element.addEventListener("click", () => {
        start.classList.remove("animate");
        if (tic.innerText === "") {
            tic.innerText = turn;
            turn = changeTurn();
            tic.style.color=`rgb(${Math.floor(Math.random()*260)},${Math.floor(Math.random()*260)},${Math.floor(Math.random()*260)})`
            Game_turn.play();
            checkWin();
            if (!gameOver) {
                document.querySelector(".turns").innerHTML = "turn for " + turn;
            }
        }
    })
    reset.addEventListener("click", () => {
        tic.innerText = "";
        click_game2.play();
        document.querySelector(".turns").innerHTML = "game is reset";
        document.querySelector("#imgs").childNodes[1].style.width = "0";
        document.getElementById("line").style.width=`0vw`
        const startQuery = setTimeout(() => {
            document.querySelector(".turns").innerHTML = "Click start for play";
            start.classList.add("animate");
            start.addEventListener("animationstart", () => {
            })
        }, 1000)
        startQuery;
    })
})


start.addEventListener("click", () => {
    start.classList.remove("animate");
    let tick = document.getElementsByClassName("tick");
    Array.from(tick).forEach(element => {
        const tic = element.querySelector(".tic");
        tic.innerText = "";
        let turn = "X";
        document.getElementById("line").style.width=`0vw`
        document.querySelector(".turns").innerHTML = "turn for " + turn;
        document.querySelector("#imgs").childNodes[1].style.width = "0";
    }
    )
})
