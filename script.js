let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn =  document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
    
];

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
 }


boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        
        
        if (turnO){
            box.innerText = "O";
            turnO = false;

        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = "true"
        checkWinner();
    });
});

const disableBoxes = ()=>{
 for (let box of boxes){
    box.disabled = true;
 }
}

const enableBoxes = ()=>{
    for (let box of boxes){
       box.disabled = false;
       box.innerText = "";
    }
   }



  const showWinner = (winner)=>{
    msg.innerText = `Congratulations, winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes();
  }


  const checkWinner = ()=>{
    for (let pattern of  winPatterns){
      
     let post1Val   =      boxes[pattern[0]].innerText;
     let post2Val   =    boxes[pattern[1]].innerText; 
     let post3Val   =    boxes[pattern[2]].innerText;
      if (post1Val != "" && post2Val != "" && post3Val != "" ){
        if(post1Val=== post2Val && post2Val===post3Val);
       
        showWinner(post1Val);
          }
    }
 };

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);














