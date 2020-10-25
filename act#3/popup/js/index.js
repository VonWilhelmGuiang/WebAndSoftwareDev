let popupBtn = document.getElementById("vwg-popupBtn");
let modal = document.getElementById("vwg-modal");
let closeBtn = document.getElementById("vwg-closeBtn");
popupBtn.addEventListener("click",()=>{
    modal.style.opacity = 1;
    modal.style.visibility = "visible";
});
closeBtn.addEventListener("click",()=>{
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";    
});
