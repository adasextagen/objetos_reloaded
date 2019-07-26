const artistasSolistas = () => {
    return artistas.filter (artista =>
        artista.solista)
}

console.table (artistasSolistas())

const artistasPorEdad = (edad) => {
    return artistas.filter ( artista =>
        artista.edad === edad
    )
}

console.table (artistasPorEdad(33))

const artistas_x_instrumento = (instrumento) => {
    return artistas.filter (
    artista => artista.instrumento === instrumento).length
}

console.log(artistas_x_instrumento("batería"))

const artistasPorGenero = (genero) => {
    return artistas.filter (
    artista => artista.genero === genero).length
}

console.log(artistasPorGenero("pop"))

const artistasConMasDiscosQue = (cantidad) =>
artistas.filter (artista => artista.discos.length > cantidad)

console.table(artistasConMasDiscosQue(5))

const artistaTocoEnAnio = (nombre,anio) => {
    let thisArtist = artistas.find(artista => nombre === artista.nombre)
    return thisArtist.ultimoRecital.anio === anio
}

console.log(artistaTocoEnAnio("Ochoa Chang",2015))

