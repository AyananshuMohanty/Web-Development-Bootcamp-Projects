var kick=new Audio("./sounds/kick-bass.mp3");
var crash=new Audio("./sounds/crash.mp3");
var snare=new Audio("./sounds/snare.mp3");
var tom1=new Audio("./sounds/tom-1.mp3");
var tom2=new Audio("./sounds/tom-2.mp3");
var tom3=new Audio("./sounds/tom-3.mp3");
var tom4=new Audio("./sounds/tom-4.mp3");
var buttonList=document.querySelectorAll(".drum");
document.addEventListener("keydown",function(Event){
    keySound(Event.key);
    buttonAnimation(Event.key);
});
for(var i=0;i<buttonList.length;i++){
    buttonList[i].addEventListener("click",function(){
        keySound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}
function keySound(key){
    if(key==="a"){
        crash.play();
    }
    else if(key==="s"){
        kick.play();
    }
    else if(key==="d"){
        snare.play();
    }
    else if(key==="f"){
        tom1.play();
    }
    else if(key==="g"){
        tom2.play();
    }
    else if(key==="h"){
        tom3.play();
    }
    else if(key==="j"){
        tom4.play();
    }    
}

function buttonAnimation(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
    activeButton.classList.remove("pressed");
    },80);
}