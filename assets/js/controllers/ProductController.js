class ProductController{

    constructor(){
        this._inputProdName = document.querySelector("#modal_item-name")
        this._inputProdPrice = document.querySelector("#modal_item-price")
        this._inputProdQquant = document.querySelector("#modal_item-quant")

        this._localStorageDB = new LocalStorageDB()
    }

    newProduct(event){
        event.preventDefault()
        
        const product = new Product(this._inputProdName.value, this._inputProdPrice.value, this._inputProdQquant.value)  
        
        this._localStorageDB.saveItemDB(product)

        console.log(this._localStorageDB.localStorageData)
    }
}

