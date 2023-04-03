// Initilization 

const btnRef = document.querySelectorAll(".btn")
const restartBtn = document.querySelector(".restart")
const main = document.querySelector(".main-box")
const resannounce = document.querySelector(".res-announce")

let winning = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],

]


let count = 0;
let xturn = true;

// All Function 

const enable = () => {
    btnRef.forEach((Element) => {
        Element.disabled = false;
        Element.innerHTML = "";

    })
    resannounce.innerHTML = ""
    main.removeAttribute("id")
    restartBtn.innerHTML = "Restart"
    count = 0;
    xturn = true
}

const draw = () => {
    main.setAttribute("id", "result")
    resannounce.innerHTML = "Match DRAW!"
    restartBtn.innerHTML = "Play Again"


}

const winner = (Letter) => {
    if (Letter == "X") {
        main.setAttribute("id", "result")
        resannounce.innerHTML = "X Wins!"
        restartBtn.innerHTML = "Play Again"
    }
    else if (Letter == "O") {
        main.setAttribute("id", "result")
        resannounce.innerHTML = "O Wins!"
        restartBtn.innerHTML = "Play Again"
    }
}

let win = () => {
    for (let i of winning) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerHTML,
            btnRef[i[1]].innerHTML,
            btnRef[i[2]].innerHTML,

        ]
        if (element1 != "" && (element2 != "") && (element3 != "")) {
            if (element1 == element2 && element2 == element3) {
                winner(element1);
            }
        }
    }
}


// play button...............

btnRef.forEach((Element) => {
    Element.addEventListener("click", function () {
        if (xturn == true) {
            xturn = false;
            Element.innerHTML = "X";
            Element.disabled = true;
            count = count + 1;
        }
        else {
            xturn = true;
            Element.innerHTML = "O";
            Element.disabled = true;
            count = count + 1;
        }
        if (count >= 9) {
            draw()
        }
        win()
    })
})
// When restart button pressed......
restartBtn.addEventListener("click", () => {
    enable()
})

