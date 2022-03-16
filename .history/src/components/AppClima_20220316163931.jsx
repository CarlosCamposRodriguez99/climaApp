import Formulario from './Formulario'
import Resultado from './Resultado'
import Loading from './Loading'
import useClima from '../hooks/useClima'

const AppClima = () => {

  const { resultado, cargando } = useClima()
  return (
    <>
        <main className="dos-columnas">
          <Formulario />

          { craga
          
          resultado?.name && <Resultado />}
        </main>
    </>
  )
}

export default AppClima
