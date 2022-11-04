function sumar ( numero1, numero2){
    //convertir paramtero a nuemro
    const converNumero1= +numero1;
    const converNumero2= +numero2;

    const suma= converNumero1 + converNumero2;

console.log('resultado',suma);
}
sumar(20,20);

const suma2 =(a,b)=>{
    return a+b

}
console.log('otra forma',suma2(30,20))