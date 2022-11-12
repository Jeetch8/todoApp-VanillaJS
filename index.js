const container = document.querySelector(".container");
const input = document.querySelector(".input");
const addButton = document.querySelector(".addButton");
const tododList = document.querySelector("#tododList");
const deleteBtn = document.querySelectorAll(".deleteButton");
const editButton = document.querySelectorAll(".editButton");

let inputValue = "";
let currentEditingIndex = "";

input.addEventListener("input", (e) => {
  inputValue = e.target.value;
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    mainFunction(e);
  }
});

addButton.addEventListener("click", (e) => {
  mainFunction(e);
});

function mainFunction(e) {
  if (input.parentElement.querySelector("button").innerText === "✓") {
    const allItems = document.querySelectorAll(".item");
    allItems[currentEditingIndex].querySelector(".item_input").innerText =
      inputValue;

    input.parentElement.querySelector("button").innerText = "+";
  } else {
    const newItem = document.createElement("div");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const textDiv = document.createElement("div");
    textDiv.className = "item_input";
    newItem.className = "item";
    editBtn.innerText = "EDIT";
    editBtn.addEventListener("click", (e) => {
      editFunction(e);
    });
    editBtn.className = "editButton";
    deleteBtn.className = "deleteButton";
    deleteBtn.innerText = "DELETE";
    deleteBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
    textDiv.innerText = inputValue;
    newItem.appendChild(textDiv);
    newItem.appendChild(editBtn);
    newItem.appendChild(deleteBtn);
    container.appendChild(newItem);
    input.value = "";
  }
}

function editFunction(e) {
  input.value = e.target.parentElement.querySelector(".item_input").innerText;
  input.parentElement.querySelector("button").innerText = "✓";
  const items = document.querySelectorAll(".item");
  const itemsArray = [...items];
  const itemIndex = itemsArray.find((item, index) => {
    if (
      e.target.parentElement.querySelector(".item_input").innerText ===
      item.querySelector(".item_input").innerText
    ) {
      console.log(index);
      currentEditingIndex = index;
      return index;
    }
  });
}
