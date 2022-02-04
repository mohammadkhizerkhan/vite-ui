const btn=document.querySelector(".btn-hide");
const badge=document.querySelector(".badge-h")

btn.addEventListener("click",()=>{
    badge.classList.toggle("badge-hide")
})