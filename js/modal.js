const modal_btn=document.querySelectorAll(".modal-btn")
const modal=document.querySelector(".modal-block")
const modal_close_btn=document.querySelector(".modal-X-btn")

modal_btn.forEach(each=>{
    each.addEventListener("click",()=>{
        modal.classList.toggle("modal-hide")
    })
})

modal.addEventListener("click",(e)=>{
    if(e.target==modal){
        modal.classList.toggle("modal-hide")
    }
})

modal_close_btn.addEventListener("click",()=>{
    modal.classList.toggle("modal-hide")
})