import axios from 'axios'

export async function fetchPlayer(playerTag: string) {
  try {
    const url = 'http://localhost:3333/searchPlayer/'
    const formatedPlayerTag = playerTag.replace(/^#/, '')
    const data = await axios.get(`${url}${formatedPlayerTag}`)
    return data.data
  } catch {
    console.log('erro')
  }
}

// axios.interceptors.response.use(
//   (response) => {
//     response.data.heroes = response.data.heroes.map((element) => {
//       if (element.name === 'Barbarian King') {
//         element = {
//           ...element,
//           namePt: 'Rei Barbáro',
//           description:
//             'O Rei Bárbaro é o Bárbaro mais durão e cruel de todo o reino, cujo apetite pelo elixir negro o fez crescer como gigante. Ele pode atacar vilas inimigas ou proteger a sua.',
//         }
//       }
//       return element
//     })
//     console.log('aqui resposta')
//     return response
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )
