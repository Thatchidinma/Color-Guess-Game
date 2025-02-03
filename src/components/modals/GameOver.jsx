import { useModalContext } from "../../Context/ModalContext";

const GameOver = () => {
        const { setModalToggle } = useModalContext();
    
  return (
    <div className='modal'>
      <div className="modal-body">
        <button 
        onClick={()=>{setModalToggle(false)}}
        className="close-button">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
                >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 00-1.414-1.414L10 8.586 4.707 3.293a1 1 0 00-1.414 1.414L8.586 10l-5.293 5.293a1 1 0 101.414 1.414L10 11.414l5.293 5.293a1 1 0 001.414-1.414L11.414 10l5.293-5.293z"
                    clipRule="evenodd"
                ></path>
                </svg>
        </button>
        <h1 className="">GAME OVER!</h1>
        <p>Better luck next time</p>
      </div>
    </div>
  )
}

export default GameOver
