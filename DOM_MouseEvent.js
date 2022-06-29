// MouseEvent --
//    1. onClick
//    2. onDoubleClick
//    3. onMouseDown
//    4. onMouseUp
//    5. onMouseEnter
//    6. onMouseLeave
//    7. onMouseMove
//    8. onMouseOver

console.clear();
const div = document.querySelector("div")

//1.onClick Event
div.addEventListener("click", function(e){
    console.log("On Click Event ")
})

//2. ondblClick Event
div.addEventListener("dblclick", function(e){
    console.log("Double Click Event")
})

//3. Mouse Down Event
div.addEventListener("mousedown", function(e){
    console.log("Mouse Down Event")
})

//4. Mouse Up Event
div.addEventListener("mouseup", function(e){
    console.log("Mouse Up Event")
})

//5. Mouse Enter Event
div.addEventListener("mouseenter", function(e){
    console.log("Mouse Enter Event")
})

//6. Mouse Leave Event
div.addEventListener("mouseleave", function(e){
    console.log("Mouse Leave Event")
})

//7. Mouse Over Event
div.addEventListener("mouseover", function(e){
    console.log("Mouse over Event")
})

8. Mouse Move Event
div.addEventListener("mousemove", function(e){
    console.log("Mouse Move Event")
})

div.addEventListener("mousemove", function(e){
//    console.log("clientX =",e.clientX,
//    "clientY =",e.clientY)
//
//    //offset
//    console.log("offsetX =",e.offsetX,
//    "offsetY =",e.offsetY)
//})

//Mouse Click Event
//div.addEventListener("click", function(e){
//    //console.log(e.target)
//    //console.log(e.target.id)
//    //console.log(e.target.className)
//    //console.log(e.target.innerHTML)
//    //console.log(e.target.textContent)
//    console.log(e.target.innerText)
//})

// adding Event in button

const buttons = document.querySelectorAll(".btn");

//converting node list into array for mapping
Array.from(buttons).map((button) => {
    button.addEventListener("click", function(e){
        console.log(e.target.innerText)
    })
})