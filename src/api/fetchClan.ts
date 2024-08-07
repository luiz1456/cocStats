import axios from 'axios'

export async function fetchClan(clanTag: string) {
  try {
    const formatedClanTag = clanTag.replace(/^#/, '')
    const url = `https://coc-proxy-api.onrender.com/searchClan/${formatedClanTag}`
    const data = await axios.get(url)
    return data.data
  } catch {
    console.log('erro')
  }
}
