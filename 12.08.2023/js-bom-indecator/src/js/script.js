const barContainer=document.querySelector('.bar-container')
const bar=document.querySelector('.bar')

window.onscroll=function(){
    const h=document.body.scrollTop || document.documentElement.scrollTop
    console.log(h);
    if(h>53){
        barContainer.style.top=0
    }else{
        barContainer.style.top=60+'px'
    }
   
     const barHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight
     
     bar.style.width=(h/barHeight)*100 +'%'
     bar.innerHTML=parseInt((h/barHeight)*100)+'%'
}
    