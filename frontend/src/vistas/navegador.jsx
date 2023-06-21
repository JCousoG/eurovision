import { useContext } from "react"
import { Context } from "../components/contexto"
import MostrarResultados from "./mostrarResultados"
import Votar from "./votar"

function Navegador() {

    const [store, setStore] = useContext(Context)
    return(
        <>
       
        {store.vista==="votar"&&<Votar/>}
        {store.vista==="mostrarResultados"&&<MostrarResultados/>}
        </>
    )
}
export default Navegador