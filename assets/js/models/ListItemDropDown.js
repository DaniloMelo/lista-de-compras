class ListItemDropDown{

    dropDown(){
        this._listItems = document.querySelectorAll(".list-item")

        this._listItems.forEach(element => {
            element.addEventListener("click", (event)=>{
                if (event.target.classList.contains("list-item_name")) {
                    event.target.nextElementSibling.classList.toggle("hide-list-options")
                }
            })
        })
    }
}