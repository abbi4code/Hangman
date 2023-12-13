
import { useCallback, useEffect, useState } from 'react'
import './App.css'
import words from "./wordList.json"
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import Keyboard from './Keyboard'

// import nxtwords from "./word-list"



export default function App(){

  const [wordtoguess, setWordtoguess] = useState(()=>{
    return words[Math.floor(Math.random()*words.length)]
  })

  const [guessedletters,setguessedletters] = useState<string[]>(["g","g"])

  const incorrectletters = guessedletters.filter(
    letter => !wordtoguess.includes(letter)
  )
  // this will simply give the no of letter what we guessed and is not inclueded in the word
  const addguessedletter= useCallback((letter: string) => {
    if (guessedletters.includes(letter)) return;

    setguessedletters((currentletters) => [...currentletters, letter]);

  }, [guessedletters])
  
  
  
  useEffect(() =>{
    const handler = (e: KeyboardEvent) => {
      const key= e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addguessedletter(key)
    }

    document.addEventListener("keypress", handler)

    return()=>{
      document.removeEventListener("keypress", handler)
    }
  }, [guessedletters])

  return (
    <>
      <div className="maincontainer">
        <HangmanDrawing noofguesses={incorrectletters.length} />
        <div className="subcontainer">
          <HangmanWord guessedletters={guessedletters} wordtoguess={wordtoguess}/>
          <Keyboard />
        </div>
      </div>
    </>
  );
}