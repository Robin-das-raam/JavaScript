
var myVar = document.querySelector("#pid");

function addStyle(){
    myVar.classList.add("para-style");
}

function removeStyle(){
     myVar.classList.remove("para-style");
}


// Event Listener
//click

var my_var = document.querySelector("h1");

my_var.addEventListener("click", function(){
    alert("hi");
});

//Mouseover Event Listener

var my_var2 = document.querySelector("h2")

my_var2.addEventListener("mouseover",function(){
    my_var2.classList.add("para-style");
});

// mouseout Event Listener

var my_var3 = document.querySelector("h3")

my_var3.addEventListener("mouseover", function(){
    my_var3.classList.add("para-style")
});

my_var3.removeEventLister("mouseout", function(){
    my_var3.classList.remove("para-style")
});

//Event Listener for Multiple Event

var l = document.querySelectorAll(".my_button").length;

for(var i = 0;i < l; i++){
    document.querySelectorAll(".my_button")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        document.querySelector("#hid").innerHTML = text + " is my Dream Car";
    });
}

// KeyPress Event Listener

document.addEventListener("keypress",function(event){
    var text = event.key;

    document.querySelector("#kid").innerHTML = "You have pressed "+ text;
})

// KeyPress event listener with textarea tag

count = 0;
document.querySelector("textarea").addEventListener("keypress",function(event){
    count++
    var txt = event.key;
    document.querySelector("#h5").innerHTML = "You have pressed " + count + "keys";

});