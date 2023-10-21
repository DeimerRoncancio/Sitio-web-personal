import logoLg from '../sources/logoLg.svg';
import logo from '../sources/Logo.svg';

const WelcomePageComponent = ()=> {
    
    
    return (
        <div className="flex w-screen h-screen color-5">
            <div className='absolute top-0 left-0 m-5'>
                <img className="w-[140px]" src={logo}/>
            </div>
            <div className='flex flex-col w-full h-full color-5 text-white justify-center items-center'>
                <div>
                    <ul className='absolute left-0 ml-12'>
                        <li><p><a href="">Obj</a></p></li>
                        <li><p><a href="">Obj</a></p></li>
                        <li><p><a href="">Obj</a></p></li>
                        <li><p><a href="">Obj</a></p></li>
                        <li><p><a href="">Obj</a></p></li>
                        <li><p><a href="">Obj</a></p></li>
                    </ul>
                </div>
                <h2 className="text-[40px]">Deimer Roncancio Avila</h2>
                <h3 className="text-[22px] text-[#ffffffcc]">Desarrollador de software - Frontend Jr</h3>
                <img className='my-[35px] w-[360px] my-[50px]' src={logoLg} />
                <button className="main-button px-[55px] py-[10px] rounded-sm">Ir al portafolio</button>
            </div>
        </div>
    )
}

export default WelcomePageComponent;
