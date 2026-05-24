import './App.css';

import WelcomePageComponent from './home/pages/welcome-page';
import DashboardLayout from './dashboard/layouts/dashboard-layout';

import { Navigate, Route, Routes } from 'react-router-dom'
import AboutMe from './dashboard/routes/about-me';
import Portfolio from './dashboard/routes/portfolio';
import Skills from './dashboard/routes/skills';
import Formation from './dashboard/routes/formation';
import Contact from './dashboard/routes/contact';
import { useEffect, useContext } from 'react';
import { viewContext } from './context/viewContext';

function App() {
  const { blockPage } = useContext(viewContext);

  return (
    <main>
      <Routes>
        <Route path="/" element={<WelcomePageComponent />} />
        <Route path='/dashboard' element={<DashboardLayout />} >
          <Route 
            index 
            element={blockPage && <Navigate to="/" replace />} 
          />
          <Route path="/dashboard/about" element={<AboutMe />} />
          <Route path="/dashboard/portfolio" element={<Portfolio />} />
          <Route path="/dashboard/skills" element={<Skills />} />
          <Route path="/dashboard/formation" element={<Formation />} />
          <Route path="/dashboard/contact" element={<Contact />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
