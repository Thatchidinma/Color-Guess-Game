import { useState } from "react"
import checkRight from '../assets/greenCheck.png'
import checkWrong from '../assets/redCheck.png'
import { generateRandomColor } from "../actions/GenerateColors"
import { generateColorOptions } from "../actions/GenerateOptions"
import { useScore } from "../Context/ScoreContext"
import { useModalComponentContext } from "../Context/ModelComponentContext"
import GameOver from "./modals/GameOver"
import { useModalContext } from "../Context/ModalContext"


const GameCard = () => {
    const [correctColor, setCorrectColor] = useState(generateRandomColor())
    const [options, setOptions] = useState(generateColorOptions(correctColor))
    const {score, setScore, highscore, setHighscore}= useScore()
    const [correct, setCorrect] = useState(null)
    const [statusClass, setStatusClass] = useState(null)
    const [clickedColor, setClickedColor] = useState(null);  
    const { setModal } = useModalComponentContext();
    const { setModalToggle } = useModalContext();


    // function to handle checking of the guess
   function handleGuess(guess){
    setClickedColor(guess)
    if (guess === correctColor){
        setCorrect(true)
        let Score = score + 1
        setScore(Score)
        setStatusClass('update-status')
    }else{
        setCorrect(false)
        setStatusClass('update-status')
        if (score > highscore){
            setHighscore(score)
            localStorage.setItem('highscore', score)
        }
        setScore(0)
        setModalToggle(true)
       
    }

    setTimeout(() => {
        setModal(<GameOver/>)
        const newColor = generateRandomColor()
        setCorrectColor(newColor)
        setOptions(generateColorOptions(newColor))
        setStatusClass('')
    }, 1000);

   }

  return (   
    <main className='game-card'>
        {/* ----------- Color Box ----------------- */}
        <div className="color-box" data-testid="colorBox" style={{backgroundColor: `${correctColor}`}} ></div>

        {/* -----------Color Options ---------------- */}
        <div className="color-options">
        {
            options.map(color => {
                return(
                    <button
                     key={color}
                     onClick={()=> handleGuess(color)}
                     data-testid="colorOption"
                    style={{backgroundColor: color }}>
                        <img data-testid="gameStatus" className={`status ${ clickedColor === color ? statusClass : ''}`}  src={correct ? checkRight : checkWrong} alt="check" />
                    </button>
                )
            })
        }
        </div>
    </main>
  )
}

export default GameCard
