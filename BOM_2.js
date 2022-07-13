// Timing events methods
// setTimeout(), setInterval()

// setTimeOut()
//setTimeout(() => {
//    console.log("hey jackass!");
//}, 2000);

//setTimeout(display,3000);
//
//function display(){
//    console.log("U r still here jackass");
//}

/*
creating a function which will remove message from display after
a fixed time using setTimeout
*/
//const selectButton = document.querySelector(".save-btn");
//const message = document.querySelector(".message");
//
//selectButton.addEventListener("click",selectUser);
//
//function selectUser(){
//    message.textContent = "Successfully Selected"
//    setTimeout(()=>{
//        message.textContent = "";
//    }, 2000);
//}

//setInterval

const selectButton = document.querySelector(".save-btn")
const message = document.querySelector(".message")

//selectButton.addEventListener("click", displayCount);
//function displayCount(){
//    let count = 0;
//    message.textContent = count;
//
//    setInterval(() =>{
//        count++;
//        message.textContent = count;
//         if(count>10){
//        message.textContent ="";
//        }
//
//    }, 1000)
//}

//creating Clock

selectButton.addEventListener("click", startClock);

function startClock(){
    let current_date = new Date();
    let c_hours = current_date.getHours();
    let c_min = current_date.getMinutes();
    let c_sec = current_date.getSeconds();

        c_min = formatTime(c_min)
        c_sec = formatTime(c_sec)

        let time = c_hours +"-" + c_min +"-" + c_sec;

        message.textContent = time;

        setInterval(startClock,1000);
}

function formatTime(value){
    if (value < 10){
        value = "0"+ value;
    }
    return value
}