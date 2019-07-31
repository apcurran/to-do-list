const list = document.querySelector(".item-list ul");
// Variables for addTodo function
const form = document.forms["add-item"];
let input = form.querySelector('input[type="text"]');

const addToDOM = (todoVal) => {
    const li = document.createElement("li");
    const itemName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    itemName.textContent = todoVal;
    itemName.className += "item";
    deleteBtn.textContent = "delete";
    deleteBtn.className += "delete";

    li.appendChild(itemName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
};

const addTodo = (event) => {
    event.preventDefault();

    const inputValue = form.querySelector('input[type="text"]').value;
    addToDOM(inputValue);

    localStorage.setItem(inputValue, inputValue);
    input.value = null; // Clear the main input after adding the item.
};

const renderStoredTodos = (() => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        
        addToDOM(value);
    }
})();

form.addEventListener("submit", addTodo);

// Delete buttons for items
list.addEventListener("click", (event) => {
    if(event.target.className === "delete") {
        // Delete from DOM
        const li = event.target.parentElement;
        list.removeChild(li);

        // Delete from localStorage
        const currTodoVal = li.children[0].textContent;
        localStorage.removeItem(currTodoVal);
        console.log(currTodoVal);
    }
});