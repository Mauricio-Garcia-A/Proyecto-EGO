import React from 'react';
import ItemParteVehiculo from './ItemParteVehiculo.js';
import "./CarruselPartesVehiculo.css";

export default function CarruselPartesVehiculo({ItemsPartes}) {

    let crearListaItems = ItemsPartes.map((data) => 
        <ItemParteVehiculo 
            key={'itemParteVehiculo'+data.id}
            titulo={data.titulo} 
            descripcion={data.descripcion} 
            photo={data.photo} 
        />
    );

    return (
        <div className='contenedor-CarruselPartesVehiculo'> 
            <div className='contenedor-items-CarruselPartesVehiculo'>            
                <div className='gradienteDerecho-CarruselPartesVehiculo' />
                <div className='gradienteIzquerdo-CarruselPartesVehiculo' />
                {crearListaItems}                
            </div>
        </div>
    )
}