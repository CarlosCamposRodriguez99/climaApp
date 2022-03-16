import useClima from "../hooks/useClima"

const Resultado = () => {

  const { resultado } = useClima()

  const { name, main } = resultado

  // Grados Kelvin
  const kelvin = 273.15


  return (
    <div className="contenedor clima">
      <h2>El Clima de {name} es:</h2>

      <p>
          { parseInt(main.temp - kelvin) } <span>&#x2103;</span>
      </p>
      <div>

      </div>
      
      
    </div>
  )
}

export default Resultado
