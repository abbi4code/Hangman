type HangmanDrawingProps = {
  guessedletters: string[]
  wordtoguess: string
}

import "./App.css"
export default function HangmanWord({guessedletters, wordtoguess} : HangmanDrawingProps){
    
    return (
      <>
        <div
          style={{
            display: "flex",
            gap: ".25rem",
            fontSize: "6rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          {wordtoguess.split("").map((letter, index) => (
            <span style={{ borderBottom: ".1rem solid black" }}>
              <span style={{
                visibility: guessedletters.includes(letter) ? "visible" : "hidden"
              }}>{letter}</span>
            </span>
          ))}
        </div>
      </>
    );
}