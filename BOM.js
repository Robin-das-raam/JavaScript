// Browser Object Model
// window object
// location object
console.clear()

//href
console.log(location.href);

//protocol
console.log(location.protocol);

//hostname
console.log(location.hostname);

//port
console.log(location.port);

//pathname
console.log(location.pathname)

var locationDiv = document.querySelector(".location-div");

//for accessing the children of parent
var p1 = locationDiv.children[0]
p1.textContent = location.href

var p2 = locationDiv.children[1]
p2.textContent = location.protocol

var p3 = locationDiv.children[2]
p3.textContent = location.hostname

var p4 = locationDiv.children[3]
p4.textContent = location.port

var p5 = locationDiv.children[4]
p5.textContent = location.pathname

const profile = document.getElementById("visit-button")
profile.addEventListener("click", function(){
    location.assign("https://www.linkedin.com/in/robin-das-a25980198/");
});

/*
Js BOM - Popup boxes - alert,confirm, prompt
*/
//alert

alert("error here")

//confirm
confirm("Are you sure?")

function deleteSomething(){
    var value = confirm("Delete?");
    if(value){
        console.log("deleted")
    }
    else{
        console.log("not deleted")
    }
}

deleteSomething();

//prompt

function welcomeMessage(){
//crating H1 element
var h1 = document.createElement("h1");
var text;

var name = prompt("Enter your name: ")
if (name == null || name==''){
    text = "No name found"
    }
else{
    text = name
}
var textNode = document.createTextNode(text);
h1.appendChild(textNode)
document.body.appendChild(h1);
}

welcomeMessage();