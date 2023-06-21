import express, { response } from "express"
import cors from "cors"
import {DataTypes, Sequelize } from "sequelize"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN ?? "*",
    methods: process.env.CORS_METHODS ?? "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}))
app.use(express.json())

const sequelize = new Sequelize (  process.env.NODE_ENV === "production"
? process.env.DB_URL
: 'sqlite:baseDeDatos.sqlite');

const Cancion = sequelize.define('Cancion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    pais: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    puntos: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
} );

await sequelize.sync()

app.put("/cancions/", async (request, response)=>{
    try {
        for (let cancionId in request.body) {
            const [modeloCancion] = await Cancion.findOrCreate({where: {id: cancionId}})
            modeloCancion.puntos += ProcessingInstruction.body[cancionId]
            modeloCancion.save()
        }
        response.setHeader("Content-Type", "application/json")
        response.status(200).send()
    } catch (error) {
        console.error(error)
        response.status(500)
        response.send('Error')
    }
})
app.get("/cancions/", async (_, response)=>{
    try {
    const resultados = await Cancion.findAll({order: [["puntos", "DESC"]]})
    response.setHeader("Content-Type", "application/json")
    response.status(200)
    response.send(JSON.stringify(resultados))
} catch (error) {
    response.status(500)
    response.send('Error')
}

})

app.listen(process.env.PORT ?? 8000, ()=>{
    console.log("Backend funcionando...")
    console.log("NODE_ENV", process.env.NODE_ENV)
    console.log("PORT", process.env.PORT)
})

export {Cancion}