const rightBtn = document.querySelector(".fa-angle-right");
const leftBtn = document.querySelector(".fa-angle-left");
const cardWrap = document.querySelector(".card-wrapper");
const card = cardWrap.querySelectorAll(".card");
const container = document.querySelector(".cards").offsetWidth;

let translateX = 0;

// the number of cards left on the edge
let l = card.length;
let z = Math.round(container / card[0].offsetWidth);
let d = l - z;

// right btn 
rightBtn.addEventListener("click", () => {
   if (d > 0) {
    console.log(d);
    translateX += card[0].offsetWidth;
    leftBtn.style.display = "block";
    cardWrap.style.transform = `translateX(-${translateX}px)`;
    d--;
  }
    else {
      rightBtn.style.display = "none";
    
  }
});

//left btn
leftBtn.addEventListener("click", () => {
  if (translateX >= card[0].offsetWidth) {
    translateX -= card[0].offsetWidth;
    cardWrap.style.transform = `translateX(-${translateX}px)`;
    rightBtn.style.display = "block";
    d++
  } else {
    leftBtn.style.display = "none";
  }
});

