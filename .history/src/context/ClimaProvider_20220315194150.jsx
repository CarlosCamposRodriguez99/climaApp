import { useState, createContext } from 'react';

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {


  return (
    <ClimaContext.Provider>

      {children}
    </ClimaContext.Provider>

  )
}