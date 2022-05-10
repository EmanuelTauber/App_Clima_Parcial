import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsulta }) => {

    
    const [error, guardarError] = useState(false);

      // extraer ciudad y el pais
      const { ciudad, pais } = busqueda;
    // funcion que coloca los elementos en el state

    const handleChange = e => {
        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        });
    }

    // Cuando el user da submit al formulario
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(ciudad.trim() === '' || pais.trim() === '' ){
            guardarError(true)
            return;
        }
        guardarError(false);

        guardarConsulta(true)
        
    }

    return ( 
       <form
       onSubmit={handleSubmit}
        >
       { error ? <Error mensaje='Ambos cmapos son obligatorios' /> : null }
      
           <div className="input-field col s12">
               <input
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
                />

                <label htmlFor="ciudad">Escriba una Ciudad: </label>
           </div>

           <div className="input-field col s12">
               <select
                name="pais"
                id="pais"
                value="pais"
                onChange={handleChange}
               >
                   <option value="">Selecione un pais</option>
                   <option value="US">Estados Unidos</option>
                   <option value="MX">Mexico</option>
                   <option value="AR">Argentina</option>
               </select>
           </div>
       </form>
     );
}
 
export default Formulario;