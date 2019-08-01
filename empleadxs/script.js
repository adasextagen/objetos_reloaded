//1
const empleadxsQueHacenGuardia = () => {
    return empleadxs.filter( empleadx =>
        empleadx.haceGuardia
    )
}

// console.table(empleadxsQueHacenGuardia())

//2
const empleadxsPorPais = (pais) => {
    return empleadxs.filter(e => e.pais === pais) 
}

// console.table(empleadxsPorPais('Colombia'))

//5
const empleadxsConMasLenguajes = (numb) => empleadxs.filter (e => e.lenguajes.length > numb)


// console.table(empleadxsConMasLenguajes(5))

//6
const sueldoPromedioEmpleadxs = () => {
    //let cantidad = 0;
    //empleadxs.forEach (e => {cantidad += e.sueldo})
    
    let cantidad = empleadxs.map(e => e.sueldo).reduce((a,b) => a + b)

    let promedio = cantidad / empleadxs.length
    return `el sueldo promedio de todos los empleados es: ${promedio}`
}

// console.log(sueldoPromedioEmpleadxs())

//7
const sueldoPromedioPorSeniority = (senio) => {
    let sueldoSenio = 0;
    let sueldoSenioFiltrado = empleadxs.filter (e => e.seniority === senio);
    sueldoSenioFiltrado.forEach(i => sueldoSenio += i.sueldo)
    console.log(sueldoSenio);
    console.log(sueldoSenioFiltrado.length);
    
    return sueldoSenio/sueldoSenioFiltrado.length
}
// console.log(sueldoPromedioPorSeniority("Junior"))

//8
const buscarEmpleadxs = (area, puesto, seniority) => {
    return empleadxs.filter(e => e.area === area && e.puesto === puesto && e.seniority === seniority)
}

// console.table(buscarEmpleadxs('QA', 'Backend Developer', 'Semisenior'))

//10
const subirDeCategoria = (empleadx) => {
    if (empleadx.seniority !== "Senior") {
        empleadx.sueldo +=10000;

        switch (empleadx.seniority) {
            case "Trainee":
                empleadx.seniority= "Junior";
                break;
            case "Junior":
                empleadx.seniority= "Semisenior";
                break;
            case "Semisenior":
                empleadx.seniority= "Senior";
                break;            
        }
    }
    return empleadx
}
// console.table(subirDeCategoria (empleadxs[0]))

//esto no está en la consigna (subimos de categoría a un empleadx usando el nombre como parametro)
const otraCosa = (nombre) => {
    let empleado = empleadxs.find(e => e.nombre === nombre)
    return subirDeCategoria(empleado)
}
// console.table(otraCosa('Wade Morgan'));

//12
const empleadxSabeLenguaje = (empleado, lenguaje) => {
    return empleado.lenguajes.some(e => e === lenguaje)
}

// console.log(empleadxSabeLenguaje(empleadxs[2],'Java'))

//13
const empleadxsQueSabenLenguaje = (leng) => {
    return empleadxs.filter(e => empleadxSabeLenguaje(e, leng) )
} 
// console.table(empleadxsQueSabenLenguaje('PHP'))

//9
const errorEnProduccion = () => {
    empleadxs.forEach(emp => {
        if(!emp.haceGuardia){
            emp.haceGuardia = true
        } 
    })
    return empleadxs
}

console.table(errorEnProduccion())

//11
const agregarTecnologias = (tecnologias) => {
    empleadxs.forEach(empleadx => empleadx.tecnologias = tecnologias)
    return empleadxs.map(e=>e.tecnologias)
}
console.table(agregarTecnologias(['GIT','Node JS']))