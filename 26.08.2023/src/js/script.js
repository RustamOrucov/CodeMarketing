const addButton = document.querySelector(".btn");
const taskList = document.querySelector(".task-list");
const allDel=document.querySelector('.del-btn')




// ! ui function
const API_URL = "http://localhost:3000/list";


const getList = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
  
    data.forEach((el) => {
    
     //  ! function creat element
      const listItem = document.createElement("li");
      listItem.id=`${el.id}`
      listItem.innerHTML = `
      <i class="fa-regular fa-circle"></i>
      <p class="list-txt" >${el.title}</p>
      <i class="fa-solid fa-x"></i>
      `;
      
      if(el.id>0){
        allDel.style.display='block'
     
      }

      // ! read button
      const iconCirlce = listItem.querySelector(".fa-regular");
      iconCirlce.addEventListener("click", () => {
        const pTxt = iconCirlce.nextElementSibling;
        console.log(iconCirlce);

        if (iconCirlce.classList.contains("fa-circle-check")) {
          iconCirlce.classList.remove("fa-circle-check");
          iconCirlce.classList.add("fa-circle");
          iconCirlce.style.color = "black";
          pTxt.style.textDecoration = "none";
        } else {
          iconCirlce.classList.remove("fa-circle");
          iconCirlce.classList.add("fa-circle-check");
          iconCirlce.style.color = "red";
          pTxt.style.textDecoration = "line-through";
        }
      });






      // ! dell button
      const delBtn = listItem.querySelector(".fa-x");
    delBtn.addEventListener("click", async () => {
      try {
        const taskId = listItem.getAttribute("id"); 
        console.log(taskId);
        const response = await fetch(`${API_URL}/${taskId}`, {
          method: "DELETE",
        });
    
        if (response.ok) {
         
          listItem.remove();
        } else {
          console.error("error text");
        }
      } catch (error) {
        console.error( error);
      }
    });
      taskList.appendChild(listItem);
    });
  } catch (error) {
    console.log(error);
    taskList.innerHTML += "Sehv geden nese var";
  }
};

// ! alldelete button
allDel.addEventListener('click', async () => {
   const delId=document.querySelectorAll('li')
   delId.forEach(el=>{
    const elid=el.getAttribute('id')
   
    console.log(elid);
  
    try {
      const response =  fetch(`${API_URL}/${elid}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
       
        listItem.remove();
      } else {
        console.error("error text");
      }
    } catch (error) {
      console.error( error);
    }

  
});
});

// ! add element function
const addList = async () => {
  const input = document.querySelector(".input").value;
  if (input.trim() === "") {
    return;
  }

  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      title: input,
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  });
};
getList();




//! add button function

addButton.addEventListener("click", () => {
  addList();
})
