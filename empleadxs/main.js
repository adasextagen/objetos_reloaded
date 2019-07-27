console.log('hola')

// 1. empleadxsQueHacenGuardia, que devuelva un array con todxs lxs empleadxs que hacen guardia

const empleadxsQueHacenGuardia = () => {
   return empleadxs.filter(empleado => empleado.haceGuardia )
}

console.table(empleadxsQueHacenGuardia())

// 2. empleadxsPorPais, que tome por parámetro el nombre de un país y devuelva un array con todxs lxs empleadxs 
//que son de dicho país

const empleadxsPorPais = (pais) => {
   return empleadxs.filter(empleado => empleado.pais === pais)
}

console.table(empleadxsPorPais('Argentina'))

// 3. empleadxsPorArea, que tome por parámetro el nombre de un área y devuelva un array con todxs lxs empleadxs que 
//son de dicho área

const empleadxsPorArea = (area) => {
   return empleadxs.filter(empleado => empleado.area === area )
}

console.table(empleadxsPorArea('Desarrollo'))

// 4. empleadxsConSueldoMayorA, que tome por parámetro un número como sueldo y devuelva un array con todxs lxs 
//empleadxs que tengan un sueldo mayor a dicho número

const empleadxsConSueldoMayorA = (num) => {
   return empleadxs.filter(empleado => empleado.sueldo > num)
}

console.table(empleadxsConSueldoMayorA(50000))

// 5. empleadxsConMasLenguajes, que tome por parámetro un número y devuelva un array con aquellxs empleadxs que sepan
// más lenguajes que dicho número

const empleadxsConMasLenguajes = (num) => {
 return  empleadxs.filter(empleado => empleado.lenguajes.length > num)
}

console.table(empleadxsConMasLenguajes(4))

//6. sueldoPromedioEmpleadxs, que devuelva el sueldo promedio de todos los empleados

const sueldoPromedioEmpleadxs = (array) => {
    let contador = 0
    array.forEach(empleado =>{
        contador = empleado.sueldo + contador
        })
       total = contador / array.length
       return total
}

console.log(`El sueldo promedio de los empleados es $ ${sueldoPromedioEmpleadxs(empleadxs)}`)

// 7. sueldoPromedioPorSeniority, que tome por parámetro un seniority, y devuelva el sueldo promedio de todxs lxs 
//empleadxs que tengan ese seniority

const sueldoPromedioPorSeniority = (seniority) => {
   return sueldoPromedioEmpleadxs(empleadxs.filter(empleado => empleado.seniority === seniority))
}

console.log(`El sueldo promedio de los x-seniority es ${sueldoPromedioPorSeniority("Senior")}`)


// 8. buscarEmpleadxs, que tome por parámetros area, puesto y seniority, y devuelva un array con lxs empleadxs que 
//pertenezcan a dicha area, puesto y seniority

const buscarEmpleadxs = (area, puesto, seniority) => {
   return empleadxs.filter(empleado => empleado.area === area && empleado.puesto === puesto && empleado.seniority === seniority)
}

console.log(buscarEmpleadxs('Soporte', 'Frontend Developer','Senior'))

// 9. errorEnProduccion, que ponga en true la propiedad haceGuardia de todos los empleados

const errorEnProduccion = () => {
 empleadxs.forEach(empleado => empleado.haceGuardia = true)
 return empleadxs
}

console.table(errorEnProduccion())

// 10. subirDeCategoria, que tome como parámetro un objeto empleadx. Si dichx empleadx no tiene un seniority "Senior",
//cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden 
// ("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo

const evaluarYSubirCategoria = (empleado) => {
    return empleado.seniority==="Senior"?empleado:subirDeCategoria(empleado);
   }

   
const subirDeCategoria = (empleado) => {
    let array = ["Trainee","Junior","Semisenior","Senior"];
    empleado.seniority=array[array.indexOf(empleado.seniority)+1];
    empleado.sueldo+=10000;
    return empleado;
   }

console.log(evaluarYSubirCategoria({"seniority": "Junior","sueldo": 71246}))

// 11. agregarTecnologias, que agregue a todos los objetos empleadxs la propiedad tecnologías,que es un array 
//conteniendo los valores "GIT" y "Node.js" 

const agregarTecnologias = () => {
    empleadxs.forEach(empleado => empleado.tecnologias = ['Node.js', 'GIT'] )
    return empleadxs
}

console.log(agregarTecnologias())

// 12. empleadxSabeLenguaje, que tome por parámetro un objeto empleadx (elemento del array empleadxs) 
//y un lenguaje y devuelva true si dicho empleadx sabe dicho lenguaje

const empleadxSabeLenguaje = (empleado, lenguaje) => {
 return empleado.lenguajes.includes(lenguaje)
}

console.log(empleadxSabeLenguaje({
    "nombre": "Wade Morgan",
    "pais": "México",
    "edad": 20,
    "area": "QA",
    "puesto": "Backend Developer",
    "seniority": "Semisenior",
    "sueldo": 79767,
    "haceGuardia": false,
    "lenguajes": [
      "Java"
    ]
  }, 'Java'))

// 13. empleadxsQueSabenLenguaje, que tome por parámetro un lenguaje y devuelva todxs lxs empleadxs que saben dicho
// lenguaje (usar la función anterior)

const empleadxsQueSabenLenguaje = (lenguaje) => {
    let empleadxsQueSi = []
    empleadxs.forEach(empleado => {if (empleadxSabeLenguaje(empleado, lenguaje)) {empleadxsQueSi.push(empleado)}})
    return empleadxsQueSi
}

console.log(empleadxsQueSabenLenguaje('JavaScript'))

// 14. empleadxsQueSabenLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquellxs
// empleadxs que sepan todos esos lenguajes

const empleadxsQueSabenLenguajes = (lenguajes) => {
    let losCapos = []
    empleadxs.forEach(empleado =>{
        let sabeTodos = true;
        lenguajes.forEach(lenguaje =>{
            if(!empleadxSabeLenguaje(empleado,lenguaje)){
                sabeTodos=false;
            }
        });
        if(sabeTodos)
            losCapos.push(empleado);
    });
        return losCapos
}

console.log(empleadxsQueSabenLenguajes(["Ruby",
"JavaScript",
"Python",
"Java",
'C',]))