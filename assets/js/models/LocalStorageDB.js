class LocalStorageDB{

    get localStorageData(){
        return JSON.parse(localStorage.getItem("shoppingListDB")) ?? []
    }

    set localStorageData(data){
        localStorage.setItem("shoppingListDB", JSON.stringify(data))
    }

    saveItemDB(data){
        const dBData = this.localStorageData
        dBData.push(data)
        this.localStorageData = dBData     
    }

    updateItemDB(data, index){
        const dBData = this.localStorageData
        dBData[index] = data
        this.localStorageData = dBData
    }

    deleteItemDB(index){
        const dBData = this.localStorageData
        dBData.splice(index, 1)
        this.localStorageData = dBData
    }

}

// let temp = {
//     itemName: "teste temp", 
//     itemPrice: "teste temp", 
//     itemQuant: "teste temp" 
// }

// let temp2 = {
//     itemName: "teste temp2222", 
//     itemPrice: "teste temp2222", 
//     itemQuant: "teste temp2222" 
// }

// const teste = new LocalStorageDB()
// console.log(teste.localStorageData);

// teste.saveItemDB(temp)
// teste.saveItemDB(temp)
// teste.saveItemDB(temp)
// teste.saveItemDB(temp)
// teste.saveItemDB(temp)

// console.log(teste.localStorageData)

// teste.updateItemDB(temp2, 2)

// console.log(teste.localStorageData);


// teste.deleteItemDB(2)

// console.log(teste.localStorageData);