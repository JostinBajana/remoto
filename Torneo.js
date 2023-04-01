/*
Entidades: equipo,torneo, partido
atributos: equipo: id, descripcion, serie
           torneo: id, descripcion
           partido: id,id Torneo, Id equipo1
           id equipo2, goles equipo1, goles equipo2,
            observaciones.
*/
//ENTIDAD TORNEO
function Torneo(id, descripcion){
    this.id = id,
    this.descripcion = descripcion
}
// LOS ARREGLOS DE TORNEO CON SUS ELEMENTOS
let torneos = [
    new Torneo(1, " UBUNTU "),
    new Torneo(2, " COPAWEB "),
    new Torneo(3, " KALI LINUX"),
    new Torneo(4, " KINGS LEAGUE"),
    new Torneo(5, " CHAMPIONS JS ")
]
// Function para mostrar los torneos con un bucle while
function mostrarTorneos() {
    console.log("\nTORNEOS:");
    let i = 0;
    while (i < torneos.length) {
      console.log(`Torneo ${torneos[i].id}
                Descripcion: ${torneos[i].descripcion}`);
      i++;
    }
  }

module.exports = {
    Torneo,
    torneos,
    mostrarTorneos
}