class ProductController{

    constructor(){
        this._inputProdName = document.querySelector("#modal_item-name")
        this._inputProdPrice = document.querySelector("#modal_item-price")
        this._inputProdQquant = document.querySelector("#modal_item-quant")
    }

    testLogInfo(){
        console.log(this._inputProdName.value, this._inputProdPrice.value, this._inputProdQquant.value)
    }
}

