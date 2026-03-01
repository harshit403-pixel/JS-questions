
let products = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    name: "Apple",
    category: "Fruits",
    quantity: "1 kg",
    price: 120,
    expiry: "5 days",
    image: "https://i.pinimg.com/736x/3d/46/8d/3d468dc246143f52fff3514fcc49dc2b.jpg"
  },
  {
    id: 2,
    name: "Banana",
    category: "Fruits",
    quantity: "1 dozen",
    price: 60,
    expiry: "4 days",
    image: "https://i.pinimg.com/736x/89/59/73/895973b47f07f22ea0aabbb2c0f8f2ca.jpg"
  },
  {
    id: 3,
    name: "Tomato",
    category: "Vegetables",
    quantity: "1 kg",
    price: 40,
    expiry: "3 days",
    image: "https://i.pinimg.com/736x/33/eb/a5/33eba579d76a096f19e4e20630daeb28.jpg"
  },
  {
    id: 4,
    name: "Potato",
    category: "Vegetables",
    quantity: "1 kg",
    price: 30,
    expiry: "7 days",
    image: "https://i.pinimg.com/736x/87/45/2f/87452f2aec649ba5fb138fd5015764d1.jpg"
  }
];

let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [

]
let home = document.querySelector("#home-btn")
let btn = document.querySelector("#cart-btn")
let cartPage = document.querySelector(".cart")
let card = document.querySelector(".item-cards")
let form = document.querySelector("form")

function printCard(){
    let sum = ''
products.forEach((elem,idx)=>{
    
    sum += `  
              <div class="card">
                <img src="${elem.image}" alt="">
                <div class="details">
                    <h2>${elem.name}</h2>
                    <h3>Category : ${elem.category} </h3>
                    <h3>Quantity : ${elem.quantity}</h3>
                    <h3>Price : ₹${elem.price}/- </h3>
                    <h3>Expiry : ${elem.expiry} </h3>
                    <button id="${idx}" >Add to Cart</button>
                    <button id="${idx}" >Remove</button>
                </div>
            </div>
        </div>`

        
    })
    card.innerHTML = sum
}
printCard()


 function deleteItem(id){

    let result =  products.filter((elem,idx)=>{
            return idx!= id
        })
        console.log(result);
        products = result
    localStorage.setItem("products", JSON.stringify(products));   
        printCard()

 }




form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let newItem = {
    name: form.childNodes[1].value,
    image:form.childNodes[3].value,
    category: form.childNodes[5].value,
    quantity: form.childNodes[7].value,
    price: form.childNodes[9].value,
    expiry:form.childNodes[11].value

    }
    products.push(newItem)

    localStorage.setItem("products", JSON.stringify(products));   
    printCard()
  
})


btn.addEventListener("click",()=>{
    cartPage.style.height = "100%"
    cartPage.style.paddingTop = "20px" 
})

home.addEventListener("click",()=>{
        cartPage.style.height = "0%"
    cartPage.style.paddingTop = "0px"
})

function renderCart() {
  let cardhtml = '';

  cartProducts.forEach((element, idx) => {
    cardhtml += `
      <div class="card"> 
        <img src="${element.image}" alt="">
        <div class="details">
          <h2>${element.name}</h2>
          <h3>Price : ₹${element.price}/-</h3>
          <button id="${idx}" class="remove-btn">Remove</button>
        </div>
      </div>
    `;
  });

  cartPage.innerHTML = cardhtml;
}

card.addEventListener("click",(dets)=>{
    if(dets.target.id && dets.target.textContent == "Add to Cart"){  
        let cartItem = products[dets.target.id]
        cartProducts.push(cartItem)
        localStorage.setItem("cartProducts",JSON.stringify(cartProducts))
        renderCart()
    }

    if(dets.target.id && dets.target.innerHTML == "Remove" ){
      deleteItem(dets.target.id)

        
    }

    
})


 function deleteCart(id){

    let result =  cartProducts.filter((elem,idx)=>{
            return idx!= id
        })
        console.log(result);
        cartProducts = result
                localStorage.setItem("cartProducts",JSON.stringify(cartProducts))
         renderCart()

 }
 cartPage.addEventListener("click",(detss)=>{
    
    if(detss.target.id){
        deleteCart(detss.target.id)
    }
 })
  renderCart()