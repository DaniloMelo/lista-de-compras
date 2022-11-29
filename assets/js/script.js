const openModalBtnList = document.querySelectorAll(".new-item")
const fade = document.querySelector(".fade")
const modal = document.querySelector(".modal")
const closeModalBtn = document.querySelector(".modal_btn-cancel")
const listItems = document.querySelectorAll(".list-item") 



// Modal and Fade
openModalBtnList.forEach(btn => {
    btn.addEventListener("click", () => {
        fade.classList.toggle("hide")
        modal.classList.toggle("hide")
    })
})

closeModalBtn.addEventListener("click", () => {
    fade.classList.toggle("hide")
    modal.classList.toggle("hide")
})


// Drop-Down menu
listItems.forEach(element => {
    element.addEventListener("click", (event)=>{
        if(event.target.classList.contains("list-item_name")){
            event.target.nextElementSibling.classList.toggle("hide-list-options")
        }
    })
})
