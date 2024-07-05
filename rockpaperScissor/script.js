let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =() =>{
//rock paper scissors
let options =["rock","paper","scissors"];
 let randIdx = Math.floor(Math.random()*3);
 return options[randIdx];
}

const drawGame = () => {
   // console.log("game was draw");
    msg.innerText = "Game was draw.";
    msg.style.backgroundColor = "";
    //document.msg.style.backgroundColor = "yellow";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        //console.log("you win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
       msg.style.backgroundColor = "green";
        //document.msg.style.backgroundColor = "green";
    } else {
        //console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! Computer's ${compChoice} beats ${userChoice}.`;
        msg.style.backgroundColor = "red";
        //document.msg.style.backgroundColor = "red";
    }
}

const playGame =(userChoice)=>{
    console.log("userChoice = ",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //Drawgame
        drawGame();
   } else {
    let userWin = true;
    if(userChoice === "rock"){
    //scissors ,paper
        userWin = compChoice === "paper" ? false :true;
   } else if(userChoice === "paper"){
    // scisors ,rock
    userWin = compChoice === "scissors" ? false :true;
   } else {
    //rock,paper
   userWin = compChoice === "rock" ? false :true;
   }
   showWinner(userWin,userChoice,compChoice);

   }
}


choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        //console.log("choice was clicked", userChoice );
        playGame(userChoice);
    })
});


