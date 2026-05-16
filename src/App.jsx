import { useState } from 'react'

import WelcomePageComponent from './pages/welcome-page';
import MainPage from './pages/main-page'

import './App.css';
import { Route, Routes } from 'react-router-dom'
import AbourMe from './components/section-compoents/about-me';
import Portfolio from './components/section-compoents/portfolio';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<WelcomePageComponent />} />
        <Route path='/main' element={<MainPage />} >
          <Route path="/main/about" element={<AbourMe />} />
          <Route path="/main/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
