import { useModalContext } from "../Context/ModalContext"
import { useModalComponentContext } from "../Context/ModelComponentContext"
import GameCard from "./GameCard"
import Footer from "./ui/Footer"
import Header from "./ui/Header"
import NavBar from "./ui/NavBar"

const Home = () => {

  const { modalToggle } = useModalContext();
  const { modal } = useModalComponentContext();

  return (
    <>
      <Header/>
      <NavBar/>
      <GameCard/>
      <Footer/>
      {modalToggle && (
        <div className="modal-div">{modal}</div>
      )}
    </>
  )
}

export default Home
