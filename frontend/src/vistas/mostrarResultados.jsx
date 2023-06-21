import ResultadoPais from "../components/resultadoPais"
import { BACKEND_URL } from "../components/conf.mjs"


function MostrarResultados() {

    const [resultados, setResultados] = useState([])
    useEffect(
        obterResultados,
        []
      )
        function obterResultados() {
            fetch(BACKEND_URL+"/cancions/")
            .then(reaccionPararesposta)
            .catch(reaccionParaErroResposta)
        }

        function reaccionPararesposta(resposta) {
            resposta.json().then(reaccionParaResultados)
        }

        function reaccionParaErroResposta(erro) {
            alert("Estamos teniendo problemas con la conexión en esta momneto, pruebe a intentarlo más tarde.")
        }
        function reaccionParaResultados(datos) {
            setResultados(datos)
        }

    return(

        <>
        <h2>Clasificación </h2>
       <ResultadoPais resultados={resultados}/>
        </>
    )
}
export default MostrarResultados