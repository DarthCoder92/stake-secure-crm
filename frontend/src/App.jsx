import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/LandingPage.jsx';
import AdminDashboard from '../pages/AdminDashboard.jsx';
import NavBar from '../components/NavBar.jsx';
import LoginPage from '../pages/LoginPage.jsx';


function App() {


  return (
    <div >
      
      <BrowserRouter>
      <NavBar />
      <main className='min-h-screen bg-gray-50'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='*' element={<p>Page not found</p>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </main>
      </BrowserRouter>
    </div>
  )
}

export default App
