var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(let i=0;i<numberOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var b=this.innerHTML;
 
  switch(b){
    case"w":
    var audio=new Audio("sound/tom-1.mp3");
    audio.play();
    break;
 
    case"a":
    var audio=new Audio("sound/tom-2.mp3");
    audio.play();
    break;

    case"s":
    var audio=new Audio("sound/tom-3.mp3");
    audio.play();
    break;

    case"d":
    var audio=new Audio("sound/tom-4.mp3");
    audio.play();
    break;
    case"j":
    var audio=new Audio("sound/snare.mp3");
    audio.play();
    break;
    case"k":
    var audio=new Audio("sound/kick-bass.mp3");
    audio.play();
    break;
    case"w":
    var audio=new Audio("sound/crash.mp3");
    audio.play();
    break;
  }
});
}


document.addEventListener("keypress",function(event){
 makesound(event,key)
});

function makesound(key){
  switch(key){
  case"w":
    var audio=new Audio("sound/tom-1.mp3");
    audio.play();
    break;
 
    case"a":
    var audio=new Audio("sound/tom-2.mp3");
    audio.play();
    break;

    case"s":
    var audio=new Audio("sound/tom-3.mp3");
    audio.play();
    break;

    case"d":
    var audio=new Audio("sound/tom-4.mp3");
    audio.play();
    break;
    case"j":
    var audio=new Audio("sound/snare.mp3");
    audio.play();
    break;
    case"k":
    var audio=new Audio("sound/kick-bass.mp3");
    audio.play();
    break;
    case"w":
    var audio=new Audio("sound/crash.mp3");
    audio.play();
    break;
  }
}
