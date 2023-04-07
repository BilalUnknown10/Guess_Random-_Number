let computerGuess;
let userGuess = []; 
let userNumberUpdate = document.getElementById('text_output');
const inputValue = document.getElementById('inputBox');


const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    // console.log(computerGuess);
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('newGameButton').style.display = 'none';

};

const startGame = () => {
     document.getElementById('welcomeScreen').style.display = 'none';
     document.getElementById('gameArea').style.display = 'block';
};

const startNewGame = () => {
    window.location.reload();
};
 

const compareGuess = () => {
    const userNumber = Number(document.getElementById('inputBox').value);
    // console.log(userNumber);
    userGuess = [...userGuess, userNumber];
    document.getElementById('p_guess').innerHTML = userGuess;

    // check the value low or high....
 if (userGuess.length < maxGuess) {  
    if(userNumber > computerGuess){
        userNumberUpdate.innerHTML = 'Your Guess is High....';
        inputValue.value = '';
    }else if(userNumber < computerGuess){
        userNumberUpdate.innerHTML = 'Your Guess is Low...';
        inputValue.value = '';
    }else{
         userNumberUpdate.innerHTML = 'It`s Correct...';
         inputValue.value = '';
         document.getElementById('newGameButton').style.display = 'block';
         inputValue.setAttribute('disabled', true);
    };
}else{
    if(userNumber > computerGuess){
         document.getElementById('newGameButton').style.display = 'block';
        userNumberUpdate.innerHTML = `You Lose The Game and Your Correct Number Was ${computerGuess}`;
        inputValue.value = '';
        inputValue.setAttribute('disabled', true);
    }else if(userNumber < computerGuess){
        document.getElementById('newGameButton').style.display = 'block';
        userNumberUpdate.innerHTML = `You Lose The Game and Your Correct Number Was ${computerGuess}`;
        inputValue.value = '';
        inputValue.setAttribute('disabled', true);
    }else{
        document.getElementById('newGameButton').style.display = 'block';
         userNumberUpdate.innerHTML = 'It`s Correct...';
         inputValue.value = '';
         inputValue.setAttribute('disabled', true);
    };
}

    document.getElementById('attempts').innerHTML = userGuess.length;

};


const easyMode = () => {
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
     maxGuess = 5;
    startGame();
};
