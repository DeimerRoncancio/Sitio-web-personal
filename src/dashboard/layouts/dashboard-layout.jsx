import { useEffect, useState } from 'react'

import { IoMdArrowBack } from "react-icons/io";
import { items } from '../constants/items';

import Draggable from '../components/draggable'
import Droppable from '../components/droppable';

import { DragDropProvider } from '@dnd-kit/react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function DashboardLayout() {
  const [parent, setParent] = useState(undefined);
  const navigate = useNavigate();

  const changePage = (event) => {
    if (!event.operation.target) return;
    const id = event.operation.source.id;

    if (id === 0) navigate("/main/about");
    if (id === 1) navigate("/main/portfolio");

    setParent(event.operation.target?.id);
  }

  useEffect(() => {
    if (window.location.pathname === "/main") setParent(undefined);
    if (window.location.pathname !== "/main") setParent("droppable");
  }, [navigate])

  return (
    <div className="main-page-styles w-screen h-screen">
      <div className="flex bg-[#171e2c] w-full outline outline-1 outline-[#2a3852]">
        <div className='pl-8 py-4 flex justify-center items-center'>
          <a className='nav-hover' href="/">
            <IoMdArrowBack className='text-2xl' />
          </a>
        </div>
        <div className='navs flex items-center text-base font-medium pl-5'>
          <a className='nav-hover flex items-center space-x-3' href='/'>
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <h2>Inicio</h2>
          </a>
        </div>
      </div>
      <div className="nav-h-container flex w-full">
        <DragDropProvider onDragEnd={(event) => changePage(event)} >
          <div className="navs border-r border-[#2a3852]">
            <ul className='p-3 space-y-3'>
              <p className='text-[11px] transform scale-x-[1.1] text-center mb-4 text-[#979fa1]'>
                NAVEGACIÓN
              </p>
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
          <div className="dashboard bg-[#202a3e] w-full relative">
            <Droppable parent={parent}>
              <Outlet />
            </Droppable>
          </div>
        </DragDropProvider>
      </div>
    </div>
  )
}
