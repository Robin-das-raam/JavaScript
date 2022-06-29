// Change Event
// <input -/> - text,number,password,email,color,radio,checkbox, search, time,
//                time, date, datetime, wek, month, url,text,file
// <select>,
// <textarea>


const input = document.querySelector("input");

input.addEventListener("change",changeHandler);

function changeHandler(e){
    //console.log(e);
    //console.log(e.target)
    //for finding the class from input tag
    console.log(e.target.className)
    console.log(e.target.id)
    //for getting the value
    console.log(e.target.value)
}

//change Event with input
const programs = document.querySelectorAll("input[name=program]");

Array.from(programs).map((program) =>
{
    program.addEventListener("change", programHandler);
});

function programHandler(e) {
    if(e.target.checked){
        console.log(e.target.value)
    }
}

//change Event with Select tag

const Dept = document.querySelector("#dept")

Dept.addEventListener("change", deptHandler);

function deptHandler(e){
    console.log(e.target.value);
}

// Event Object | onsubmit event
//finding the element

const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password")

form.addEventListener("submit" , formHandler);

function formHandler(e){
    e.preventDefault();
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);

    //sending info as object
    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value,
    };

    console.log(userInfo);
    name.value="";
    email.value="";
    password.value="";
}