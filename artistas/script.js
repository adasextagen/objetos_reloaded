
// console.table(artistas)

const artistasSolistas = () => {
    return artistas.filter (artista => 
        !artista.solista
    )
}
console.table(artistasSolistas())

const artistasPorEdad = (edad) => {
    return artistas.filter (artista =>
        artista.edad === edad
    )
}

console.table(artistasPorEdad(33))

const artistas_x_instrumento = (instrumento) => artistas.filter( artista => artista.instrumento === instrumento).length

console.log(artistas_x_instrumento('batería'))

const cantidadDeArtistasPorGenero = (genero) => artistas.filter(artista => artista.genero === genero).length

console.log(cantidadDeArtistasPorGenero('pop'))

const artistasConMasDiscosQue = (cantidad) => 
 artistas.filter (artista => artista.discos.length > cantidad)

 console.table(artistasConMasDiscosQue(5))

const artistaTocoEnAnio = (nombre, anio) =>{
    let thisArtist = artistas.find(artista => nombre === artista.nombre)
    return thisArtist.ultimoRecital.anio === anio
}

console.log(artistaTocoEnAnio('Ochoa Chang',2015))

const artistaConMasEntradasVendidas = () => {
    let max = 0;
    let auxiliar = {};
    
    artistas.forEach (e => {
        if (e.ultimoRecital.entradasVendidas > max) {
            max = e.ultimoRecital.entradasVendidas
            auxiliar = e;
        }
    })
    return auxiliar;
}

console.log(artistaConMasEntradasVendidas())

const artistaConMayorRecaudacion =  () => {
    let paraComparar = 0; 
    let paraCompararII = {};
    artistas.forEach (e => {
        let mayorRecaudacion = e.ultimoRecital.entradasVendidas * e.ultimoRecital.costoEntradas;
       if (mayorRecaudacion > paraComparar){
           paraComparar = mayorRecaudacion;
           paraCompararII = e
       }
      
    })
    return paraCompararII;
}
console.log (artistaConMayorRecaudacion())

const artistaConDiscoEnAnio = (anio) => {
    return artistas.filter(artista => artista.discos).some( d => d === anio)

}
 console.table(artistaConDiscoEnAnio(2011))