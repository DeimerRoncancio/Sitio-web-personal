import '../../css/style.css'

export default function ItemsDraggables({icon,name}) {
    return (
        <div className="draggable flex flex-col justify-center rounded-xl items-center p-1 text-center 
        text-5xl w-[90px] h-[90px]">
            {icon}
            <h3 className="text-base text-sm">{name}</h3>
        </div>
    )
}
