import useClima from "../hooks/useClima"

const Resultado = () => {

  const { resultado } = useClima()

  const { resultado }
  return (
    <div className="contenedor">
      <h2>El Clima de {} es:</h2>
      
    </div>
  )
}

export default Resultado
