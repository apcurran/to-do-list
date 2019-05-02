// Delete buttons for items

const list = document.querySelector(".item-list ul");
list.addEventListener("click", (event) => {
    if(event.target.className === "delete") {
        const li = event.target.parentElement;
        list.removeChild(li);
    }
});

// Add item

const form = document.forms["add-item"];
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputValue = form.querySelector('input[type="text"]').value;
    const li = document.createElement("li");
    const itemName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    itemName.textContent = inputValue;
    itemName.className += "item";
    deleteBtn.textContent = "delete";
    deleteBtn.className += "delete";

    li.appendChild(itemName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});