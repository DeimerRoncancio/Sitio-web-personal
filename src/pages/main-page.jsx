import { useEffect, useRef, useState } from 'react'

import { MdOutlineWebAsset } from 'react-icons/md'
import { RxPerson } from 'react-icons/rx'

import ItemsDraggables from '../components/items-draggables'
import AboutMe from '../components/section-compoents/about-me'
import Portfolio from '../components/section-compoents/portfolio'
import { DragDropProvider, useDraggable, useDroppable } from '@dnd-kit/react'
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import { RiDragDropLine } from "react-icons/ri";

const items = [
  {
    id: 0,
    component: <AboutMe />,
    icon: <RxPerson />,
    name: "Sobre mi",
    path: "/main/about"
  },
  {
    id: 1,
    component: <Portfolio />,
    icon: <MdOutlineWebAsset />,
    name: "Portafolio",
    path: "/main/portfolio"
  }
];

function Draggable({ id, item: { icon, name, path } }, changePage) {
  const navigate = useNavigate();
  const isActive = path === window.location.pathname;

  const { ref, isDragging, attributes, listeners, setNodeRef } = useDraggable({ id });

  const handleClick = (event) => navigate(path);

  return (
    <div className="w-full h-fit relative">
      <li className={`absolute ${isDragging ? "opacity-50" : ""}`}>
        <ItemsDraggables
          icon={icon}
          name={name}
          isDragging={isDragging}
          isActive={isActive}
          isShadow={true}
        />
      </li>

      <li ref={ref} className={`relative`} {...attributes} {...listeners} onClick={handleClick}>
        <ItemsDraggables
          icon={icon}
          name={name}
          isDragging={isDragging}
          isActive={isActive}
        />
      </li>
    </div>
  );
}

export function Droppable({ children, parent }) {
  const { isDropTarget, ref } = useDroppable({ id: "droppable" });

  return (
    <div ref={ref} className={`w-full h-full after:shadow-[inset_0px_0px_75px_10px]
      after:shadow-cyan-800/50 after:inset-0 after:absolute after:transition-all ease-in after:duration-200
      ${isDropTarget
        ? "after:shadow-[inset_0px_0px_75px_20px] after:opacity-100 after:visible"
        : "after:opacity-0 after:invisible after:duration-75"}`
    }>
      {parent === "droppable"
        ? children
        : <div className='w-full h-full text-[#888] p-28 px-32'>
            <div className={`w-full h-full flex flex-col bg-[#2a3344] justify-center items-center
              outline-2 outline-[#888] outline-offset-2 border-2 border-dashed border-[#888888]
              ${isDropTarget && "outline-cyan-500 outline !bg-[#2f3b52] scale-105 text-[#bec1c7]"}
              rounded-2xl transition-all duration-300`
            }>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00a1cd59] to-[#0080a038]
                ${isDropTarget && "!from-[#00a1cd59] !to-[#0080a038]"}
                flex items-center justify-center mb-4`
              }>
                <RiDragDropLine size={35} className={`text-[#00a2ce] ${isDropTarget && "text-[#00c8ff]"} `} />
              </div>
              <p className='text-center text-lg w-96'>
                Arrastra o haz click en los elementos desde el panel izquierdo para ver su contenido aquí
              </p>
            </div>
          </div>}
    </div>
  );
}

export default function MainPage() {
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
