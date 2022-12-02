const openModalBtnList = document.querySelectorAll(".new-item")
const fade = document.querySelector(".fade")
const modal = document.querySelector(".modal")
const closeModalBtn = document.querySelector(".modal_btn-cancel")
const listItems = document.querySelectorAll(".list-item") 
const modalForm = document.querySelector(".form")
const modalAddBtn = document.querySelector(".modal_btn-add-item")

const getLocalStorageData = () => JSON.parse(localStorage.getItem("shopingListDB")) ?? []
const setLocalStorageData = (data) => localStorage.setItem("shopingListDB", JSON.stringify(data))

function saveItemDB(item){
    const dbData = getLocalStorageData()
    dbData.push(item)
    setLocalStorageData(dbData)
}

function updateItemDB(index, item){
    const dbData = getLocalStorageData()
    dbData[index] = item
    setLocalStorageData(dbData)
}

function deleteItemDB(index){
    const dbData = getLocalStorageData()
    dbData.splice(index, 1)
    setLocalStorageData(dbData)
}

function dataValidation (){
    return modalForm.reportValidity()
}

function saveItem (){
    if(dataValidation()){
        const item = {
            itemName: document.querySelector("#modal_item-name").value,
            itemPrice: document.querySelector("#modal_item-price").value,
            itemQuant: document.querySelector("#modal_item-quant").value,
        }
        saveItemDB(item) 
    }
}

openModalBtnList.forEach(btn => {
    btn.addEventListener("click", () => {
        fade.classList.toggle("hide")
        modal.classList.toggle("hide")
    })
})

closeModalBtn.addEventListener("click", () => {
    fade.classList.toggle("hide")
    modal.classList.toggle("hide")
    document.querySelector("#modal_item-name").value = ""
    document.querySelector("#modal_item-price").value = ""
    document.querySelector("#modal_item-quant").value = ""
})


listItems.forEach(element => {
    element.addEventListener("click", (event)=>{
        if(event.target.classList.contains("list-item_name")){
            event.target.nextElementSibling.classList.toggle("hide-list-options")
        }
    })
})

modalAddBtn.addEventListener("click", saveItem)


