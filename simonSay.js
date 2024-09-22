let userSeq=[];
let gameSeq=[];
let colors=["red","yellow","green","blue"]

let started=false;
let level=0;
let count =0;
let h2=document.querySelector('h2');

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game stared")
        started=true;

        levelUp();
    }
    
});

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function userFlashbtn(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },200)
}

 function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`
    let randIdx=Math.floor(Math.random()*3)
    let randColor=colors[randIdx]
    let className=document.querySelector(`.${randColor}`)
    // console.log("randIdx ",randIdx)
    // console.log("randColor ", randColor)
    // console.log("className ", className)
    gameSeq.push(randColor)
    console.log(gameSeq)
    btnFlash(className)

}
function highScores( prev,count){
    if(prev<=count){
        return count;
    }
    else{
        return prev
    }
}

function checkLevel(Idx){
    // console.log("Current level is",level)
    if(userSeq[Idx]===gameSeq[Idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        
        }
    }
        else{
            count
            let prev
            h2.innerText=`Game over and you're score is ${level} press any key to restart`
            prev=count;
           count=level;
           let highScore=document.createElement('h3');
           let score=highScores(prev,count);
           highScore.innerText=(`You're high Score is ${score}`)
           h2.appendChild(highScore)

            bodycolor();
           reset();
        }
    
}

function bodycolor(){
    let body=document.querySelector("body")
    body.classList.add("bodyColor")
    setTimeout(function(){
        body.classList.remove("bodyColor")
    },100)
}

 function btnpress(){
    let btns=this;
    // console.log(btns)
    userFlashbtn(btns);
    let userColor=btns.getAttribute("id")
    // console.log(userColor)
    userSeq.push(userColor)

    checkLevel(userSeq.length-1);
 }
 
 let allbtn=document.querySelectorAll(".btn")

 for(btn of allbtn){
    btn.addEventListener("click",btnpress);
 }
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    
}

