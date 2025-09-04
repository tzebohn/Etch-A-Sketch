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