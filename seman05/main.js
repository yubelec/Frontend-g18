//variables
//let
//const
//var = conflicto - manera global

//let y const - declarar variables limitando alcance

let num1 = 20
let num2 = 30
let suma = num1+num2
resta = num1-num2
//console.log('La suma es:'+suma)
//console.log('La resta es:'+resta)
//console.error('La resta es:'+resta)
//console.warn('La resta es:'+resta)
//alert('Hola G18')

//alert = es una alerta
//console.log = una funcion del navegador, nos imprime en consola
//concatenacion = junta cadena de texto - number
//prompt

//vamos hacer una calculadora
//parsear
const valor1=prompt('Ingresa valor 1');
const valor2=prompt('Ingresa valor2');

//necesitamos ingresar la operacion para el proceso
const operacion = prompt('ingresa una operacion +,-,*,/')
if(operacion==='+'){
    resultado = +valor1 + +valor2;
    console.log('resultado',resultado);
} else if(operacion==='-'){
    resultado = +valor1 - +valor2;
    console.log('resultado',resultado);
}else if(operacion==='*'){
    resultado = +valor1 * +valor2;
    console.log('resultado',resultado);
}else if(operacion='/'){
    resultado = +valor1 / +valor2;
    console.log('resultado',resultado);
}