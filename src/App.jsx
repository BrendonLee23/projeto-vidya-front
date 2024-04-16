import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App-Styles.jsx'
import { Container } from './App-Styles.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {

  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App
