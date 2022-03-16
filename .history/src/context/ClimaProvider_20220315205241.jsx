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
    try { async}

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