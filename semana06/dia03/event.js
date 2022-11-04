const btnPrueba = document.querySelector('#btn-prueba')
btnPrueba.onclick = function(){
    console.log('Clic desde el boton')
    console.log(event)
    Swal.fire('Hola, estoy usando sweet alert')
}

const btnPregunta = document.querySelector('#btn-pregunta')
btnPregunta.onclick = function(){
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
}

const btnError = document.querySelector('#btn-error')
btnError.onclick = function(){
    Swal.fire({
        icon: 'error',
        title: 'Lo siento U.u',
        text: 'Tienes un error!',
        footer: '<a href="">Puedes intentarlo de nuevo?</a>'
      })
}

function showAlert(icon, title, text){
    Swal.fire({
    icon,
    title,
    text,
    footer: "mas info"
    })
};

/*btnErrors.onclick=function(){
    showAlert('error', "hubo un error",'email')
}*/

const btnWarning = document.querySelector('#btn-warning')

btnWarning.onclick= function(){
    showAlert('warning',"ALERTA DE TSUNAMI",'Alista tu mochila de emergencia')
}

const btnSucess = document.querySelector('#btn-sucess')
btnSucess.onclick= function(){
    showAlert('success',"APROBASTE EL EXAMEN",'Alista tus maletas para las vacaciones')
}

const btnAlertBotones = document.querySelector('#btn-alert-botones')

btnAlertBotones.onclick = function(){
    Swal.fire({
        title: "Alerta",
        text: "Texto de alerta",
        showDenyButton: true,
        showCancelButton: true,
        confirmButton: "guardar",
        denyButtonText: "negar"
    }).then((resultado)=>{
        console.log("resultado",resultado);
        if(resultado.isConfirmed){
            showAlert("success","confirmado", "se confirmo la operacon");
            console.log("marco la confirmacion")
        }
        if(resultado.isDenied){
            showAlert("error","negado", "se nego la operacion");
            console.log("nego la operacion")
        }
        if(resultado.isDismissed){
            showAlert("error","cancelado", "se cancelo la operacion");
            console.log("cancelo la operacion")
        }
    })
}

const btnAlertaImagen = document.querySelector("#btn-alert-imagen")
const urlMarvel ="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ZQUB5ZFGNNDDBODUIVX6EUK354.jpg"
btnAlertaImagen.onclick = function(){
    Swal.fire({
        title: "Marvel",
        text: "alerta con imagen",
        imageUrl: urlMarvel,
        imageWidth: 200,
        imageHeight: 200,
    })
}

const btnAlertaCustom = document.querySelector("#btn-alert-custom")

btnAlertaCustom.onclick = function(){
    Swal.fire({
        title: "Custom Alert",
        text: "Alerta personalizada",
        background: 'url(${urlMarvel})',
        color: "fff",
        backdrop:
        'rgba(0,0,0,3) url(https://www.pngfind.com/pngs/m/573-5735640_pensando-png-homero-simpson-pensando-png-transparent-png.png) left top no-repeat',
    })
}

const btnAlertinputs = document.querySelector('#btn-alerta-inputs')

btnAlertinputs.onclick = function(){
    Swal.fire({
        title: "Ingresa tu correo",
        input: "email",
        inputLabel: 'ingrese su correo',
        inputPlaceholder: "el correo debe ser valido",
    }).then((resultado)=>{
        console.log(resultado.value)
    })
}

const paises = document.querySelector("#select-options")
//onchange: sirve para detectar si hay un cambio en mi elemento

    paises.onchange = function(event){
    const{value,options}= event.target
    console.log("valor de event",value)
const index = options.selectedIndex;
console.log("index", index)
console.log("texto", options[index].text);
}

const usuario = {
    nombre: "pepe",
    apellido: "zapata",
    edad: "30",
    direccion: {
        calle: "calle siempre viva",
        numero: 123,
        ciudad: "Chimbote"
    }
}

const{nombre, apellido,edad, direccion} = usuario;
console.log(direccion)