import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App-Styles.jsx'
import { Container } from './App-Styles.jsx'
import HomePage from './pages/HomePage.jsx'
import { InfoContext } from './contexts/InfoContext.jsx'
import { useState } from 'react'

function App() {

  const [activeButton, setActiveButton] = useState("orders")

  return (
    <Container>
      <BrowserRouter>
        <InfoContext.Provider value={{activeButton, setActiveButton}}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </InfoContext.Provider>
      </BrowserRouter>
    </Container>
  )
}

export default App
