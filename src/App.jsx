import './App.css';

import WelcomePageComponent from './home/pages/welcome-page';
import DashboardLayout from './dashboard/layouts/dashboard-layout';

import { Route, Routes } from 'react-router-dom'
import AboutMe from './dashboard/routes/about-me';
import Portfolio from './dashboard/routes/portfolio';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<WelcomePageComponent />} />
        <Route path='/main' element={<DashboardLayout />} >
          <Route path="/main/about" element={<AboutMe />} />
          <Route path="/main/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
