import useClima from "../hooks/useClima"

const Resultado = () => {

  const { resultado } = useClima()

  const { name, main } = resultado
  return (
    <div className="contenedor">
      <h2>El Clima de {name} es:</h2>

      <p>
        
      </p>
      
    </div>
  )
}

export default Resultado
