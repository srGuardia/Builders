import axios from 'axios'

export const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  params: {
    units: 'metric',
    lang: 'pt_br',
    appid: import.meta.env.VITE_API_KEY,
  },
})
