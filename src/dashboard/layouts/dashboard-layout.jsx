import { useEffect, useState } from 'react'

import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import Draggable from '../components/draggable'
import Droppable from '../components/droppable';

import { DragDropProvider } from '@dnd-kit/react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { RiHomeLine } from 'react-icons/ri';
import NavBar from '../components/nav-bar';
import { items } from '../constants/items';
import { useContext } from 'react';
import { viewContext } from '../../context/viewContext';

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [parent, setParent] = useState(() => location.pathname === "/dashboard" ? undefined : "droppable");
  const item = items.find((item) => item.path === window.location.pathname);
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
    <div className="main-page-styles overflow-hidden w-screen h-screen">
      <NavBar items={items} currentView={currentView} changeView={changeView} />
      <div className="nav-h-container flex flex-col sm:flex-row w-full">
        <DragDropProvider onDragEnd={(event) => changePage(event)} >
          <div style={{ display: currentView === 'dashboard' ? 'flex' : 'none' }}
          className="theme-sidebar bg-[rgb(23,30,44)] sm:flex-col justify-center sm:justify-normal w-full sm:w-auto
          border-t sm:border-t-0 sm:border-r border-[#2a3852] fixed bottom-0 sm:static order-2 sm:order-1 z-40">
            <p className='theme-muted hidden sm:block text-[11px] transform scale-x-[1.1] text-center mt-4 text-[#979fa1]'>
              NAVEGACIÓN
            </p>
            <ul className='flex w-full xs:space-x-3 xs:w-auto justify-between sm:flex-col p-3 sm:space-y-3 
            sm:!space-x-0'>
              {items.map((item, index) => (
                <Draggable
                  key={item.id}
                  id={item.id}
                  item={item}
                  changePage={changePage}
                />
              ))}
            </ul>
          </div>
          <div className={`theme-dashboard dashboard bg-[#202a3e] w-full sm:!h-full relative order-1 sm:order-2 z-30
          ${currentView === 'dashboard' ? 'h-[calc(100vh-135px)] xs:h-[calc(100vh-131px)]' : 'h-full'}`}>
            <Droppable parent={parent} items={items}>
              <Outlet />
            </Droppable>
          </div>
        </DragDropProvider>
      </div>
    </div>
  )
}
