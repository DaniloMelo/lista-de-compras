const openModalBtnList = document.querySelectorAll(".new-item")
const fade = document.querySelector(".fade")
const modal = document.querySelector(".modal")
const closeModalBtn = document.querySelector(".modal_btn-cancel")
const listItems = document.querySelectorAll(".list-item") 

const getLocalStorageData = () => JSON.parse(localStorage.getItem("shopingListDB")) ?? []
const setLocalStorageData = (data) => localStorage.setItem("shopingListDB", JSON.stringify(data))

const temp = {
    name: "Teste JS",
    quant: "111",
    price: "R$ 111,00"
}


function createListItem(item){
    const dbData = getLocalStorageData()
    dbData.push(item)
    setLocalStorageData(dbData)
}

function updateListItem(index, item){
    const dbData = getLocalStorageData()
    dbData[index] = item
    setLocalStorageData(dbData)
}

function deleteListItem(index){
    const dbData = getLocalStorageData()
    dbData.splice(index, 1)
    setLocalStorageData(dbData)
}

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

