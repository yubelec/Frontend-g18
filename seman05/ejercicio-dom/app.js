//aca haremos la dinamica 
let button = document.querySelector(".switch");
let circle = document.querySelector(".circle");
let mode = "light";// elemento activo
let title = document.querySelector("h1");
let container =document.querySelector(".container");


function lightMode (){
    button.className = "switch";
    container.className = "container";
    circle.className = "circle";
    title.textContent = "Bienvenido al g18";
}

function darkMode (){
    button.className = "darkButton";
    container.className = "darkContainer";
    circle.className = "darkCircle";
    title.textContent= "guillermo"
}

circle.addEventListener("click",()=>{
    if(mode == "light"){
        darkMode();
        mode= "dark"
    }else{
        lightMode();
        mode = "light"
    }

})