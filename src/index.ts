

//objeto en ts

interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
}

const alumno:Alumno={
    nombre:'juan',
    matricula:1234,
    email:"juan@gmail.com"
}

let mascotas=['perro','gato','perico']

mascotas[1]='shshs';
mascotas.push('nuevo')

let tem:(number|string) []=[]
tem.push('Nombre');
tem.push(232);

console.log(mascotas)

console.log(alumno)