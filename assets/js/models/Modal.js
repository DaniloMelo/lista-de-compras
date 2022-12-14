class Modal {

    constructor(){
        this._btns = [
            document.querySelector(".new-item"),
            document.querySelector(".new-item_desk"),
            document.querySelector(".modal_btn-add-item"),
            document.querySelector(".modal_btn-cancel"),
        ]

        this._modal = document.querySelector(".modal")
        this._fade = document.querySelector(".fade")
        
    }

    toggle(){
        this._btns.forEach( btn => {
            btn.addEventListener("click", (event)=>{
                this._modal.classList.toggle("hide")
                this._fade.classList.toggle("hide")
            })
        })
    }
}