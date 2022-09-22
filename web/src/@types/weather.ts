export type Coord = {
  lat: number
  lon: number
}

type Main = {
  feels_like: number
  grnd_level: number
  humidity: number
  pressure: number
  sea_level: number
  temp: number
  temp_max: number
  temp_min: number
}
type WeatherDetail = {
  id: number
  main: string
  description: string
  icon: string
}

export type Weather = {
  coord: Coord
  weather: WeatherDetail
  main: Main
  sys: { country: string }
  name: string
}
