const bulb = document.querySelector("#bulb");
const bulbswitch = document.querySelector("#bulbswitch");

bulbswitch.addEventListener("click",function(){
    console.log(bulb.src);
    if (bulb.src.match("off")){
        bulb.src = "pic_bulbon.gif";
        bulbswitch.innerHTML ="Turn off";
        
    }else{
        bulb.src = "pic_bulboff.gif";
        bulbswitch.innerHTML ="Turn on";
    }
  
})
