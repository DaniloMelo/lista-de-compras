const newItemBtn = document.querySelector(".new-item")
const closeModalBtn = document.querySelector(".cancel")
const modal = document.querySelector(".modal")

newItemBtn.addEventListener("click", ()=>{
    modal.classList.add("active")
})

closeModalBtn.addEventListener("click", ()=>{
    modal.classList.remove("active")
})
