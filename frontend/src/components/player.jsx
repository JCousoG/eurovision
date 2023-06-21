function Player({ruta}) {


    return (
        <>
         <iframe width="226" height="131" src={"https://www.youtube.com/embed/"+ruta}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
        </>
    )
}

export default Player