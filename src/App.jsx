import { useState } from 'react'

import WelcomePageComponent from './pages/welcome-page';
import MainPage from './pages/main-page'

import './App.css';
import { Route,Routes } from 'react-router-dom'

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<WelcomePageComponent />} />
                <Route path="/main-page" element={<MainPage />} />
            </Routes>
        </main>
    )
}

export default App
