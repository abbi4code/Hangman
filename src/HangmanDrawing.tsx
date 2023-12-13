import image0 from "./images/hangman-0.svg"
import image1 from "./images/hangman-1.svg"
import image2 from "./images/hangman-2.svg"
import image3 from "./images/hangman-3.svg"
import image4 from "./images/hangman-4.svg"
import image5 from "./images/hangman-5.svg"
import image6 from "./images/hangman-6.svg"

type HangmanDrawingProps ={
    noofguesses: number;
}

const images = [image0, image1, image2, image3, image4, image5, image6]
export default function HangmanDrawing({noofguesses} :
HangmanDrawingProps){
    return(
        <>
        {images.slice(0, noofguesses)}
        <div className="Hangmanimg">
            <img src={images[noofguesses]} alt="" />
        </div>

        </>
    )
}