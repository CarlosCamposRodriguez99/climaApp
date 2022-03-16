import useClima from "../hooks/useClima"

const Resultado = () => {

  const { resultado } = useClima()

  const { name, main } = resultado

  // Grados Kelvin
  const kelvin = 273


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
