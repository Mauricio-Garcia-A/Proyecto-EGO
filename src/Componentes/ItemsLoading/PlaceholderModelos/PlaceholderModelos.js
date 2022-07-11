import React from 'react';
import ImagenVehiculoDefault from '../../../Imagenes/VehiculoDefault.png'

import './PlaceholderModelos.css'

export default function PlaceholderModelos() {
    const items =['item001','item002','item003','item004','item005','item006','item007','item008']
    return (
        <div className='contenedor-PlaceholderModelos' >
            {items.map((item)=>{
                return(
                    <div id={"mod"} className='contenedor-item-PlaceholderModelos' key={item}>
                        <div className='texto-titulo-PlaceholderModelos' />
                        <div className='contenedor-subtitulo-PlaceholderModelos'> <div className='texto-subtitulo-año-PlaceholderModelos' /> | <div className='texto-subtitulo-precio-PlaceholderModelos' /></div>
                        <div className='contenedor-imagen-ItemVehiculo'>
                            <img src={ImagenVehiculoDefault} alt="Foto"  className='imagen-ItemVehiculo' />
                        </div>                    
                    </div>
                )
            })} 
        </div>
    );
};

