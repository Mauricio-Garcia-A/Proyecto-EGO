import React from 'react';
import './ItemsServiciosHome.css'
import IconoItemServicio from './IconoItemServicio'


export default function ItemsServiciosHome() {
const ITEMS_SERVICIOS =[{titulo:'0 KM', subtitulo:'¡Todas las Marcas!', icono:'cerokm'},
                        {titulo:'USADOS', subtitulo:'Comprar / Vender', icono:'usado'}, 
                        {titulo:'PLAN DE AHORRO', subtitulo:'¡Planes Seguros y Confiables!', icono:'planahorro'}
                        ]


    return (
        <div className='contenedor-ItemsServiciosHome'>
            {ITEMS_SERVICIOS.map((item,i)=>{
                return(
                    <div key={'itemServicio'+i} className='contenedor-item-ItemsServiciosHome' >
                        <IconoItemServicio titulo={item.icono} width='1500px' />
                        <div className='contenedor-texto-ItemsServiciosHome'>
                            <h1>{item.titulo}</h1>
                            <p>{item.subtitulo}</p>                            
                        </div>

                    </div>                    
                )
            })}

        </div>
    )
}