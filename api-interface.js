import { api } from 'src/boot/axios';

const foxApi = 'https://randomfox.ca/floof/'
const dogApi = 'https://dog.ceo/api/breeds/image/random'
const catApi = 'https://cataas.com/cat?json=true'



const getFox = (async () => {
  return api(foxApi)
})

const getDog =(async () => {
  return api(dogApi)
})

const getCat =(async () => {
  const catUrl = await api(catApi)
  return `https://cataas.com${catUrl.data.url}`
})

export { getFox, getDog, getCat }
