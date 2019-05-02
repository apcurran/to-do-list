// Delete buttons for items

const list = document.querySelector(".item-list ul");
list.addEventListener("click", (event) => {
    if(event.target.className === "delete") {
        const li = event.target.parentElement;
        list.removeChild(li);
    }
});
