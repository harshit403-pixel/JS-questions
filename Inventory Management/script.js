// const players = [
//   {
//     name: "Neymar Jr.",
//     jerseyNumber: 11,
//     age: 28,
//     position: "Forward",
//     country: "Brazil",
//     playerImage: "https://www.pngplay.com/wp-content/uploads/13/Neymar-PSG-Download-Free-PNG.png",
//     clubLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1280px-Paris_Saint-Germain_F.C..svg.png"
//   },
//   {
//     name: "Lionel Messi",
//     jerseyNumber: 10,
//     age: 35,
//     position: "Forward",
//     country: "Argentina",
//     playerImage: "https://crystalpng.com/wp-content/uploads/2025/02/Lionel-Messi-logo-png-02.png",
//     clubLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/1280px-Inter_Miami_CF_logo.svg.png"
//   }
// ];
let editIndex = null;
let  players = JSON.parse(localStorage.getItem("players")) || [];
let form = document.querySelector("form")
let main = document.querySelector("main")



function printData() {
    let sum = ''
    players.forEach((elem, idx) => {
        sum += `
        <div class="player-card">
        
             <img class="player-pic" src="${elem.playerImage}" alt="">
        
            <div class="jersey-club">
                <h2>${elem.jerseyNumber}</h2>
                <img class="logo" src="${elem.clubLogo}" alt="">
            </div>
            <div class="name"><h1>${elem.name}</h1></div>
            <div class="player-stats">
                <div class="age">
                    <h4>age</h4>
                    <h2>${elem.age}</h2>
                </div>
                <div class="age">
                    <h4>position</h4>
                    <h2>${elem.position}</h2>
                </div>  
                <div class="age">
                    <h4>country</h4> 
                    <h2>${elem.country}</h2>
                </div> 
                </div>
                <div class="btns"><button id="${idx}">Edit</button> <button  id="${idx}" class="remove">Remove</button></div> 
        </div>`

    })
    main.innerHTML = sum
}

printData()


form.addEventListener("submit", (dets) => {
    dets.preventDefault()
    let newPlayer = {
        name: form.childNodes[7].value,
        jerseyNumber: form.childNodes[1].value,
        age: form.childNodes[9].value,
        position: form.childNodes[11].value,
        country: form.childNodes[13].value,
        playerImage: form.childNodes[3].value,
        clubLogo: form.childNodes[5].value
    }
    if (editIndex === null) {
       
        players.push(newPlayer);
    } else {
   
        players.splice(editIndex, 1, newPlayer);
        editIndex = null;
    }
    localStorage.setItem("players", JSON.stringify(players));
    form.reset()
    printData()
    console.log(players);

})

main.addEventListener('click', function (dets) {
    if (dets.target.id && dets.target.innerHTML == 'Remove') {
        players.splice(Number(dets.target.id), 1)
        localStorage.setItem("players", JSON.stringify(players));
    }
        if (dets.target.id && dets.target.innerHTML == 'Edit') {
    editIndex = Number(dets.target.id); 

    let editFile = players[editIndex];

    form.childNodes[1].value = editFile.jerseyNumber;
    form.childNodes[3].value = editFile.playerImage;
    form.childNodes[5].value = editFile.clubLogo;
    form.childNodes[7].value = editFile.name;
    form.childNodes[9].value = editFile.age;
    form.childNodes[11].value = editFile.position;
    form.childNodes[13].value = editFile.country;  

    }
    printData()
})
