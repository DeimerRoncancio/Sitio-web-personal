import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MdOutlineWbSunny } from "react-icons/md";
import { PiBroom } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import useChangeTheme from "../hooks/useChangeTheme";

export default function NavBar({ items }) {
  const { theme, menuRef, showToggleTheme, toggleTheme, toggleShowTheme } = useChangeTheme();

  const navigate = useNavigate();
  const item = items.find((item) => item.path === window.location.pathname);

  return (
    <div className="flex justify-between bg-blue-900 dark:bg-[#171e2c] border-b border-[#2a3852] px-8 py-[11px]">
      <div className="flex">
        <div className='flex justify-center items-center space-x-3'>
          <button className='nav-hover' onClick={() => navigate(-1)}>
            <IoMdArrowBack className='text-2xl' />
          </button>
          <button className='nav-hover' onClick={() => navigate(1)}>
            <IoMdArrowForward className='text-2xl' />
          </button>
          <button className='nav-hover' onClick={() => navigate("/")}>
            <RiHomeLine className='text-2xl' />
          </button>
        </div>
        <div className='navs flex items-center text-base font-medium pl-5'>
          <div className='nav-hover flex items-center space-x-3'>
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <h2>{item ? item.name : "Dashboard"}</h2>
          </div>
        </div>
      </div>
      <div className="hidden xs:flex flex-row items-center space-x-4 pr-[2px]">
        <button className='nav-button flex space-x-2 items-center' onClick={() => navigate("/")}>
          <IoEyeOutline className='text-xl' />
          <p className="text-sm text-[#c4c8ce]">Cambiar Vista</p>
        </button>
        <button title="Limpiar" className='nav-button' onClick={() => navigate("/dashboard")}>
          <PiBroom className='text-xl' />
        </button>
        <div ref={menuRef}>
          <button title="Cambiar Tema" className='nav-button' onClick={toggleShowTheme}>
            <MdOutlineWbSunny className='text-xl' />
          </button>

          {showToggleTheme && (
            <div className="absolute right-0 mt-2 w-48 bg-[#1b2435] border border-[#2a3852] rounded-lg
            shadow-lg p-4 flex text-white flex-col gap-3 z-50">
              <button
                className={`w-full text-left px-3 py-2 rounded-md transition-colors disabled:bg-[#2a3852] disabled:text-[#5572a7] `}
                onClick={() => toggleTheme('dark')}
                disabled={theme === 'dark'}
              >
                Oscuro
              </button>
              <button
                className={`w-full text-left px-3 py-2 rounded-md transition-colors disabled:bg-[#2a3852] disabled:text-[#5572a7] `}
                onClick={() => toggleTheme('light')}
                disabled={theme === 'light'}
              >
                Claro
              </button>
              <button
                className={`w-full text-left px-3 py-2 rounded-md transition-colors disabled:bg-[#2a3852] disabled:text-[#5572a7] `}
                onClick={() => toggleTheme('system')}
                disabled={theme === 'system'}
              >
                Sistema
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
