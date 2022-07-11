import React from 'react'
import ImagenVehiculoDefault from '../../Imagenes/VehiculoDefault.png'
import './ItemVehiculo.css'

export default function ItemVehiculo({id='001',name='Vehiculo 001',price='00.000.000', year='2022', photo=ImagenVehiculoDefault}) {
    return (
        <div id={"mod"+id} className='contenedor-ItemVehiculo'>
            <h3 className='texto-titulo-ItemVehiculo'> {name} </h3>
            <p className='texto-informacion-ItemVehiculo'> {year} | {price}</p>
            <div className='contenedor-imagen-ItemVehiculo'>
                <img src={photo} alt="Foto"  className='imagen-ItemVehiculo' />
            </div>                    
        </div>
    )
}
