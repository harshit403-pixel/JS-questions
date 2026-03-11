let filters = [
    {
        "name": "brightness",
        "label": "Brightness",
        "min": 0,
        "max": 200,
        "value": 100,
        "unit": "%"
    },
    {
        "name": "contrast",
        "label": "Contrast",
        "min": 0,
        "max": 200,
        "value": 100,
        "unit": "%"
    },
    {
        "name": "saturate",
        "label": "Saturation",
        "min": 0,
        "max": 200,
        "value": 100,
        "unit": "%"
    },
    {
        "name": "grayscale",
        "label": "Grayscale",
        "min": 0,
        "max": 100,
        "value": 0,
        "unit": "%"
    },
    {
        "name": "sepia",
        "label": "Sepia",
        "min": 0,
        "max": 100,
        "value": 0,
        "unit": "%"
    },
    {
        "name": "blur",
        "label": "Blur",
        "min": 0,
        "max": 10,
        "value": 0,
        "unit": "px"
    },
    {
        "name": "hue-rotate",
        "label": "Hue Rotate",
        "min": 0,
        "max": 360,
        "value": 0,
        "unit": "deg"
    },
    {
        "name": "invert",
        "label": "Invert",
        "min": 0,
        "max": 100,
        "value": 0,
        "unit": "%"
    },
    {
                "name": "opacity",
        "label": "opacity",
        "min": 0,
        "max": 100,
        "value": 100,
        "unit": "%"
    }
]


let presets = [
    {
      "name": "Normal",
      "brightness": 100,
      "contrast": 100,
      "saturate": 100,
      "grayscale": 0,
      "sepia": 0,
      "blur": 0,
      "hueRotate": 0,
      "invert": 0,
      "opacity": 100
    },
    {
      "name": "Vintage",
      "brightness": 110,
      "contrast": 120,
      "saturate": 90,
      "grayscale": 20,
      "sepia": 40,
      "blur": 0,
      "hueRotate": 10,
      "invert": 0,
      "opacity": 100
    },
    {
      "name": "Cool",
      "brightness": 105,
      "contrast": 110,
      "saturate": 120,
      "grayscale": 0,
      "sepia": 0,
      "blur": 0,
      "hueRotate": 180,
      "invert": 0,
      "opacity": 100
    },
    {
      "name": "Warm",
      "brightness": 110,
      "contrast": 105,
      "saturate": 115,
      "grayscale": 0,
      "sepia": 25,
      "blur": 0,
      "hueRotate": 15,
      "invert": 0,
      "opacity": 100
    },
    {
      "name": "Dramatic",
      "brightness": 95,
      "contrast": 150,
      "saturate": 110,
      "grayscale": 0,
      "sepia": 10,
      "blur": 0,
      "hueRotate": 0,
      "invert": 0,
      "opacity": 100
    },
    {
      "name": "Black & White",
      "brightness": 100,
      "contrast": 130,
      "saturate": 0,
      "grayscale": 100,
      "sepia": 0,
      "blur": 0,
      "hueRotate": 0,
      "invert": 0,
      "opacity": 100
    },
    {
      "name": "Soft",
      "brightness": 115,
      "contrast": 90,
      "saturate": 105,
      "grayscale": 0,
      "sepia": 10,
      "blur": 2,
      "hueRotate": 0,
      "invert": 0,
      "opacity": 100
    }

]






let imageCanvas = document.querySelector("#image-canvas")
let inputFilters = document.querySelector(".inputs")
let addBtn = document.querySelector("#uploadImage")
let canvasCtx = imageCanvas.getContext("2d")
let placeholder = document.querySelector(".placeholder")
let file = null
let image = null
let resetBtn = document.querySelector("#resetBtn")
let downloadBtn = document.querySelector("#download")
let presetBox = document.querySelector(".presets-box")


function createFilters(filters){

    filters.forEach((filter)=>{

        const wrapper = document.createElement("div")
        wrapper.classList.add("filter-item")

        const label = document.createElement("p")
        label.textContent = filter.label

        const input = document.createElement("input")
        input.type = "range"
        input.name = filter.name
        input.value = filter.value
        input.min = filter.min
        input.max = filter.max

        wrapper.appendChild(label)
        wrapper.appendChild(input)

        inputFilters.appendChild(wrapper)

input.addEventListener("input", () => {

    filters.forEach((elem)=>{
        if(elem.name === input.name){
            elem.value = input.value
            applyFilters()
        }
    })


})

resetBtn.addEventListener("click", ()=>{
    if(input.name === "brightness" || input.name === "contrast" || input.name === "saturate" || input.name === "opacity" ){
        input.value = 100

    }
    if(input.name === "grayscale" || input.name === "sepia" || input.name === "blur" || input.name === "hue-rotate" || input.name === "invert"
    ){
        input.value = 0

    }

            filters.forEach((elemi)=>{
            if(elemi.name === "brightness" || elemi.name === "contrast" || elemi.name === "saturate" || elemi.name === "opacity" ){
        elemi.value = 100

    }
    if(elemi.name === "grayscale" || elemi.name === "sepia" || elemi.name === "blur" || elemi.name === "hue-rotate" || elemi.name === "invert"
    ){
        elemi.value = 0

    }
            
        })
    applyFilters()

    
})
        
    })  




}
createFilters(filters)
 
addBtn.addEventListener("change",(dets)=>{

    placeholder.style.display  = "none"
 file = dets.target.files[0]
  let img =  new Image()
    img.src = URL.createObjectURL(file)
    
img.onload = ()=>{
 
 
    image = img
    imageCanvas.width = img.width
    imageCanvas.height = img.height
    canvasCtx.drawImage(img , 0,0)
}


    
}) 


function applyFilters(){
  
    canvasCtx.filter = `
brightness(${filters[0].value}${filters[0].unit})
contrast(${filters[1].value}${filters[1].unit})
saturate(${filters[2].value}${filters[2].unit})
grayscale(${filters[3].value}${filters[3].unit})
sepia(${filters[4].value}${filters[4].unit})
blur(${filters[5].value}${filters[5].unit})
hue-rotate(${filters[6].value}${filters[6].unit})
invert(${filters[7].value}${filters[7].unit})
opacity(${filters[8].value}${filters[8].unit})
`;
  canvasCtx.clearRect(0 , 0, imageCanvas.width, imageCanvas.height)
    canvasCtx.drawImage(image, 0 , 0)
}


downloadBtn.addEventListener("click",()=>{
    let link = document.createElement("a")
    link.download = "edited_img.png"
    link.href = imageCanvas.toDataURL()
    link.click()
})

    
function createButtons (input){
    presets.forEach((elem)=>{
    let presetBtns = document.createElement("button")  
    presetBtns.textContent = `${elem.name}`  
    presetBox.appendChild(presetBtns)  
presetBtns.addEventListener("click", () => {


    
filters.forEach((filter) => {

    let presetValue =
        filter.name === "hue-rotate"
        ? elem.hueRotate
        : elem[filter.name]

    filter.value = presetValue

    const slider = document.querySelector(`input[name="${filter.name}"]`)

    if(slider){
        slider.value = presetValue
    }

})

    applyFilters()

})
}) 
}
createButtons() 



