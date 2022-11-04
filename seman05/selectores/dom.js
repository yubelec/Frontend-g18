// // existe dentro de js el document ... este atributo de js me permite obenet elemtnos de html....

// //obtener elemento segun el nombre de su etiqueta
// //tag = etiqueta en ingles 
// //h1 -div -input 



// const inputs= document.getElementsByTagName("input")
// console.log("input", inputs);
// //recoremos que input es un html collection para poder ecorrerlo debemos convertirleo en un array
// //Array.from esto convierte un html coletcio a un arrays-

// //convertir un html collect a array normal
// const newInputs = Array.from(inputs);
// console.log("newinput", newInputs)

// // bucle map 
// newInputs.map((newInput)=>{
//     console.log("nueva forma", newInput.value)
// })


// //bucle for

// for(let i = 0; i < inputs.length; i++){
//     console.log("input", inputs[i].value);
// }

// //----------------------------------------
// // por id  selector
// const password = document.querySelector(".input_password")

// console.log("password", password )

// // vamos a accder al elemnto seleccionado el value de mi input 

// password.style.backgroundColor = "#000";
// password.style.color= "#fff";

// // por clases

// const inputsName = document.getElementsByClassName("last_name");
// console.log(inputsName)
//              //con este palabra convertimos
// const inputName = Array.from(inputsName)
// console.log(inputName)

// //bucle forEach
// inputName.forEach((input)=>{
//     console.log(input.value)
// })

//otroe ejemplo

// const form = document.getElementsByTagName('form')
// console.log(form)

const input2 = document.querySelectorAll('.input2')
console.log(input2)

input2.forEach((input)=>{
        console.log(input.value)
    })
    