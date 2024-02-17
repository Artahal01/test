import './App.css'
import { LoginPage } from './pages/login'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/register'
import { HomePage } from './pages/home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
