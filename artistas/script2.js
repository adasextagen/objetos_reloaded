//1.
const artistasSolistas = () => {
    return artistas.filter(e => e.solista === true)
}

// console.table(artistasSolistas())

//2.
const artistasPorEdad = (edad) => {
    return artistas.filter(e => e.edad === edad)
}

// console.table(artistasPorEdad(40))

//3.
const cantidadDeArtistasPorInstrumento = (instrumento) => {
    return `La cantidad de artistas que tocan ${instrumento} es de ${artistas.filter(e => e.instrumento === instrumento).length}.` 
}

// console.log(cantidadDeArtistasPorInstrumento('guitarra'))

//4.
const cantidadDeArtistasPorGenero = (genero) => {
    return `La cantidad de artistas del género ${genero} es de ${artistas.filter(e => e.genero === genero).length}.`
}

// console.log(cantidadDeArtistasPorGenero('punk'))

//5.
const artistasConMasDiscosQue = (cantidadDeDiscos) => {
    return artistas.filter(e => e.discos.length > cantidadDeDiscos)
}

// console.table(artistasConMasDiscosQue(9))

//6.
const artistaTocoEnAnio = (artista, anio) => {
    let artist = artistas.find(e => e.nombre === artista)
    return artist.ultimoRecital.anio === anio
}

// console.log(artistaTocoEnAnio('Ochoa Chang', 2014))

//7.
const artistaConMasEntradasVendidas = () => {
    let max = 0
    let aux = {}
    artistas.forEach(e => {
        if (e.ultimoRecital.entradasVendidas > max) {
            max = e.ultimoRecital.entradasVendidas
            aux = e
        }
    })
    return aux
}

// console.log(artistaConMasEntradasVendidas())

//8.
const artistaConMayorRecaudacion = () => {
    let max = 0
    let aux = {}
    artistas.forEach(e => {
        let recaudacion = e.ultimoRecital.costoEntradas * e.ultimoRecital.entradasVendidas
        if (recaudacion > max) {
            max = recaudacion
            aux = e
        }
    })
    return aux
}

// console.log(artistaConMayorRecaudacion())

//9.
const artistasConDiscoEnAnio = anio => {
    return artistas.filter(artista => {
      return artista.discos.filter(e => e.anioLanzamiento === anio).length
    })
}

// console.table(artistasConDiscoEnAnio(2011))

//10.
const artistaConMasCopias = () => {
    let result = 0
    let aux = {}
    artistas.forEach(e => {
        let total = 0
        e.discos.forEach(disco => {
            total += disco.copiasVendidas
        })

        if (total > result) {
            result = total
            aux = e
        }
    })
    return aux
}

console.log(artistaConMasCopias())