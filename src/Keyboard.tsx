import "./keyboard.css"
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
    activeletters: string[]
    inactiveletters: string[]
    addguessedletter: (letter: string) => void
}

export default function Keyboard({activeletters, inactiveletters, addguessedletter} : KeyboardProps){
    return(
        <>
        {/* <h4 className="hinttext"> Hint: <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quos neque? Et.</b></h4> */}
        <h4 className="guessestext"> Incorrect guesses: <b>0 / 6</b></h4>
        <div className="keyboard">
            
            {KEYS.map(key => {
                return (
                    <button onClick={()=> addguessedletter(key)} key={key}>{key}</button>
                )
            })}
        </div>

        </>
    )
}