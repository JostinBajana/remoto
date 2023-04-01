const { equipos } = require("./Equipo");
const {torneos} = require("./Torneo");

/*
Entidades: equipo,torneo, partido
atributos: equipo: id, descripcion, serie
           torneo: id, descripcion
           partido: id,id Torneo, Id equipo1
           id equipo2, goles equipo1, goles equipo2,
            observaciones.
*/
//ENTIDAD PARTIDO
function Partido(id, id_Torneo, id_Equipo1, id_Equipo2, goles_Equipo1, goles_Equipo2, observaciones){
    this.id = id,
    this.id_Torneo = id_Torneo,
    this.id_Equipo1 = id_Equipo1,
    this.id_Equipo2 = id_Equipo2,
    this.goles_Equipo1 = goles_Equipo1,
    this.goles_Equipo2 = goles_Equipo2,
    this.observaciones = observaciones
}
// lOS ARREGLOS DE PARTIDO CON SUS ELEMENTOS
let partidos = [
    new Partido(1, 1, 1, 2, 2, 3, "Hubo 4 amarillas en todo el partido"),
    new Partido(2, 2, 3, 4, 1, 1, "El director tecnico fue expulsado"),
    new Partido(3, 3, 1, 3, 4, 2, "Un jugador salio lesionado"),
    new Partido(4, 4, 2, 4, 5, 5, "Ambos equipos recibieron goles"),
    new Partido(5, 5, 1, 4, 2, 3, "4 faltas revisadas por el VAR")
]
// Función para mostrar los partidos con do while
function mostrarPartidos() {
    console.log("\nPARTIDOS:");
    let i = 0;
    do {
        //find para comparar el id del equipo y el torneo
        let equipo1 = equipos.find(equipo => equipo.id === partidos[i].id_Equipo1);
        let equipo2 = equipos.find(equipo => equipo.id === partidos[i].id_Equipo2);
        let torneo = torneos.find(torneos => torneos.id === partidos[i].id_Torneo)
        console.log(`Partido ${partidos[i].id}
        Torneo: ${partidos[i].id_Torneo} ${torneo.descripcion} 
        Equipo 1: ${partidos[i].id_Equipo1} ${equipo1.descripcion}  
        Equipo 2: ${partidos[i].id_Equipo2} ${equipo2.descripcion} 
        Goles Equipo 1: ${partidos[i].goles_Equipo1}
        Goles Equipo 2: ${partidos[i].goles_Equipo2} 
        Observaciones: ${partidos[i].observaciones}`);
    i++;
    } while (i < partidos.length);
  }
 
  module.exports = {
    Partido,
    partidos,
    mostrarPartidos
  }