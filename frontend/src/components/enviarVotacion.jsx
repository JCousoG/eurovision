import { useContext } from "react"
import { Context } from "./contexto"
import { BACKEND_URL } from "./conf.mjs"

function EnviarVotacion() {
const [store] = useContext(Context)
function enviarVotos() {
    if (store.puntos.length === 0) {
        fetch (
           BACKEND_URL+"/cancions/",
           {method: "PUT",
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(store.votos)
            
        }
        )
        store.setVista("mostrarResultados")
    }
    else {alert("Tienes que otorgar todos los puntos para poder enviar tu votación")}
}
    return(
        <>
         <button className="btn-flotante" type="submit" onClick={enviarVotos}>Votar</button>
        </>
    )
}
export default EnviarVotacion