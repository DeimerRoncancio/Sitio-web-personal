import { useEffect, useState } from 'react'

import Draggable from '../components/draggable'
import Droppable from '../components/droppable';

import { DragDropProvider } from '@dnd-kit/react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import NavBar from '../components/nav-bar';
import { items } from '../constants/items';
import { useContext } from 'react';
import { viewContext } from '../../context/viewContext';

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [parent, setParent] = useState(() => location.pathname === "/dashboard" ? undefined : "droppable");
  const { changeView, currentView } = useContext(viewContext);

  const changePage = (event) => {
    if (!event.operation.target) return;
    const id = event.operation.source.id;

    const navOptions = { state: { fromDashboard: true } };

    if (id === 0) navigate("/dashboard/about", navOptions);
    if (id === 1) navigate("/dashboard/skills", navOptions);
    if (id === 2) navigate("/dashboard/portfolio", navOptions);
    if (id === 3) navigate("/dashboard/formation", navOptions);
    if (id === 4) navigate("/dashboard/contact", navOptions);
    
    setParent(event.operation.target?.id);
  }

  useEffect(() => {
    if (location.pathname === "/dashboard") setParent(undefined);
    if (location.pathname !== "/dashboard") setParent("droppable");
  }, [location.pathname])

  return (
    <div className="bg-[var(--theme-app-bg)] overflow-hidden w-screen h-screen">
      <NavBar items={items} currentView={currentView} changeView={changeView} />
      <div className="h-[calc(100%-56px)] flex flex-col sm:flex-row w-full">
        <DragDropProvider onDragEnd={(event) => changePage(event)} >
          <div style={{ display: currentView === 'dashboard' ? 'flex' : 'none' }}
          className="theme-sidebar sm:flex-col justify-center sm:justify-normal w-full sm:w-auto
          border-t sm:border-t-0 sm:border-r fixed bottom-0 sm:static order-2 sm:order-1 z-40">
            <p className='rail-label hidden sm:block text-center mt-5 mb-1'>
              Navegación
            </p>
            <ul className='flex w-full xs:space-x-3 xs:w-auto justify-between sm:flex-col p-3 sm:space-y-3 
            sm:!space-x-0'>
              {items.map((item) => (
                <Draggable key={item.id} id={item.id} item={item} />
              ))}
            </ul>
          </div>
          <div className={`theme-dashboard w-full min-w-0 min-h-0 sm:flex-1 sm:!h-full relative order-1 sm:order-2
          ${currentView === 'dashboard' ? 'h-[calc(100%-75px)] 2xs:h-[calc(100%-85px)]' : 'h-full'}`}>
            <Droppable parent={parent} items={items}>
              <Outlet />
            </Droppable>
          </div>
        </DragDropProvider>
      </div>
    </div>
  );
}
