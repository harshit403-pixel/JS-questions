
// 2. THEME SWITCHER


let themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});



// 3. ROTATING DIV


let rotateBox = document.getElementById("rotateBox");
let rotationCount = 0;

rotateBox.addEventListener("dblclick", () => {
    rotationCount++;
    rotateBox.style.transform = `rotate(${rotationCount * 360}deg)`;
    rotateBox.textContent = rotationCount * 360
});



// 4. CUSTOM MAP FUNCTION


function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

let nums = [1, 2, 3];
let doubled = myMap(nums, function(num) {
    return num * 2;
});
console.log("Custom Map Result:", doubled);



// 5. GAMBLING BUTTON


let gambleBtn = document.getElementById("gambleBtn");
let gambleResult = document.getElementById("gambleResult");

gambleBtn.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * 10) + 1;

    if (randomNum > 7) {
        gambleResult.textContent = "You Win! 🎉 (Number: " + randomNum + ")";
    } else {
        gambleResult.textContent = "Try Again! (Number: " + randomNum + ")";
    }
});



// 6. HOISTING EXAMPLE


console.log(a); // undefined
var a = 10;

// console.log(b); // ReferenceError aayega
let b = 20;

hoistedFunction(); // chal jaega

function hoistedFunction() {
    console.log("Function is hoisted");
}



// 7. LIVE CHARACTER COUNTER


let textarea = document.getElementById("textarea");
let charCount = document.getElementById("charCount");

textarea.addEventListener("input", () => {
    let length = textarea.value.length;
    charCount.textContent = length + " / 100";

    if (length > 100) {
        charCount.classList.add("warning");
    } else {
        charCount.classList.remove("warning");
    }
});



// 8. PRODUCT FILTER


let products = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
let productList = document.getElementById("productList");
let searchInput = document.getElementById("searchInput");

function renderProducts(items) {
    productList.innerHTML = "";
    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        productList.appendChild(li);
    });
}

renderProducts(products);

searchInput.addEventListener("input", () => {
    let filtered = products.filter(product =>
        product.toLowerCase().startsWith(searchInput.value.toLowerCase())
    );
    renderProducts(filtered);
});



// 9. DYNAMIC CARD GENERATOR


let addCard = document.getElementById("addCard");
let cardContainer = document.getElementById("cardContainer");

addCard.addEventListener("click", () => {
    let name = prompt("Enter name:");
    let image = prompt("Enter image URL:");

    let card = document.createElement("div");
    card.className = "card";

    let h3 = document.createElement("h3");
    h3.textContent = name;

    let img = document.createElement("img");
    img.src = image;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", () => {
        card.remove();
    });

    card.appendChild(h3);
    card.appendChild(img);
    card.appendChild(delBtn);

    cardContainer.appendChild(card);
});



// 10. OBJECT CLONE WITHOUT SPREAD


let user = {
    name: "Harshit",
    age: 20,
    role: "Student"
};

function cloneAndUpdate(obj, key, value) {
    let newObj = Object.assign({}, obj);
    newObj[key] = value;
    return newObj;
}

let updatedUser = cloneAndUpdate(user, "role", "Developer");
console.log("Original:", user);
console.log("Cloned & Updated:", updatedUser);