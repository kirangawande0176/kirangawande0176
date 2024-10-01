
let cash = document.getElementById('cash');

let resultValue=Number(localStorage.getItem("Money"));


const x =document.getElementById("dicerollingsound");
const y =document.getElementById("winner");
const z=document.getElementById("loss");
const pointAddsound=document.getElementById("pointAdd");
const pointLosssound=document.getElementById("pointLoss");
const gameMusic =document.getElementById("gameMusic");


function gameMusicplay(){
    gameMusic.play();
  }
  
  function lossSound(){
  z.play();
  }
  
  function winnerSound(){
    y.play();
  }
  
  function playAudio(){
      x.play();
  }
  
  function pointAdd(){
    pointAddsound.play();
  }
  
  function pointLoss(){
    pointLosssound.play();
  }
  




function startBtnClick(){
document.getElementById('Money').style.display="block";
document.getElementById('inputBet').style.display="block";
document.getElementById('startBtn').style.display="none";
document.getElementById('resultDeclare').style.display="none";
document.getElementById('Cash').innerHTML=5000;
resetBetvalue();
document.getElementById('betMoney').value=" ";
}

function startBtn(){
    let m = "Money"
    let money=5000;
    localStorage.setItem(m,money);
    console.log(money);
    gameMusicplay();
    document.getElementById('inputBet').style.display='none';
    document.getElementById('diceSum').style.display='none';
}


function resetBetvalue(){
    document.getElementById('betValue').innerHTML=0;
}



function gameOver(){
         document.getElementById('resultDeclare').style.display="block";
        document.getElementById("resultDeclare").innerHTML="Game Over!!!"
        document.getElementById('Cash').innerHTML=0;
        resetBetvalue();
        
        function startAgain(){
            document.getElementById('startBtn').style.display='block';
        }
        startAgain();
    }
    
    function startAgainbtn(){
   document.getElementById('inputBet').style.display='block';
   document.getElementById('startagianBtn').style.display='none';
   document.getElementById('diceSum').style.display='none';
   document.getElementById('greeting').style.display='none';
   document.getElementById('betMoney').value=" ";
   document.getElementById('betValue').innerHTML=0;
}

function addValue(){
    let Money=localStorage.getItem("Money");
    betamount=Number(document.getElementById("betMoney").value);
    if(betamount>Money || betamount<=0){
        alert("Please enter a valid value");
    }else{
           bet=Money-Number(betamount);
   console.log(bet);
   localStorage.setItem("Money",bet);
   document.getElementById('Cash').innerHTML=bet;
   document.getElementById('betValue').innerHTML=betamount;

   document.getElementById('inputBet').style.display="none";
   document.getElementById('betSelectbtns').style.display="block";
  
    }
}

function creditValue(){
    let Money=localStorage.getItem("Money");
    betamount= document.getElementById("betMoney").value;
    bet=Number(Money)+Number(betamount)*2;  
    document.getElementById('Cash').innerHTML=bet;
    localStorage.setItem("Money",bet);
    if(bet>=10000){
        winnerSound();
        document.getElementById('startagianBtn').style.display='none';
        document.getElementById("startBtn").style.display="block";
        document.getElementById("resultDeclare").style.display="block";
        document.getElementById("resultDeclare").setAttribute("class","text-success fw-bold fs-1 rounded-4 bg-white")
        document.getElementById('resultDeclare').innerHTML="You Win 😁"
} else{
    let result= Number(localStorage.getItem("Money"));
    console.log("You Have = "+ result + " Money");
    document.getElementById('startagianBtn').style.display='block';
    pointAdd();
    resetBetvalue();
}
}


function correctGuess(){
    let result= Number(localStorage.getItem("Money"));
  
creditValue();
}


function wrongGuess(){
    let result= Number(localStorage.getItem("Money"));
    if(result==0){
        lossSound();
       document.getElementById("startBtn").style.display="block";
       document.getElementById("resultDeclare").style.display="block";
       document.getElementById("resultDeclare").setAttribute("class","text-danger fw-bold fs-1 ")
       document.getElementById('resultDeclare').innerHTML="You Lost !!!!";

       
    } else{
        document.getElementById('greeting').innerHTML="Wrong Guess :) Please try again";
        document.getElementById('greeting').style.display="block";
        let result= Number(localStorage.getItem("Money"));
        console.log("You Have = "+ result+ " Money");
        document.getElementById('startagianBtn').style.display='block';
        pointLoss()
    }
}

function sevenPlus(){
   let sevenP = btnValue.innerText=1;
    guessingSumvalue();

}
function sevenE(){
   let sevenP = btnValue.innerText=2;

    guessingSumvalue();
    
}
function sevenLess(){
   let sevenP = btnValue.innerText=3;
 
    guessingSumvalue();
}






   
    function guessingSumvalue(){
        x.play();
        document.getElementById('betSelectbtns').style.display="none";
        document.getElementById('rollingDices').style.display="block";
        setTimeout(hiddingDices,3500);
        function hiddingDices(){
            document.getElementById('rollingDices').style.display="none";

            playDicegame();
        }
    }

 
           
    function playDicegame(){


        let Money=localStorage.getItem("Money");
        betamount= document.getElementById("betMoney").value;
        bet=Number(Money)+Number(betamount)*2;  
       

        let Dice =Math.floor(Math.random()* (12 - 2) + 2 );
        console.log(Dice);
        document.getElementById('diceSum').innerHTML= "Sum of 2 Dices = "+Dice;
        document.getElementById('diceSum').style.display="block";
        let btnValue= document.getElementById("btnValue").innerText;
    
        let result= Number(localStorage.getItem("Money"));
        
        if(btnValue==1 && Dice>7){
            correctGuess();       
        }
        else if(btnValue==2 && Dice===7){
            correctGuess();      
            
        }
        else if(btnValue==3 && Dice<7){
            correctGuess();
        }else {
            wrongGuess();
        }
       

    }