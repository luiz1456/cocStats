import axios from 'axios'

export async function fetchPlayer(playerTag: string) {
  try {
    const url = 'https://coc-proxy-api.onrender.com/searchPlayer/'
    const formatedPlayerTag = playerTag.replace(/^#/, '')
    const data = await axios.get(`${url}${formatedPlayerTag}`)
    return data.data
  } catch {
    console.log('erro')
  }
}
