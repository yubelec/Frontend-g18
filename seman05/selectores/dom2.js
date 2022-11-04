// sera posible esvribir desde js a html
// asi comoobteemo elementes tambien puedo crealos

document.write("hola genteeee");
document.write("hola genteeee  con tembloress")

//-----------------

// vamos a crea una listaaaa usando js  y l insertaremos en nuestro html 
//createElement("li")

//retos : quiero crear una lista con losa dtoa dque tngo d los inputs

const input= Array.from( document.querySelectorAll("input"))
//obtner mi contenedor 
const contenedor = document.querySelector("#container-list")
//vamos a crear el ul dede js
const ul = document.createElement("ul")
//ahora debo llenar mi lista debemos recorre el input  nodelist

input.map((element)=>{
    // en la interaccion debo crea cada elemento de mi lista 
    const li = document.createElement("li");
    //debo crea el valor de mi li , es input value 
    //createTextNode : crea los valors para mis elementos html
    const elementText= document.createTextNode(element.value);
    //ahora debo inserta el valor de mis li 
    li.appendChild(elementText)
    //debo agregarlo a mi lista
    ul.appendChild(li);
})

contenedor.appendChild(ul);
console.log(ul)

// que en js todo es un objeto 

const  body = document.body;
body.style.backgroundColor="red"
body.style.fontFamily = "Helvetica"
body.style.color = "#fff"