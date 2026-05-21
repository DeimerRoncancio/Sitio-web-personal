import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MdOutlineWbSunny } from "react-icons/md";
import { PiBroom } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";

export default function NavBar({ items }) {
  const navigate = useNavigate();
  const item = items.find((item) => item.path === window.location.pathname);

  return (
    <div className="flex justify-between bg-[#171e2c] border-b border-[#2a3852] px-8 py-[11px]">
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
        <button title="Cambiar Tema" className='nav-button' onClick={() => navigate("/")}>
          <MdOutlineWbSunny className='text-xl' />
        </button>
      </div>
    </div>
  );
}