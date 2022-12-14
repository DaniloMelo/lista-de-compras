class ProductController{

    constructor(){
        this._inputProdName = document.querySelector("#modal_item-name")
        this._inputProdPrice = document.querySelector("#modal_item-price")
        this._inputProdQquant = document.querySelector("#modal_item-quant")
        
        this._btnsAddItem = document.querySelectorAll(".new-item")

        this._localStorageDB = new LocalStorageDB()

        this._modal = new Modal()
        this._modal.toggle()

        this._productListView = new ProductListView(document.querySelector(".list"))
        this._productListView.update(this._localStorageDB)

        this._listItemDropDown = new ListItemDropDown()
        this._listItemDropDown.dropDown()         
    }

    newProduct(event){
        event.preventDefault()
        
        const product = new Product(this._inputProdName.value, this._inputProdPrice.value, this._inputProdQquant.value)  
        
        this._localStorageDB.saveItemDB(product)

        this._productListView.update(this._localStorageDB)

        this._listItemDropDown.dropDown()
        
        this._formCleaner()
    }

    

    _formCleaner(){
        this._inputProdName.value = ""
        this._inputProdPrice.value = ""
        this._inputProdQquant.value = ""  
        
        document.querySelector(".modal_btn-cancel").addEventListener("click", ()=>{
            this._inputProdName.value = ""
            this._inputProdPrice.value = ""
            this._inputProdQquant.value = "" 
        })
    }
}

