import Puntuacion from "./puntuacion"
import Player from "./player"
import cargando from "../cargando.gif"
function Cancion({cancions}) {

    return(
        <>
         <label>

<li><h2>{cancions.pais}</h2><div style={{backgroundRepeat: "no-repeat", backgroundPosition: 'left', backgroundImage: `url(${cargando})`}}><Player ruta={cancions.url}></Player></div><Puntuacion id={cancions.id}></Puntuacion></li>
</label>
        </>
    )
}
export default Cancion