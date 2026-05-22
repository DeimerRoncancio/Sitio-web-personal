import { useEffect, useState } from "react";

export default function useChangeView() {
  const [changeView, setChangeView] = useState(() => {
    const savedView = localStorage.getItem('view');
    if (!savedView) return 'dashboard';
    return savedView; 
  });

  const handleChangeView = () => {
    if (changeView === 'normal') localStorage.setItem('view', 'dashboard');
    else localStorage.setItem('view', 'normal');
    setChangeView(prevView => prevView === 'normal' ? 'dashboard' : 'normal')
  };

  return { changeView, handleChangeView };
}