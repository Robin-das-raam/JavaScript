//getElementById

var heading1 = document.getElementById("id1");
heading1.innerHTML = "JavaScript DOM"

//var heading2 = document.getElementById("id2");
//heading2.innerHTML = "We have some great quality and tasty fruits"

//getElementsByTagName

var fruit = document.getElementsByTagName("li")[4];
fruit.innerHTML = "Blackberry"

var fruit1 = document.getElementsByTagName("li")[3];
fruit1.innerHTML = "Lichies"

//getElementsByClassName

var food = document.getElementsByClassName("heavy")[0];
food.innerHTML = "List of available foods"

//querySelector
//for select id we need to put # before id
//for select class we need to put . before class name
var heading3 = document.querySelector("#id3");
heading3.innerHTML = "Here is your ordered fruits"

var food1 = document.querySelector(".fclass");
food1.innerHTML = "List of available items"


document.querySelector(".heavy","a").innerHTML = "Updated list of items"

//button onclick
function order(){
    document.write("Make your order Plzz!")
}

//image showing using querySelector
var myImg = document.querySelector("#pid");

function myImages(){
    myImg.src = "images/WhatsApp Image 2022-05-17 at 10.26.59 PM.jpeg";
}

//creating html Element
var li_6 = document.createElement("li");
var text = document.createTextNode("Ramen")

li_6.appendChild(text);

var nxt = document.getElementById("aa")
nxt.appendChild(li_6)

//create another html Element

var f_li = document.createElement("li")
var txt = document.createTextNode("Dragon Fruit")

f_li.appendChild(txt)

var fr_li = document.getElementById("abc")
fr_li.appendChild(f_li)

//Create element using InsertBefore
var f_li2 = document.createElement("li")
var txt1 = document.createTextNode("Taal")
f_li2.appendChild(txt1);

var tag = document.getElementsByTagName("li")[1]
fr_li.insertBefore(f_li2, tag)

//remove element
var n_tag = document.querySelector(".c")
var food_li = document.getElementById("aa")

food_li.removeChild(n_tag)

//traversing
//Downwards
const a1 = document.querySelector("#aa")
const child_a1 = a1.querySelector(".c")

const food_list = document.querySelector("#aa")
food_list.children

//upwards
//finding parent
const x1 = document.querySelector(".b")
const x1_p = x1.parentElement

//sideways --> nextElementSibling , previousElementSibling

nxt_sib_x1 = x1.nextElementSibling
prev_sib_x1 = x1.previousElementSibling
