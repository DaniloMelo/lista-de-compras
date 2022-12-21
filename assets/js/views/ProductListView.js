class ProductListView{

    constructor(elementHTML){
        this._elementHTML = elementHTML
    }

    _template(model){
        return ``
    }

    update(model){
        this._elementHTML.innerHTML = this._template(model)
    }
}