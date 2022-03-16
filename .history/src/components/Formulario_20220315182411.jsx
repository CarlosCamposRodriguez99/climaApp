

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
          <label htmlFor="pais">País</label>
          <select
            id="pais"
            name="pais"
          >
            <option value=""></option>

          </select>
        </div>
      </form>
    </div>
  )  
}

export default Formulario
