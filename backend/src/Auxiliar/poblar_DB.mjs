import { Cancion } from "../main.mjs"

const cancions = [
    {id: 0,
    pais: "España"
    },
    {id: 1,
    pais: "Portugal"
    },
    {id: 2,
    pais: "Francia"
    },
    {id: 3,
    pais: "Alemania"
    },
    {id: 4,
    pais: "Italia"
    },
    {id: 5,
    pais: "Reino Unido"
    },
    {id: 6,
    pais: "Irlanda"
    },
    {id: 7,
    pais: "Bélgica"
    },
    {id: 8,
    pais: "Suecia"
    },
    {id: 9,
    pais: "Noruega"
    },
    {id: 10,
    pais: "Paises Bajos"
    },
    {id: 11,
    pais: "Rumanía"
    },
    {id: 12,
    pais: "Azerbayán"
    },
    {id: 13,
    pais: "Croacia"
    },
    {id: 14,
    pais: "Finlandia"
    },
    {id: 15,
    pais: "Israel"
    },
    {id: 16,
    pais: "Letonia"
    },
    {id: 17,
    pais: "Malta"
    },
    {id: 18,
    pais: "Moldavia"
    },
    {id: 19,
    pais: "Chequia"
    },
    {id: 20,
    pais: "Serbia"
    },
    {id: 21,
    pais: "Suiza"
    },
    {id: 22,
    pais: "Albania"
    },
    {id: 23,
    pais: "Armenia"
    },
    {id: 24,
    pais: "Australia"
    },
    {id: 25,
    pais: "Austria"
    },
    {id: 26,
    pais: "Chipre"
    },
    {id: 27,
    pais: "Dinamarca"
    },
    {id: 28,
    pais: "Eslovenia"
    },
    {id: 29,
    pais: "Estonia"
    },
    {id: 30,
    pais: "Georgia"
    },
    {id: 31,
    pais: "Grecia"
    },
    {id: 32,
    pais: "Islandia"
    },
    {id: 33,
    pais: "Lituania"
    },
    {id: 34,
    pais: "Polonia"},
    {id: 35,
    pais: "San Marino"},
    {id: 36,
    pais: "Ucrania"},
  ]    

  cancions.forEach(
    async item => {
        item.puntos = 0
        const cancion = await Cancion.findOrCreate({where: {id: item.id}, defaults: item})
    }
  )