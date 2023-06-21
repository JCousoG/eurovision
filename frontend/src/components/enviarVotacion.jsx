import { useContext } from "react"
import { Context } from "./contexto"
import { BACKEND_URL } from "./config.mjs"

function EnviarVotacion() {
const [store] = useContext(Context)
function enviarVotos() {
    if (store.puntos.length === 0) {
        fetch (
           BACKEND_URL+"cancions/",
           {method: "PUT",
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(store.votos)
            
        }
        )
        store.setVista("resultados")
    }
}
    return(
        <>
         <button className="btn-flotante" type="submit" onClick={enviarVotos}>Votar</button>
        </>
    )
}
export default EnviarVotacion