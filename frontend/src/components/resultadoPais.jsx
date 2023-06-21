import Clasificacion from "./clasificacion"
function ResultadoPais({resultados}) {
    return(
        <ol> {
    resultados.map(
        resultado=> <Clasificacion key = {resultado.id} resultado={resultado}/>
    )
}
    </ol>
    )
}
export default ResultadoPais