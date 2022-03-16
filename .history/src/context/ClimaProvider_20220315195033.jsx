import { useState, createContext } from 'react';

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

  const [busqueda, setyBusqueda] = useState()


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