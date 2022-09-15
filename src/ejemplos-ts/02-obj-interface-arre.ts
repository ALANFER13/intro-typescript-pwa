//Objeto en Typescript (ts)

interface Alumno{
    nombre:string;
    matricula:number;
    email:string;
}
//interfaz es una especie de clase tonta donde simplemente nos permite establecer los tipos de campos o las funciones

const alumno:Alumno={
    nombre:'juan',
    matricula:1234,
    email:"juan@gmail.com"
}

let mascotas=['perro','gato','caballo','perico'] //arreglo hay que establecer el tipo de datos

mascotas[1]='shsh'; //con este se reasigna el valor
mascotas.push('panda')

let tem:(number|string)[]=[]
tem.push('Nombre');
tem.push(252);

console.log(mascotas)
console.table(alumno)