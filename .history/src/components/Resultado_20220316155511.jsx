import useClima from "../hooks/useClima"

const Resultado = () => {

  const { resultado } = useClima()

  const { name, main } = resultado

  // Grados Kelvin
  const kelvin = 273.15


  return (
    <div className="contenedor">
      <h2>El Clima de {name} es:</h2>

      <p>
        Temperatura Actual: { parseInt(main.temp - kelvin) } <span>&#x2103;</span>
      </p>
      <p>
        Temperatura Mínima: { parseInt(main.temp-min - kelvin) } <span>&#x2103;</span>
      </p>
      <p>
        Temperatura Máxima: { parseInt(main.temp-max - kelvin) } <span>&#x2103;</span>
      </p>
      
    </div>
  )
}

export default Resultado
