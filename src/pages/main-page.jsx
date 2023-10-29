import { useState } from 'react'

import { TbArrowBackUp } from 'react-icons/tb'
import { MdOutlineWebAsset } from 'react-icons/md'
import { RxPerson } from 'react-icons/rx'

import ItemsDraggables from '../components/items-draggables'
import AboutMe from '../components/section-compoents/about-me'
import Portfolio from '../components/section-compoents/portfolio'

export default function MainPage() {
    const [items,setItems] = useState([
        {   
            id: 0,
            component: <AboutMe />,
            icon: <ItemsDraggables icon={<RxPerson />} name="Sobre mi" />
                
        },
        {
            id: 1,
            component: <Portfolio />,
            icon: <ItemsDraggables icon={<MdOutlineWebAsset />} name="Portafolio" />
        }
    ])
    const [newItem,setNewItem] = useState({})

    const dragStart = (evt,item)=> {
        evt.dataTransfer.setData('itemID',item.id);
    }

    const dropFunction = (evt)=> {
        const elementId = evt.dataTransfer.getData('itemID');
        const element = items.find(item => item.id == elementId);
 
        setNewItem(element);
    }

    return (
        <div className="main-page-styles w-screen h-screen">
            <div className="flex nav-top w-full">
                <div className='w-[114px] h-[70px] flex justify-center items-center'>
                    <a className='nav-hover' href="/">
                        <TbArrowBackUp className='text-4xl'/>
                    </a>
                </div>
                <div className='navbar-top flex items-center text-[20px] pl-5'>
                    <a className='nav-hover' href='/'>
                        <h2>Inicio</h2>
                    </a>
                </div>
            </div>
            <div className="nav-h-container flex w-full">
                <div className="nav-left">
                    <ul>
                        {
                            items.map(item=> (
                                <li key={item.id} className='m-3' draggable
                                onDragStart={(evt)=> dragStart(evt,item)}>
                                    {item.icon}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="dashboard" onDragOver={(evt)=> evt.preventDefault()} 
                onDrop={(evt)=> dropFunction(evt)}>
                    {newItem.component}
                </div>
                <div className="nav-left w-[95px]"></div>
            </div>
        </div>
    )
}
