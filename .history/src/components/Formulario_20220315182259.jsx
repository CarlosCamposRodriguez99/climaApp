

const Formulario = () => {
  return (
    <div className="contenedor">
      <form>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input 
            type="text"
            id="ciudad"
            name="ciudad"
          />
        </div>
        <div className="campo">
          <label htmlFor="ciudad">País</label>
          <select>

          </select>
        </div>
      </form>
    </div>
  )  
}

export default Formulario
