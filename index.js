let blocks=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newBtn=document.querySelector(".new-btn");
let player = document.getElementById("player");
player.innerHTML="Turn: Player 1";


let turnO=true;

let entry=0;

const winningPatterns=[
    [0,1,2],  
    [3,4,5],
    [6,7,8],  
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

blocks.forEach((block)=>
{
    block.addEventListener("click",()=>
    {
        if(turnO)
        {
            block.innerText='O';
            turnO=false;
            player.innerHTML="Turn: Player 2";
        }
        else
        {
            block.innerText="X";
            turnO=true;
            player.innerHTML="Turn: Player 1";
        }
        block.disabled=true;
        entry++;
        let winner=checkWinner();
        if(entry === 9 && !winner)
        {
            gameDraw();
        }
    });
});

const checkWinner=()=>
{
    for(let pattern of winningPatterns)
    {
        let pos1=blocks[pattern[0]].innerText;
        let pos2=blocks[pattern[1]].innerText;
        let pos3=blocks[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {

                showWinner(pos3);
                return true;
            }
        }
    }
}

const gameDraw = () => 
{
    player.innerHTML = `It's a draw!!!`;
    disableboxes();
};


const showWinner = (winner) => {
    let winningPlayer;

    if(winner === 'O')
    {
        winningPlayer = "Player 1";
    }
    else
    {
        winningPlayer = "Player 2"; 
    }
    
    player.innerText = `Congratulations, Winner is ${winningPlayer}`;
    
    disableboxes();
};

const disableboxes=()=>
{
    for(let box of blocks)
    {
        box.disabled=true;
    }
}

const resetGame=()=>
{
    turnO=true;
    entry=0;
    player.innerHTML="Turn: Player 1";
    enableboxes();
}

const enableboxes=()=>
{
    for(let box of blocks)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const newGame=()=>
{
        turnO=true;
        entry=0;
        player.innerHTML="Turn: Player 1";
        enableboxes();
}

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",newGame);
