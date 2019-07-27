//1.
const empleadxsQueHacenGuardia = () => {
    return empleadxs.filter(empleadx => empleadx.haceGuardia) // Usamos return para no tener que hacer otra variable para guardar el resultado
}

// console.table(empleadxsQueHacenGuardia())

//2.
const empleadxsPorPais = (pais) => {
    return empleadxs.filter(empleadx => empleadx.pais === pais)
}

// console.table(empleadxsPorPais('Perú'))

//3.
const empleadxsPorArea = (area) => {
    return empleadxs.filter(empleadx => empleadx.area === area)
}

// console.table(empleadxsPorArea('QA'))

//4.
const empleadxsConSueldoMayorA = (sueldo) => {
    return empleadxs.filter(empleadx => empleadx.sueldo > sueldo)
}

// console.table(empleadxsConSueldoMayorA(20000))

//5.
const empleadxsConMasLenguajes = num => empleadxs.filter(e => e.lenguajes.length > num) // Arrow tiene un return implícito

// console.table(empleadxsConMasLenguajes(5))

//6.
const sueldoPromedioEmpleadxs = () => {
    let cantidad = 0
    empleadxs.forEach(e => {
        cantidad += e.sueldo
    })
    return cantidad / empleadxs.length
}

// console.log(sueldoPromedioEmpleadxs())

//7.
const sueldoPromedioPorSeniority = (seniority) => {
    let promedio = 0
    let empleadxsFiltrados = empleadxs.filter(empleadx => empleadx.seniority === seniority)
    empleadxsFiltrados.forEach(e => promedio += e.sueldo) // Acá se puede hacer un map para que nos devuelva un array y poder usar reduce
    return promedio / empleadxsFiltrados.length
}

// console.log(sueldoPromedioPorSeniority('Junior'))

//8.
const buscarEmpleadxs = (area, puesto, seniority) => {
    return empleadxs.filter(empleadx => empleadx.area === area && empleadx.puesto === puesto && empleadx.seniority === seniority)
}

// console.table(buscarEmpleadxs('QA', 'Backend Developer', 'Semisenior'))

//9.
const errorEnProduccion = () => {
    empleadxs.forEach(e => {
        if (!e.haceGuardia) {
            e.haceGuardia = true
        }
    })
}

// errorEnProduccion()

//10.
const subirDeCategoria = empleadx => {
    if (empleadx.seniority !== 'Senior') {
        switch (empleadx.seniority) {
            case 'Trainee':
                empleadx.seniority = 'Junior';
                empleadx.sueldo += 10000;
                break;
            case 'Junior':
                empleadx.seniority = 'Semisenior';
                empleadx.sueldo += 10000;
                break;
            case 'Semisenior':
                empleadx.seniority = 'Senior';
                empleadx.sueldo += 10000;
                break;
        }
    }
    return empleadx
}

const seleccionarEmpleadx = nombre => {
    let empleadx = empleadxs.find(e => e.nombre === nombre)
    return subirDeCategoria(empleadx)
}

// console.log(seleccionarEmpleadx("Floyd Reyes"))

//11.
const agregarTecnologias = tecnologias => {
    empleadxs.forEach(empleadx => empleadx.tecnologias = tecnologias)
    return empleadxs
}
console.table(agregarTecnologias(['GIT','Node JS']))

//12.
const empleadxSabeLenguaje = (empleadx, lenguaje) => {
    return empleadx.lenguajes.some(e => e === lenguaje) // Some devuelve un booleano
}

// console.log(empleadxSabeLenguaje(empleadxs[3], 'Javascript'))

//13.
const empleadxsQueSabenLenguaje = (lenguaje) => {
    return empleadxs.filter(e => empleadxSabeLenguaje(e, lenguaje))
}

// console.table(empleadxsQueSabenLenguaje('C#'))

//14.
const empleadxsQueSabenLenguajes = ([lenguajes]) => {

}

console.table(['Java', 'PHP'])

//15.
const empleadxsQueSabenAlgunosLenguajes = () => {

}