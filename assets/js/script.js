const openModalBtnList = document.querySelectorAll(".new-item")
const fade = document.querySelector(".fade")
const modal = document.querySelector(".modal")
const closeModalBtn = document.querySelector(".modal_btn-cancel")
const modalForm = document.querySelector(".form")
const modalAddBtn = document.querySelector(".modal_btn-add-item")
const shoppingList = document.querySelector(".list")

const getLocalStorageData = () => JSON.parse(localStorage.getItem("shoppingListDB")) ?? []
const setLocalStorageData = (data) => localStorage.setItem("shoppingListDB", JSON.stringify(data))

function saveItemDB(item) {
    const dbData = getLocalStorageData()
    dbData.push(item)
    setLocalStorageData(dbData)
}

function updateItemDB(index, item) {
    const dbData = getLocalStorageData()
    dbData[index] = item
    setLocalStorageData(dbData)
}

function deleteItemDB(index) {
    const dbData = getLocalStorageData()
    dbData.splice(index, 1)
    setLocalStorageData(dbData)
}

function dataValidation() {
    return modalForm.reportValidity()
}

function saveItem() {
    if (dataValidation()) {
        const item = {
            itemName: document.querySelector("#modal_item-name").value,
            itemPrice: document.querySelector("#modal_item-price").value,
            itemQuant: document.querySelector("#modal_item-quant").value,
        }

        const index = document.querySelector("#modal_item-name").dataset.index

        if(index == "new"){
            saveItemDB(item)
        }else{
            console.log("editando.......");
        }
    }
}

function createListItemRow(item, index) {
    const listItem = document.createElement("div")
   
    listItem.classList.add("list-item")
    
    listItem.innerHTML = `<p class="list-item_name">${item.itemName}</p>
                            <div class="list-item_options hide-list-options">
                                <div class="list-item_line"></div>
                                <p class="list-item_price">Valor Unitário: <span>${item.itemPrice} R$</span></p>
                                <p class="list-item_quant">Quantidade: <span>${item.itemQuant}</span></p>
                                <button type="button" class="btn-edit" data-action="edit-${index}"><i class="fa-solid fa-pen"></i>Editar</button>
                                <button type="button" class="btn-delete" data-action="delete-${index}"><i class="fa-regular fa-trash-can"></i></button>
                            </div>`

    shoppingList.appendChild(listItem)

}

function clearListItems() {
    document.querySelectorAll(".list-item").forEach(item => { item.parentNode.removeChild(item) })
}

function updateListItems() {
    const dbData = getLocalStorageData()
    
    clearListItems()
    
    dbData.forEach(createListItemRow)
   
    const listItems = document.querySelectorAll(".list-item")
    
    listItems.forEach(element => {
        element.addEventListener("click", (event) => {
            if (event.target.classList.contains("list-item_name")) {
                event.target.nextElementSibling.classList.toggle("hide-list-options")
            }
        })
    })
}

function editListItem(index) {
    const dbData = getLocalStorageData()[index]

    // dbData.index = index
    
    function fillFields(listItem) {
        document.querySelector("#modal_item-name").value = listItem.itemName
        document.querySelector("#modal_item-price").value = listItem.itemPrice
        document.querySelector("#modal_item-quant").value = listItem.itemQuant
        document.querySelector("#modal_item-name").dataset.index = listItem.index
    }

    fillFields(dbData)

    showModal()
}

function editDelete(event) {
    if (event.target.type == "button") {
        const [action, index] = event.target.dataset.action.split("-")

        if (action == "edit") {
            editListItem(index)
        } else {
            console.log("deletando", index);
        }
    }

}

updateListItems()

function showModal () {
    fade.classList.toggle("hide")
    modal.classList.toggle("hide")
}

openModalBtnList.forEach(btn => {
    btn.addEventListener("click", showModal)
})

closeModalBtn.addEventListener("click", () => {
    fade.classList.toggle("hide")
    modal.classList.toggle("hide")
    document.querySelector("#modal_item-name").value = ""
    document.querySelector("#modal_item-price").value = ""
    document.querySelector("#modal_item-quant").value = ""
})

modalAddBtn.addEventListener("click", saveItem)

shoppingList.addEventListener("click", editDelete)


