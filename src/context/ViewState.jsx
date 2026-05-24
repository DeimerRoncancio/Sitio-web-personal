import { viewContext } from "./viewContext";
import { useState } from "react";

export default function ViewState({ children }) {
  const [currentView, setView] = useState(localStorage.getItem('view') || 'dashboard');
  const [blockPage, setBlockPage] = useState(localStorage.getItem('view') === 'normal');

  const changeView = () => {
    if (currentView === 'normal') {
      localStorage.setItem('view', 'dashboard');
      setView('dashboard');
      setBlockPage(false);
    } else {
      localStorage.setItem('view', 'normal');
      setView('normal');
      setBlockPage(true);
    }
  }

  return (
    <viewContext.Provider value={{ changeView, currentView, blockPage}}>
      {children}
    </viewContext.Provider>
  )
}
