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

