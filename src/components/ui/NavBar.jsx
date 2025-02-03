import { useModalContext } from "../../Context/ModalContext";
import { useModalComponentContext } from "../../Context/ModelComponentContext";
import { useScore } from "../../Context/ScoreContext"
import NewGame from "../modals/NewGame"

const NavBar = () => {
  const {score, highscore}= useScore() 
  const { setModal } = useModalComponentContext();
  const { setModalToggle } = useModalContext();
        

        const handleClick =()=>{
          setModalToggle(true)
          setModal(<NewGame/>)
          console.log('i am here')
        }
    
  return (
      <nav className='navbar'>
        <div className="nav-left">
            <p data-testid="gameInstructions" className="game-instructions"><span>INSTRUCTION: </span>From the 6 options, <br/> select the exact color match as color of the box </p>
        </div>

        <div className="nav-right">
            <div className='score-card'>
                <p className="score-heading">Score:</p>
                <p data-testid="score" className='score'>{score}</p>
            </div>

            <div className="score-card">
              <p className="score-heading">High Score:</p>
              <p data-testid="score" className='score'>{highscore}</p>
            </div>

            <div className="">
                <button  
                onClick={()=> handleClick()} 
                data-testid="newGameButton" 
              > New Game </button>
            </div>
        </div>
      </nav>
  )
}

export default NavBar
