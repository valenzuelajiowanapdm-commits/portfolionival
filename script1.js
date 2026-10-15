//const to add the element of output
const h3 = document.getElementById("Output")

//const to add the element of button 1
const btn1 = document.getElementById("Button1")

//button one click

btn1.addEventListener(
    "click",function(){
        Output.innerHTML = "Welcome to JavaScript"
        Output.style.backgroundColor = "yellowgreen"
        Output.style.color = "blue"
    }
)

//button double click

//const to add the element of button 2
const btn2 = document.getElementById("Button2")

btn2.addEventListener(
    "dblclick",function(){
        Output.innerHTML = "Welcome to PDM"
        Output.style.backgroundColor = "Pink"
        Output.style.color = "brown"
    }
)

//const to add the element of input
const Input = document.getElementById("Input1")

Input.addEventListener(
    "change",function(){
        Output.innerHTML =
        "Hello:" + Input.value + "!"
        Input.style.color = "blue"
    }
)

Input.addEventListener(
    "input",function(){
        Output.innerHTML = "Welcome:" + Input.value + "!"
    }
)


Input.addEventListener(
    "focus",function(){
        Input.style.backgroundColor = "yellow"
    }
)

Input.addEventListener(
    "blur",function(){
        Input.style.backgroundColor = "white"
    }
)

//const to add the element of image
const img1 = document.getElementById("Image1")

//image mouse hover

img1.addEventListener(
    "mouseover",function(){
        Output.innerHTML = " Your Mouse reaches the image"
        Output.style.color = "green"
    }
)

//image mouse out
img1.addEventListener(
    "mouseout",function(){
        Output.innerHTML = " Your Mouse leaves the image"
        Output.style.color = "red"
    }
)
