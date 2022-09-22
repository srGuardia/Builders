import { useEffect, useState, useCallback } from 'react'

import OpenWeatherAPI from './services/api'
import { Weather } from './@types/weather'

import { Card } from './components/Card'
import { Main } from './components/Main'
import { Loading } from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [weather, setWeather] = useState<Weather | null>(null)

  useEffect(() => {
    const subscriber = navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        try {
          OpenWeatherAPI.getWeather(latitude, longitude).then((data) => {
            setWeather(data)
            setIsLoading(false)
          })
        } catch (error) {
          setIsLoading(false)
          console.error('Erro API')
        }
      },
      () => {
        console.error('Deu erro')
      }
    )

    return subscriber
  }, [])

  const handleRecharge = useCallback(() => {
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        try {
          OpenWeatherAPI.getWeather(latitude, longitude).then((data) => {
            setWeather(data)
            setIsLoading(false)
          })
        } catch (error) {
          setIsLoading(false)
          console.error('Erro API')
        }
      },
      () => {
        console.error('Deu erro')
      }
    )
  }, [weather])

  return (
    <Main>
      {isLoading && <Loading text='Carregando...' />}
      <Card data={weather} handleRecharge={handleRecharge} />
    </Main>
  )
}

export default App
