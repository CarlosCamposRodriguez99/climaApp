import useClima from "../hooks/useClima"

const Resultado = () => {

  const { resultado } = useClima()

  const { name, main } = resultado

  // Grados Kelvin

  
  return (
    <div className="contenedor">
      <h2>El Clima de {name} es:</h2>

      <p>
        Temperatura Actual: {main.temp}
      </p>
      
    </div>
  )
}

export default Resultado
