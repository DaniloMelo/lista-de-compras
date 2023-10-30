const itemName = document.querySelectorAll(".list-item")
const itemOptions = document.querySelector(".list-item_options")
const opemModalBtns = document.querySelectorAll(".open-modal")
const modal = document.querySelector(".modal")
const btnEdit = document.querySelectorAll(".btn-edit")

itemName.forEach( item => {
  item.addEventListener("click", (event) => {
    if (event.target.classList.contains("list-item_name")) {
      event.target.nextElementSibling.classList.toggle("hide-list-options")
    }
  })
})

opemModalBtns.forEach(item => {
  item.addEventListener("click", (event) => {
    modal.classList.toggle("hide")
    console.log(event.target)
  })
})

btnEdit.forEach(item => {
  item.addEventListener("click", (event) => {
    modal.classList.toggle("hide");
    console.log(event.target);
  });
});
