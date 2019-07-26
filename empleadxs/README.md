Hacer las siguientes funciones:


1. empleadxsQueHacenGuardia, que devuelva un array con todxs lxs empleadxs que hacen guardia

2. empleadxsPorPais, que tome por parámetro el nombre de un país y devuelva un array con todxs lxs empleadxs que son de dicho país

3. empleadxsPorArea, que tome por parámetro el nombre de un área y devuelva un array con todxs lxs empleadxs que son de dicho área

4. empleadxsConSueldoMayorA, que tome por parámetro un número como sueldo y devuelva un array con todxs lxs empleadxs que tengan un sueldo mayor a dicho número

5. empleadxsConMasLenguajes, que tome por parámetro un número y devuelva un array con aquellxs empleadxs que sepan más lenguajes que dicho número

6. sueldoPromedioEmpleadxs, que devuelva el sueldo promedio de todos los empleados

7. sueldoPromedioPorSeniority, que tome por parámetro un seniority, y devuelva el sueldo promedio de todxs lxs empleadxs que tengan ese seniority

8. buscarEmpleadxs, que tome por parámetros area, puesto y seniority, y devuelva un array con lxs empleadxs que pertenezcan a dicha area, puesto y seniority

9. errorEnProduccion, que ponga en true la propiedad haceGuardia de todos los empleados

10. subirDeCategoria, que tome como parámetro un objeto empleadx. Si dichx empleadx no tiene un seniority "Senior", cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden ("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo

11. agregarTecnologias, que agregue a todos los objetos empleadxs la propiedad tecnologías,que es un array conteniendo los valores "GIT" y "Node.js" 

12. empleadxSabeLenguaje, que tome por parámetro un objeto empleadx (elemento del array empleadxs) y un lenguaje y devuelva true si dicho empleadx sabe dicho lenguaje

13. empleadxsQueSabenLenguaje, que tome por parámetro un lenguaje y devuelva todxs lxs empleadxs que saben dicho lenguaje (usar la función anterior)

14. empleadxsQueSabenLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquellxs empleadxs que sepan todos esos lenguajes

15. empleadxsQueSabenAlgunosLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquellxs empleadxs que sepan al menos uno de esos lenguajes

16. empleadoxsConMejorSueldo, que devuelva un array con los 10 mejores empleadxs pagos

17. obtenerTitulosCompletos, que devuelva un array donde cada elemento es un string con la forma "nombre, puesto seniority, area", p.ej.: "Nadia Conrad, Senior Backend Developer, Desarrollo", habiendo un elemento por cada empleadx

18. obtenerInfoPersonal, que devuelva un array donde cada elemento es un objeto con las propiedades 
    * nombre 
    * pais 
    * edad 
habiendo un elemento por cada empleadx, y donde cada propiedad se corresponde a la propiedad del objeto original

19. obtenerInfoPuestos, que devuelva un array donde cada elemento es un objeto con las propiedades 
    * nombre 
    * area 
    * puesto 
    * seniority 
habiendo un elemento por cada empleadx, y donde cada propiedad se corresponde a la propiedad del objeto original

20. obtenerInfoSeniority, que devuelva un array donde cada elemento es un objeto con las propiedades 
    * nombre 
    * seniority 
    * sueldo 
    * cantidadLenguajes 
habiendo un elemento por cada empleadx, y donde cada propiedad se corresponde a la propiedad del objeto original, excepto cantidadLenguajes, que es un número indicando la cantidad de lenguajes que sabe

21. obtenerInfoPagos, que devuelva una array donde cada elemento es un objeto con las propiedades
    * nombre
    * sueldoBruto
    * obraSocial
    * jubilacion
    * sueldoNeto
habiendo un elemento por cada empleadx, donde
    * sueldoBruto es el sueldo del objeto original
    * obraSocial es el 3% del sueldoBruto
    * jubilacion es el 11% del sueldoBruto
    * sueldoNeto es el resultado de restarle a sueldoBruto los valores de obraSocial y jubilacion