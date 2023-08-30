const addButton = document.querySelector(".btn");
const taskList = document.querySelector(".task-list");
const allDel = document.querySelector(".del-btn");

const API_URL = "http://localhost:3000/list";

//! api function
const u = async function (method, input, id) {
  if (method == "POST") {
    console.log(input);
    console.log("POST");
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        title: input,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    });
  } else if (method == "GET") {
    console.log("GET");
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      data.forEach((el) => {
        //  ! creat element
        const listItem = document.createElement("li");
        listItem.id = `${el.id}`;
        listItem.innerHTML = `
        <i class="fa-regular fa-circle"></i>
        <p class="list-txt" >${el.title}</p>
        <i class="fa-solid fa-x"></i>
        `;

        if (el.id > 1) {
          allDel.style.display = "block";
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
          const taskId = listItem.getAttribute("id");
          u("DELETE", " ", taskId);
        });
        taskList.appendChild(listItem);
      });
    } catch (error) {
      console.log(error);
      taskList.innerHTML += "Sehv geden nese var";
    }
  } else if (method == "DELETE") {
    console.log("delete");
    try {
      const response = fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        listItem.remove();
      } else {
        console.error("error text");
      }
    } catch (error) {
      console.error(error);
    }
  }
};

// ! ui function
const getList = async () => {
  u("GET");
};

// ! alldelete button
allDel.addEventListener("click", async () => {
  const delId = document.querySelectorAll("li");
  delId.forEach((el) => {
    const elid = el.getAttribute("id");
    u("DELETE", " ", elid);
  });
});

// ! add element function
const addList = async () => {
  const input = document.querySelector(".input").value;
  if (input.trim() === "") {
    return;
  }
  u("POST", input);
};
getList();

//! add button function
addButton.addEventListener("click", () => {
  addList();
});
