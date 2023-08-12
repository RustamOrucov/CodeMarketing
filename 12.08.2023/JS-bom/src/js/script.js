const header=document.querySelector('.header')
const arrowBtn=document.querySelector('.btn')
// window.onscroll=function(){
//     if(document.body.scrollTop>30 || document.documentElement.scrollTop>30){
//         header.style.top=0
//     }else{
//         header.style.top=-150+'px'
//     }
// }

window.onscroll=function(){


    if(document.documentElement.scrollTop>166 || document.body.scrollTop>166){
        arrowBtn.style.display='block'
        header.style.top=-150+'px'
    }else{
        
        arrowBtn.style.display='none'
        header.style.top=0
    }
}
arrowBtn.addEventListener('click',startPage)

function startPage(){
    console.log('test');
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0
}