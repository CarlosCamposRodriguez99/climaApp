import { useState, createContext } from 'react';

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {


  return (
    <ClimaContext.Prov>

      {children}
    </ClimaProvider>

  )
}