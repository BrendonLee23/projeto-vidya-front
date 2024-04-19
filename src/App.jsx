import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App-Styles.jsx'
import { Container } from './App-Styles.jsx'
import { InfoContext } from './contexts/InfoContext.jsx'
import { useState } from 'react'
import OrdersPage from './pages/OrdersPage.jsx'
import CustomersPage from './pages/CustomersPage.jsx'
import RequestsPage from './pages/RequestsPage.jsx'

function App() {

  const [activeButton, setActiveButton] = useState("orders")

  return (
    <Container>
      <BrowserRouter>
        <InfoContext.Provider value={{activeButton, setActiveButton}}>
          <Routes>
            <Route path="/" element={<OrdersPage />}></Route>
            <Route path="/customers" element={<CustomersPage />}></Route>
            <Route path="/requests" element={<RequestsPage />}></Route>
          </Routes>
        </InfoContext.Provider>
      </BrowserRouter>
    </Container>
  )
}

export default App
