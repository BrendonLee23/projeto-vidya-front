import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App-Styles.jsx'

function App() {

  return (
    <>
      <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </PagesContainer>
    </>
  )
}

export default App
