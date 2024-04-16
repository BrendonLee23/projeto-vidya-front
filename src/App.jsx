import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App-Styles.jsx'
import { Container } from './App-Styles.jsx'
import HomePage from './pages/HomePage.jsx'
import { InfoContext } from './contexts/InfoContext.jsx'

function App() {

  return (
    <Container>
      <BrowserRouter>
        <InfoContext.Provider value={('value')}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </InfoContext.Provider>
      </BrowserRouter>
    </Container>
  )
}

export default App
