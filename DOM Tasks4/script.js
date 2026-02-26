let shoes = [
    {
      "shoesName": "Air Zoom Runner",
      "color": ["Black", "White", "Red"],
      "sizeRange": "6-11",
      "available": true,
      "brandName": "Nike",
      "category": "mens",
      "latest": "yes",
      "price": 4999,
      "img1": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FQ8249-104_4.jpg?rnd=20200526195200&tr=w-1536",
      "img2": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FQ8249-104_7.jpg?rnd=20200526195200&tr=w-1536",
      "bgImage": "https://i.pinimg.com/736x/6b/9e/23/6b9e237916672b55ef55062098afa0b9.jpg"
    },
    {
      "shoesName": "Ultraboost X",
      "color": ["White", "Pink"],
      "sizeRange": "5-9",
      "available": true,
      "brandName": "Adidas",
      "category": "women",
      "latest": "no",
      "price": 6999,
      "img1": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/34969231aeec4787bfcc3d1e44f7e9fa_9366/Adizero_EVO_SL_Shoes_Red_KK3677_01_00_standard.jpg",
      "img2": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a1b2bc1003e4661a6c2393df2bbac54_9366/Adizero_EVO_SL_Shoes_Red_KK3677_42_detail.jpg",
      "bgImage": "https://i.pinimg.com/1200x/b2/94/92/b29492949f1599cda19116029a31d2f9.jpg"
    },
    {
      "shoesName": "Classic Leather Pro",
      "color": ["Brown", "Black"],
      "sizeRange": "7-12",
      "available": false,
      "brandName": "Puma",
      "category": "mens",
      "latest": "no",
      "price": 3999,
      "img1": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/392725/07/fnd/IND/fmt/png/Blktop-Rider-Suede-Sneakers",
      "img2": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/392725/07/sv04/fnd/IND/fmt/png/Blktop-Rider-Suede-Sneakers",
      "bgImage": "https://i.pinimg.com/736x/5b/61/97/5b61976c485c44ce0385cec0ff2d4ba1.jpg"
    },
    {
      "shoesName": "Air Jordan Retro",
      "color": ["Red", "White", "Black"],
      "sizeRange": "6-10",
      "available": true,
      "brandName": "Nike",
      "category": "mens",
      "latest": "yes",
      "price": 8999,
      "img1": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRnsItWGQ3Jxrt1YK8K9rrlDTvnPcKQudGM1PxAl4bULH_e1amUpCRDcrkIpFPaqW71A1bJWpdqrfIrNT0lFRI_Z0emxbkfXQ",
      "img2": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS6sVID0_f1yHxXHrlCRynN-UHxBR4dweCDeUYHYXpBls5P7G9K4RY-_NOEsrQ7h-gRgzxyqshi_vf0MmmwCe3iYe1nwqymlYb1W8TNvrEjzZaSmD9NrcvbrQ",
      "bgImage": "https://i.pinimg.com/736x/6b/9e/23/6b9e237916672b55ef55062098afa0b9.jpg"
    },
    {
      "shoesName": "Gel-Kayano 29",
      "color": ["Blue", "Grey"],
      "sizeRange": "5-10",
      "available": true,
      "brandName": "Comet",
      "category": "women",
      "latest": "yes",
      "price": 7499,
      "img1": "https://www.wearcomet.com/cdn/shop/files/tuscan-min_2a858dec-7839-470c-b3c3-f1488b89440f.jpg?v=1744881547&width=1100",
      "img2": "https://www.wearcomet.com/cdn/shop/files/zoom1-min_ae26abce-c5c9-49e4-be5b-b2dfd63ef2ba.jpg?v=1744881547&width=1100",
      "bgImage": "https://i.pinimg.com/1200x/84/a6/91/84a6910bee92533ca2f071a839cc0dcc.jpg"
    }
]


let main = document.querySelector("main")
let sum = ''
shoes.forEach((elem) => {
  

  sum += `        <div class="shoe-card"  style="
    background-image: url('${elem.bgImage}');
    background-position: center;
    background-size: cover;
  "> <div class="btns"> 
            <button class="left"><</button>
<div class="images">
                <img class="img1" src="${elem.img1}"
            alt="">
            <img class="img2" src="${elem.img2}"
            alt="">
            <img class="img3" src="${elem.img3}"
            alt="">
</div>
            <button class="right">></button>
            </div>
            <h2>${elem.brandName}</h2>
            <h5>${elem.shoesName}</h5>
            <h5>${elem.category}</h5>
            <div class="color">
                <div style="background-color: ${elem.color[0]};"></div>
                <div style="background-color: ${elem.color[1]};"></div>
                <div style="background-color: ${elem.color[2]};"></div>
            </div>
            <h4>Rs ${elem.price}/-</h4>

        </div>`
})



main.innerHTML = sum


let allCards = document.querySelectorAll(".shoe-card")

allCards.forEach((elem)=>{
 
  let nextBtn = elem.querySelector(".right")
  let prevBtn = elem.querySelector(".left")

  let previmg = elem.querySelector(".img1")
  let nextimg = elem.querySelector(".img2")


nextBtn.addEventListener("click", () => {



  previmg.style.transform = "scale(.8)"
  nextimg.style.transform = "translateX(-100%)"


})
  prevBtn.addEventListener("click", () => {

    
  previmg.style.transform = "scale(1)"
  nextimg.style.transform = "translateX(100%)"

})
})






