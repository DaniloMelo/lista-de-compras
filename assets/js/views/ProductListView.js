class ProductListView {

    constructor(elementHTML) {
        this._elementHTML = elementHTML
    }

    _template(model) {
        return model.localStorageData.map(data => {
            return `<div class="list-item">
                        <p class="list-item_name">${data._prodName}</p>
                        <div class="list-item_options hide-list-options">
                            <div class="list-item_line"></div>
                            <p class="list-item_price">Valor Unitário: <span>${data._prodPrice} R$</span></p>
                            <p class="list-item_quant">Quantidade: <span>${data._prodQuant}</span></p>
                            <button class="btn-edit"><i class="fa-solid fa-pen"></i>Editar</button>
                            <button class="btn-delete"><i class="fa-regular fa-trash-can"></i></button>
                        </div>
                    </div>`
        }).join("")

    }

    update(model) {
        this._elementHTML.innerHTML = this._template(model)
    }
}


// ${console.log(model.localStorageData.forEach(teste => console.log(teste._prodName)))}

// `<div class="list-item">
//                         <p class="list-item_name">${item._prodName}</p>
//                         <div class="list-item_options hide-list-options">
//                             <div class="list-item_line"></div>
//                             <p class="list-item_price">Valor Unitário: <span>${item._prodPrice} R$</span></p>
//                             <p class="list-item_quant">Quantidade: <span>${item._prodQuant}</span></p>
//                             <button class="btn-edit"><i class="fa-solid fa-pen"></i>Editar</button>
//                             <button class="btn-delete"><i class="fa-regular fa-trash-can"></i></button>
//                         </div>
//                     </div>`