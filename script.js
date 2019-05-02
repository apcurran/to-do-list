// Delete buttons for items

let btns = document.querySelectorAll(".delete");
console.log(btns);

btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
       const li = event.target.parentElement;
       console.log(li);
       li.parentElement.removeChild(li);
    })
});

