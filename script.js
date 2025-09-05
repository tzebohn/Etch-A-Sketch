//Get the color input from user
const colorInput = document.getElementById("colorInput")

//Display the current color
const colorBox = document.getElementById("colorBox")
colorBox.style.backgroundColor = colorInput.value //Default color is #000000

//Add event listener for colorBox
colorBox.addEventListener("click", () => {
    colorInput.click()
})

//Update box color after picking a new one
colorInput.addEventListener("input", () => {
    colorBox.style.backgroundColor = colorInput.value
})

//Get the slider input from user
const sliderInput = document.getElementById("sliderInput")

//Display the current slider value
const sliderValue = document.getElementById("sliderValue")
sliderValue.textContent = `${sliderInput.value}x${sliderInput.value}`

//Add event listener for sliderInput
sliderInput.addEventListener("input", () => {
    sliderValue.textContent = `${sliderInput.value}x${sliderInput.value}` //Update display
    generateCanvas(sliderInput.value) //Generate the 
})

//Generate canvas with slider input
const canvas = document.getElementById("canvas")

//Allow a click and drag to draw feature for user
let isDrawing = false
document.addEventListener("pointerdown", () => isDrawing = true)
document.addEventListener("pointerup", () => isDrawing = false)

//Generate the default canvas
generateCanvas(sliderInput.value)

// This function takes in the slider input and generates canvas
function generateCanvas(num) {
    //Clear previous canvas
    canvas.innerHTML = ""

    //Calculate the width of each square
    let width = 100 / num

    //Create the squares
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement("div")
        square.className = "square"
        square.style.width = `${width}%`
        square.addEventListener("pointerdown", paint)
        square.addEventListener("pointerenter", (e) => { 
            if(isDrawing) {
                paint(e)
            }
        })
        canvas.appendChild(square)
    }
}

//Paints the corresponding square
function paint(e) {
    console.log("called")
    e.target.style.backgroundColor = colorInput.value
}

