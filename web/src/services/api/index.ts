import { Weather } from '../../@types/weather'
import { axiosConfig } from './config'

class OpenWeatherAPI {
  async getWeather(lat: number, lon: number): Promise<Weather> {
    const { data } = await axiosConfig.get('/weather', {
      params: { lat, lon },
    })

    return data
  }
}

export default new OpenWeatherAPI()
