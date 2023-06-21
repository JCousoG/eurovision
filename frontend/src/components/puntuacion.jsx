import { Context } from "./contexto"
import Voto from "./voto"
import { useContext } from "react"


function Puntuacion({id}) {
    const [store] = useContext(Context)
    const votosQueTen = store.votos[id]

    return(
        <>
        <Voto id={id} puntuacion={1}/>
        <Voto id={id} puntuacion={2}/>
        <Voto id={id} puntuacion={3}/>
        <Voto id={id} puntuacion={4}/>
        <Voto id={id} puntuacion={5}/>
        <Voto id={id} puntuacion={6}/>
        <Voto id={id} puntuacion={7}/>
        <Voto id={id} puntuacion={8}/>
        <Voto id={id} puntuacion={10}/>
        <Voto id={id} puntuacion={12}/>
        <h3>Le has dado {votosQueTen} puntos</h3>
        </>
    )
}
export default Puntuacion