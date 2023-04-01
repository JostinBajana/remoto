/*
Entidades: equipo,torneo, partido
atributos: equipo: id, descripcion, serie
           torneo: id, descripcion
           partido: id,id Torneo, Id equipo1
           id equipo2, goles equipo1, goles equipo2,
            observaciones.
*/
// ENTIDAD EQUIPO
function Equipo(id, descripcion, serie){
  this.id = id,
  this.descripcion = descripcion,
  this.serie = serie
}
// LOS ARREGLOS DE EQUIPOS CON SUS ELEMENTOS
let equipos = [
  new Equipo(1, "LosFACCI", "A"),
  new Equipo(2, "BackEndAlPoder", "A"),
  new Equipo(3, "SQLFUTBOLCLUB", "B"),
  new Equipo(4, "LosFrontEND", "B"),
  new Equipo(5, "LosRockyLinux", "C"),
]
// Function para mostrar los equipos con for
function mostrarEquipos() {
  console.log("EQUIPOS:");
  for (let i = 0; i < equipos.length; i++) {
    console.log(`Equipo: ${equipos[i].id}
               Descripçion: ${equipos[i].descripcion}
               Serie: (${equipos[i].serie})`);
  }
}

module.exports = {
  Equipo,
  equipos,
  mostrarEquipos,
};

