// KeyBoard Event Object
//1. Keydown - pressing a key, can repeat
//2. Keypress
//3. KeyUp
//4. some properties - key, keyCode, code, shiftKey, ctlKey, repeat

//KeyDown object

const textarea = document.querySelector("textarea");

textarea.addEventListener("keydown", function(e){
    console.log('Key Down Event')
});

//Key press object
textarea.addEventListener("keypress", function(e){
    console.log("Key Press Event")
});

//Key up Object
textarea.addEventListener("keyup", function(e){
    console.log("Key Up Event")
});

//KeyEvent  Key properties
textarea.addEventListener("keyup", function(e){
    //console.log(e.key)
    //console.log(e.keyCode)
    //console.log(e.code)
    console.log(e.shiftKey)
})

textarea.addEventListener("keyup",function(e){
    if(e.shiftKey){
        console.log("shift" + e.key)
    }
});

//repeat property
textarea.addEventListener("keydown",function(e){
    if(e.repeat){
        alert("don't hold the key asshole")
    }
});