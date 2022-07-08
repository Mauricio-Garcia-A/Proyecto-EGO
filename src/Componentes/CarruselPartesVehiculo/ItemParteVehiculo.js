import React from 'react';
import "./CarruselPartesVehiculo.css";

export default function ItemParteVehiculo({photo,titulo,descripcion}) {
    return (
        <div className='contenedor-ItemParteVehiculo'>
            <div className='contenedor-imagen-ItemParteVehiculo'>
                <img src={photo} alt="img" className='imagen-ItemParteVehiculo'/> 
            </div>   
            <h3 className='titulo-ItemParteVehiculo'> {titulo} </h3>
            <p className='descripcion-ItemParteVehiculo'> {descripcion}</p>                             
        </div>
    )
}