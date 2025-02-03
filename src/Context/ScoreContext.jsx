import { createContext, useContext, useState } from "react";

const ScoreContext = createContext();

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider =({children}) => {
    
    const [score, setScore] = useState(0)
    const [highscore, setHighscore] = useState(() => parseInt(localStorage.getItem('highscore')) || 0)

    const values = {score, setScore, highscore, setHighscore}
    return(
        <ScoreContext.Provider value={values}>
            {children}
        </ScoreContext.Provider>
    )
}