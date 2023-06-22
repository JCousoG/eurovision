
function Clasificacion({resultado}) {
function manexadorBoton() {
    window.location.reload
}
    return(
        <>
        <button onClick={manexadorBoton}>Vuelve a votar</button>
        <li>
            {resultado.pais} {resultado.puntos}
        </li>
        </>
    )
}
export default Clasificacion