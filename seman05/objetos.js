//objeto: es una entidad independiente, con propiedades y atributos
//esta compuesto por un key y un value

//objeto de un carro

const carro ={
    color: "rosado",
    motor: 1.6,
    modelo: "mustang",
    marca: 'changan',
    nuevo: false,
};
console.log('objeto:',carro)
console.table(carro)

//object persona

const persona={
    edad: 34,
    nombre: 'Yu',
    sexo: 'M',
    tall: 1.78,
    estadoCivil: 'Casado',
    mayorEdad: true,
    donacionOrganos: true,
};

//como acceder a un atributo
console.log(persona.nombre)
console.log('persona',persona)

//sustituir
persona.nombre='Yubel';
persona.tall=1.82;

//agregar un elemento
persona['profesion'] ='ingeniero';
persona['bailarin'] = true;

//
const cosasSetup={
    laptop: 'LENOVO',
    monitor: 'TEROS',
    mouse: 'Logi',
};

const Laptop={
    procesador: 'INTEL CORE I7',
    disco: 'SSD 250 GB',
    ram: '16 GB'
} 

cosasSetup['teclado'] = 'HALION';
console.log(cosasSetup.teclado);

cosasSetup.monitor= 'DELL';
console.log('Laptop:',Laptop);
Laptop['tarjeta video'] ='GTX1050 TI';

