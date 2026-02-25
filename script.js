let allCards = document.querySelectorAll(".card")

allCards.forEach((elem)=>{

    if(elem.childNodes[3].textContent == "STRANGER"){
        
  elem.childNodes[5].addEventListener("click",()=>{
    elem.childNodes[3].textContent = "Friend"
    elem.childNodes[3].style.color = "green"
     elem.childNodes[5].textContent = "REMOVE FRIEND"
    })
}
else{
    elem.childNodes[5].addEventListener("click",()=>{
        elem.childNodes[3].textContent = "STRANGER"
        elem.childNodes[3].style.color = "red"
        elem.childNodes[5].textContent = "ADD FRIEND"
    })
    }
    
    
})