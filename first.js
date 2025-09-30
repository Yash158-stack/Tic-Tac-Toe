let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset-button");
let new_button = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let body = document.querySelectorAll("body");



let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){ //player O
            box.innerText = "O";
            turnO = false;

        }
        else{   //player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
     for(let pattern of winPatterns){
        
            let posval1 = boxes[pattern[0]].innerText;
            let posval2 = boxes[pattern[1]].innerText;
            let posval3 = boxes[pattern[2]].innerText;
        
            if(posval1 != "" && posval2 != "" && posval3 != "") {
                if(posval1 == posval2 && posval2 == posval3){
                    showWinner(posval1);
                }  
            }
     }
};

new_button.addEventListener("click",resetGame);

reset_button.addEventListener("click",resetGame);
