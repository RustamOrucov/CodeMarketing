const cardsArea=document.querySelector('.cards')
const cont=document.querySelector('.container')
const rightBtn=document.querySelector('.fa-angle-right')
const leftBtn=document.querySelector('.fa-angle-left')



const getDisplay=async function(){
    const response=await fetch('http://localhost:3000/data')
    const data=await response.json()

let counter=0

    data.forEach(el => {
        const card=document.createElement('div')
        card.className='card'
        card.innerHTML=`
        <div class="card-inner">
        <div class="img">
        <img src=${el.picture} alt="">
        </div>
        <div class="content"><p>${el.text}</p></div>
        </div>
        </div>
        `
    
         cardsArea.appendChild(card)
         counter++
        });
        let count=0
        let translateX=0
        rightBtn.addEventListener('click',()=>{
            translateX-=187
            cardsArea.style.transform=`translateX(${translateX}px)`
            count++
            if(count>=counter-7){
                leftBtn.style.display='block'
                rightBtn.style.display='none'
                
            }
            leftBtn.addEventListener('click',()=>{
                translateX+=93.3
                cardsArea.style.transform=`translateX(${translateX}px)`

            })
         })
        
       
    }
    getDisplay()
    
    
   
   





