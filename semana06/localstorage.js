//captura del elemento que dispara un evento
const btnLogin = document.querySelector('#btn-login');

//la funcion y el evento
 btnLogin.onclick = function(event){
 event.preventDefault ();

 const inputs = document.querySelectorAll('input')
 //inserta un valor o almacenar a localstorage

 inputs.forEach((input)=>{

    console.log(inputs)
    localStorage.setItem(input.name , input.value)
 })
 login();
}

// esta es la forma de captura elemento del localstorage
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');

function login(){
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    form.style.display="none";
    usuarioSection.style.display="block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password;
}

const form = document.querySelector('#section-login');
const usuarioSection = document.querySelector('#section-logged');
const titleEmail = document.querySelector('#email');
const titlePassword = document.querySelector('#password');

const btnCerrarSesion = document.querySelector('#cerrar-sesion');

if (email !== null && password !==null){

}else{
    usuarioSection.style.display="none"
}

btnCerrarSesion.onclick = function(){
    localStorage.clear();

    form.style.display="block";
    usuarioSection.style.display="none";
}
