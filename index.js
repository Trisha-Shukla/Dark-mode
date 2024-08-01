let toggle_cont=document.getElementById("box");
let circle=document.getElementById("circle");
let body=document.getElementsByTagName("body");
let value=false;

toggle_cont.addEventListener("click",()=>{
    if(!value){
        circle.classList.add("movement");
        body[0].classList.add("bg-black");
        value=true;
    }
    else{
        circle.classList.remove("movement");
        body[0].classList.remove("bg-black");
        value=false;
    }
})