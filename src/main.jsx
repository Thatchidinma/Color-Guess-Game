import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ScoreProvider } from './Context/ScoreContext.jsx'
import { ModalContextProvider } from './Context/ModalContext.jsx'
import ModalComponentContextProvider from './Context/ModelComponentContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalContextProvider>
      <ModalComponentContextProvider>
        <ScoreProvider>
          <App />
        </ScoreProvider>
      </ModalComponentContextProvider>
    </ModalContextProvider>
  </StrictMode>
)
