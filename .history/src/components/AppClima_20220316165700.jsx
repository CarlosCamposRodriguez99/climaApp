import Formulario from './Formulario'
import Resultado from './Resultado'
import Loading from './Loading'
import useClima from '../hooks/useClima'

const AppClima = () => {

  const { resultado, cargando, noResultado } = useClima()
  return (
    <>
        <main className="dos-columnas">
          <Formulario />

          { cargando ? <Loading /> :
            resultado?.name && <Resultado /> ?
            noResultado : <}
        </main>
    </>
  )
}

export default AppClima
