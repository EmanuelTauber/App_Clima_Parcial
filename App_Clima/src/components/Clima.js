import React from 'react';

const Clima = ({ resultado }) => {

    const { name, main, } = resultado;

    if(!name) return null;

    const kelvin = 273.15; //para pasar de kelvin a grados C°


    return (  
        <div className="card-panel blue col s12">
            <div className="black-text">
            <h3>La temperatura de {name}  es: </h3>
            <p className="temperatura">Cº{( main.temp - kelvin).toFixed(0)}</p>
            <h3>La humedad es de :</h3>
            <p className="Humedad">{( main.humidity)}%</p>
           
            </div>
        </div>
    );
}
 
export default Clima;