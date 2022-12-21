class Product {

    constructor(prodName, prodPrice, prodQuant){
        this._prodName = prodName
        this._prodPrice = prodPrice
        this._prodQuant = prodQuant
    }

    get prodName(){
        return this._prodName
    }

    get prodPrice(){
        return this._prodPrice
    }

    get prodQuant(){
        return this._prodQuant
    }

    get volume (){
        return this._prodPrice * this._prodQuant
    }
}



