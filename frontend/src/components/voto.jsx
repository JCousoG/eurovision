
import { useContext, useEffect, useState } from "react"
import { Context } from "./contexto"
function Voto({id, puntuacion}) {
    const [store, setStore] = useContext(Context)
    const [votoUsado, setVotoUsado] = useState(false)
    const [sonOVoto, setSonOVoto] = useState(false)

    useEffect(
        ()=> {
            usarVoto()
            setSonOVoto(store.votos[id] === puntuacion)
        }
        ,[store]
    )

    function usarVoto() {
        setVotoUsado(
            store.puntos.includes(puntuacion) ? false : true
        )
    }

    function manexadorVoto() {
        const newStore = {...store}
        if (newStore.votos[id]>0) {newStore.puntos.push(newStore.votos[id])}
        newStore.votos[id] = puntuacion
        const puntoIndex = newStore.puntos.indexOf(puntuacion)
        newStore.puntos.splice(puntoIndex,1)
        setStore(newStore)

    }

    return(
        <>
        <button className={sonOVoto ? "seleccionado" : ""} onClick={manexadorVoto} disabled={votoUsado}>{puntuacion}</button>
        </>
    )
}
export default Voto