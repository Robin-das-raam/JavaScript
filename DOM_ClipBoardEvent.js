//ClipBoard Event Object
// OnCopy
// OnCut
// OnPaste

//const input = document.querySelector("input");
//
//input.addEventListener("copy", function(){
//    console.log("Copied")
//});
//
//input.addEventListener("cut", function(){
//    console.log("Cut")
//});
//
//input.addEventListener("paste", function(){
//    console.log("Paste")
//});
//
//const p = document.querySelector("p");
//
//input.addEventListener("copy", function(){
//    p.innerText = "Text Copied"
//});
//
//input.addEventListener("cut",function(){
//    p.innerText = "Text Cut"
//});
//
//input.addEventListener("paste",function(){
//    p.innerText = "Text Pasted"
//})

/*
Drag Evnet Object
1. ondragstart
2. ondrag
3. ondragend
4. ondragenter
5. ondragleave
6. ondragover
7. ondrop
*/

const div = document.querySelector("div");
const p = document.querySelector("p");

p.addEventListener("dragstart",function(e) {
  e.dataTransfer.setData("Text",e.target.id);
});

div.addEventListener("dragover",function(e){
    e.preventDefault();
});

div.addEventListener("drop", function(e){
    let id = e.dataTransfer.getData("Text")
    console.log(id);
    div.appendChild(document.getElementById(id));
    e.preventDefault();
});