const pupil = document.querySelectorAll(".pupil");
const pupilCenter = document.querySelectorAll(".pupil-center");
const eyeLid=document.querySelectorAll('.eye-lid')



setInterval(function(){
    eyeLid.forEach(el=>{
      el.style.height=`${500}px`
    })
},4000)
setInterval(function(){
    eyeLid.forEach(el=>{
      el.style.height=`${70}px`
    })
},4019)




window.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  pupil.forEach((el) => {
    
       el.style.marginLeft=(x/10+'px')
       el.style.marginTop=(y/10)+'px'
     
  });
  pupilCenter.forEach((el) => {
    el.style.marginLeft=x/10-65+'px'
       el.style.marginTop=y/10-30+'px'
  });
});
