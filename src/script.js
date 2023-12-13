const hangmanImage = document.querySelector(".hangman-box img")
const keyboardDiv = document.querySelector(".keyboard")
const wordDisplay = document.querySelector(".word-display")
const guessesText = document.querySelector(".guesses-text b")
const gameModal = document.querySelector(".game-modal")

let currentWord,correctLetters = [] ,wrongGuessCount = 0;
const maxGuesses = 6;


//selecting random word and hint from the wordlist
const getRandomWord = () =>{
    const { word, hint } = wordList[Math.floor(Math.random()*wordList.length)]
    console.log(word, hint);
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
    //this will send the right clicked letter to its correct place 
}


const gameOver = (isVictory) => {
    setTimeout(() => {
        gameModal.classList.add("show")

    }, 300)
}
const initGame = (btn, clickedLetter) => {
    if(currentWord.includes(clickedLetter)){
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter){
                correctLetters.push(letter)
                wordDisplay.querySelectorAll("li")[index].innerText= letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed")
                //this will add new class to li ie guessed
            }
        })
    }else{
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    btn.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    // you need to set wrongguesscount not exceed the maxguesses

    if(wrongGuessCount === maxGuesses) return gameOver(false)
    if(correctLetters.length === currentWord.length) return gameOver(true)
}
// creating keyboard btns and adding event listeners
for (let i = 97; i <= 122; i++) {
    const btn = document.createElement("button")
    btn.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(btn);
    btn.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
    
}
getRandomWord();

