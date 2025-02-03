import { useModalContext } from "../../Context/ModalContext";
import { useScore } from "../../Context/ScoreContext";

const NewGame = () => {
        const { setModalToggle } = useModalContext();
        const { setScore}= useScore()
   
    
    
  return (
    <div className='modal'>
      <div className="modal-body">
        <h2 className="">Are you Sure you want to Restart?</h2>
        <p className="warning">Note: current score would be lost</p>
        <div className="new-game-options">
            <button
            onClick={()=>{setModalToggle(false), setScore(0)}}
            className="restart">Yes</button>

            <button
            onClick={()=>{setModalToggle(false)}}
            className="close-button">No</button>
        </div>
      </div>
    </div>
  )
}

export default NewGame
