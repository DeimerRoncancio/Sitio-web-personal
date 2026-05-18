import logoLg from '../../sources/logoLg.svg'
import logo from '../../sources/Logo.svg'

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'

import '../../../css/style.css'

export default function WelcomePageComponent() {
  return (
    <div className="flex w-screen h-screen color-5">
      <div className='absolute top-0 left-0 m-5'>
        <a href="/">
          <img className="w-[140px]" src={logo} />
        </a>
      </div>
      <div className='flex flex-col w-full h-full color-5 text-white justify-center items-center'>
        <div>
          <ul className='absolute left-0 ml-11'>
            <li className="mb-4">
              <p>
                <a target="_blank" href="https://www.linkedin.com/in/deimer-steven-roncancio-avila-518b48245/"
                className="text-2xl hover:text-cyan-300 transition-all duration-200">
                  <AiFillLinkedin />
                </a>
              </p>
            </li>
            <li className="mb-4">
              <p>
                <a target="_blank" href="https://github.com/DeimerRoncancio"
                className="text-2xl hover:text-cyan-300
                transition-all duration-200">
                  <AiFillGithub />
                </a>
              </p>
            </li>
            <li className="mb-4">
              <p>
                <a target="_blank" href="https://www.facebook.com/deison.deiss12/?locale=es_LA"
                className="text-2xl hover:text-cyan-300
                transition-all duration-200">
                  <BsFacebook />
                </a>
              </p>
            </li>
            <li className="mb-4">
              <p>
                <a target="_blank" href="https://twitter.com/DeimerRoncancio"
                className="text-2xl hover:text-cyan-300
                transition-all duration-200">
                  <BsTwitter />
                </a>
              </p>
            </li>
            <li className="mb-4">
              <p>
                <a target="_blank" href="https://www.instagram.com/deimerroncancio/"
                className="text-2xl hover:text-cyan-300
                transition-all duration-200">
                  <RiInstagramFill />
                </a>
              </p>
            </li>
          </ul>
        </div>
        <h2 className="text-[40px]">Deimer Roncancio Avila</h2>
        <h3 className="text-[22px] text-[#ffffffcc]">Desarrollador de software - Full Stack</h3>
        <img className='w-[360px] my-[50px]' src={logoLg} />
        <a href='/dashboard'>
          <button className="flex flex-col justify-center hover:border-cyan-500 hover:from-[#3b4355] hover:to-[#00586e]
            transition-all duration-300 rounded-xl items-center px-[55px] py-4 text-4xl border-2 border-[#888] shadow-lg
            shadow-[#aaaaaa34] hover:scale-105 bg-gradient-to-tl from-[#424c5c] to-[#171e2c]"
          >
            <h3 className="text-sm text-white">Ir al portafolio</h3>
          </button>
        </a>
      </div>
    </div>
  )
}
