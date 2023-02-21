const carrousel = document.querySelector(".carrousel")
const card = document.querySelectorAll(".card");
const punto = document.querySelectorAll(".punto")
const botton = document.querySelectorAll(".botton")

punto.forEach((cadaPunto,i)=>
{
    punto[i].addEventListener('click',()=>
    {
        let position = i
        let operation = position * -33.33
        
        carrousel.style.transform = `translateX(${operation}%)`

        punto.forEach((cadaPunto,i)=>
        {
            punto[i].classList.remove("activo")
            punto[i].classList.add("inactive")
        })

        punto[i].classList.add("activo")
        punto[i].classList.remove("inactive")

        card.forEach((cadaCard,i)=>
        {
            card[i].classList.add("outFront")
            card[i].classList.remove("inFront")
        })

        card[i].classList.remove("outFront")
        card[i].classList.add("inFront")
    })
})

let contador = 0;
let pos;

botton.forEach((cadaBoton,i)=>
{
    botton[i].addEventListener("click",()=>
    {
        pos = i;
        
        if(pos == 1)
        {
            contador++
            if(contador > 2) contador = 2
        }
        else if(pos == 0)
        {
            contador--
            if(contador < 0) contador = 0
        }

        card.forEach((cadaCard,i)=>
        {
            card[i].classList.add("outFront")
            card[i].classList.remove("inFront")
        })

        card[contador].classList.remove("outFront")
        card[contador].classList.add("inFront")

        punto.forEach((cadaPunto,i)=>
        {
            punto[i].classList.remove("activo")
            punto[i].classList.add("inactive")
        })

        punto[contador].classList.add("activo")
        punto[contador].classList.remove("inactive")

        let operation = contador * -33.33;
        carrousel.style.transform = `translateX(${operation}%)`
    })
})