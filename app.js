let boxes=document.querySelectorAll('.box')
let resetbtn=document.querySelector('.btn')
let msgCont=document.querySelector('.msg-container')
let newgame=document.querySelector(".new-btn")
let msg=document.querySelector('.msg')

let turnO=true;

const winnPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
//////////////////////////////////
const disBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
////////////////////////////
const enaBoxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText = '';
    }
}
//////////////////////////////////
const resetGame=()=>{
    turnO=true
     enaBoxes()
     msgCont.classList.add("hide");
}
///////////////////////////////
boxes.forEach((box) => {
    box.addEventListener('click', () => {
       
        if(turnO===true){
            box.innerText='O'
            turnO=false
            
        }
        else{
            box.innerText='X' 
            turnO=true
        }
        box.disabled=true
        checkWinner()
    })
})

///////////////////////////

const  showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`
    msgCont.classList.remove('hide')
    
}
/////////////////////////
const checkWinner=()=>{
    for (let pattern of winnPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

       if(pos1!='' && pos2!='' && pos3!=''){
        if(pos1===pos2 && pos2===pos3){
         disBoxes()
         showWinner(pos1)
     
        }
       }

    }
}

////////////////
let new8=newgame.addEventListener('click',resetGame)
resetbtn.addEventListener('click',resetGame)