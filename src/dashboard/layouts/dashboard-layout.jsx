import { useEffect, useState } from 'react'

import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import Draggable from '../components/draggable'
import Droppable from '../components/droppable';

import { DragDropProvider } from '@dnd-kit/react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { RiHomeLine } from 'react-icons/ri';
import NavBar from '../components/nav-bar';
import { items } from '../constants/items';

export default function DashboardLayout() {
  const [parent, setParent] = useState(undefined);
  const navigate = useNavigate();
  const item = items.find((item) => item.path === window.location.pathname);

  const changePage = (event) => {
    if (!event.operation.target) return;
    const id = event.operation.source.id;

    if (id === 0) navigate("/dashboard/about");
    if (id === 1) navigate("/dashboard/skills");
    if (id === 2) navigate("/dashboard/portfolio");
    if (id === 3) navigate("/dashboard/formation");
    if (id === 4) navigate("/dashboard/contact");

    setParent(event.operation.target?.id);
  }

  useEffect(() => {
    if (window.location.pathname === "/dashboard") setParent(undefined);
    if (window.location.pathname !== "/dashboard") setParent("droppable");
  }, [navigate])

  return (
    <div className="main-page-styles overflow-y-hidden w-screen h-screen">
      <NavBar items={items} />
      <div className="nav-h-container flex flex-col sm:flex-row w-full">
        <DragDropProvider onDragEnd={(event) => changePage(event)} >
          <div className="navs w-full sm:w-auto border-r border-[#2a3852] ">
            <p className='hidden sm:block text-[11px] transform scale-x-[1.1] text-center mt-4 text-[#979fa1]'>
              NAVEGACIÓN
            </p>
            <ul className='flex flex-row sm:flex-col p-3 space-x-3 sm:space-y-3 sm:space-x-0'>
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
          <div className="dashboard bg-[#202a3e] w-full h-[calc(100vh-161px)] sm:h-full relative ">
            <Droppable parent={parent} items={items}>
              <Outlet />
            </Droppable>
          </div>
        </DragDropProvider>
      </div>
    </div>
  )
}
