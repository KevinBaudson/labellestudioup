const btnOpen = document.querySelector(".btn-mobile")
const divMenu = document.querySelector(".menu")

btnOpen.addEventListener('click', ()=>{
    
    if(divMenu.style.display === "none"){
        divMenu.style.display = "block"
        

    } else{
        divMenu.style.display = "none"
    }
})

function closeMenu(){
    divMenu.style.display = "none"
}

