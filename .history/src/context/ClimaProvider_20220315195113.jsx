import { useState, createContext } from 'react';

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  })


  return (
    <ClimaContext.Provider
      value={{}}
    >

      {children}
    </ClimaContext.Provider>

  )
}

export {
  ClimaProvider
}

export default ClimaContext;