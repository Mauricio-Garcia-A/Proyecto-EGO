import React from 'react'
import './ComparacionVehiculo.css'
import ImagenVehiculoDerecha from '../../Imagenes/right-car.webp'
import ImagenVehiculoIzquierda from '../../Imagenes/left-car.webp'

export default function ComparacionVehiculo() {
    return (
        <div className='contenedor-ComparacionVehiculo'>
            <section className='contenedor-texto-ComparacionVehiculo'>
                <h1 className='titulo-ComparacionVehiculo'>¿Estás entre varias opciones?</h1>
                <span className='subtitulo-ComparacionVehiculo'>Seleccioná hasta 3 modelos y compará sus características</span>
                <button className='boton-ComparacionVehiculo'>Coparar ahora</button>
            </section>
            <section className='contenedor-imagenes-ComparacionVehiculo'>
                <img src={ImagenVehiculoIzquierda} alt='img' className='imagenes-ComparacionVehiculo'/>
                <img src={ImagenVehiculoDerecha} alt='img' className='imagenes-ComparacionVehiculo'/>
            </section>
        </div>
    )
}