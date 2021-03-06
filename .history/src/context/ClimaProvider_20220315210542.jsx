import { useState, createContext } from 'react';
import axios from 'axios';

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

  console.log(import.meta.env.VITE_API_KEY)

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  const datosBusqueda = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const consultarClima = async datos => {
    try {
      const { pais, ciudad } = datos

      const appId = import.meta.env.VITE_API_KEY

      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

      const { data } = await axios(url)

    } catch (error) {
      console.log(error)

    }

  }


  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarClima
      }}
    >

      {children}
    </ClimaContext.Provider>

  )
}

export {
  ClimaProvider
}

export default ClimaContext;