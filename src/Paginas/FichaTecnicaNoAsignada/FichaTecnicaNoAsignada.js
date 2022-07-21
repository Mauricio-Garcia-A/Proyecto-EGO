import React from 'react'
import {Link} from 'react-router-dom'
import './FichaTecnicaNoAsignada.css'


export default function FichaTecnicaNoAsignada() {
    return (
        <div className='contenedor-FichaTecnicaNoAsignada'>
            <h1 className='titulo-FichaTecnicaNoAsignada '>¡Por favor seleccione un Modelo de Vehiculo!</h1>
            <h2>Para visualisar la Ficha tecnica de un Veihculo, en donde prodra ver todas sus caracteristicas, primero debe seleccionar el Modelo dentro de nuestro catalogo de Vehiculos.</h2>
            
            <p>Para ello, primero debe dirigirse a la seccion de MODELOS, y ahi encontrara los modelos disponibles.</p>
            <Link to="/modelos" className='boton-FichaTecnicaNoAsignada '>Ver Modelos</Link>
        </div>
    )
}

