const products = [
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
  },
  {
    id: 5,
    name: "Milk",
    category: "Dairy",
    quantity: "500 ml",
    price: 28,
    expiry: "2 days",
    image: "https://i.pinimg.com/736x/7f/7b/dd/7f7bdd703beb19c8bb3e3bbb6b1b20ba.jpg"
  },
  {
    id: 6,
    name: "Bread",
    category: "Bakery",
    quantity: "1 pack",
    price: 35,
    expiry: "4 days",
    image: "https://i.pinimg.com/736x/58/c8/ad/58c8adbf24a282eaef263829e105b1ff.jpg"
  },
  {
    id: 7,
    name: "Lay's Chips",
    category: "Snacks",
    quantity: "52 g",
    price: 20,
    expiry: "3 months",
    image: "https://i.pinimg.com/1200x/eb/58/04/eb5804becff9da49099ef38799f8455e.jpg"
  },
  {
    id: 8,
    name: "Coca Cola",
    category: "Beverages",
    quantity: "750 ml",
    price: 40,
    expiry: "6 months",
    image: "https://i.pinimg.com/736x/38/15/8d/38158d0aa6554f1a231df49626848cf3.jpg"
  },
  {
    id: 9,
    name: "Eggs",
    category: "Poultry",
    quantity: "12 pieces",
    price: 75,
    expiry: "10 days",
    image: "https://i.pinimg.com/1200x/ac/20/04/ac2004a565f6771949bcec3351d38b7a.jpg"
  },
  {
    id: 10,
    name: "Rice",
    category: "Groceries",
    quantity: "1 kg",
    price: 55,
    expiry: "12 months",
    image: "https://i.pinimg.com/736x/79/c4/5a/79c45aacd5dfbd3ff53cc4fd5275dbcb.jpg"
  }
];

let card = document.querySelector(".item-cards")

function printCard(){
    let sum = ''
products.forEach((elem)=>{
    sum += `  
              <div class="card">
                <img src="${elem.image}" alt="">
                <div class="details">
                    <h2>${elem.name}</h2>
                    <h3>Category : ${elem.category} </h3>
                    <h3>Quantity : ${elem.quantity}</h3>
                    <h3>Price : ₹${elem.price}/- </h3>
                    <h3>Expiry : ${elem.expiry} </h3>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>`

        card.innerHTML = sum
    })
}
printCard()

let form = document.querySelector("form")

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
    printCard()
  
})


let btn = document.querySelector(".cart")