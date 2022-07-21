import React from 'react'
import {Link} from 'react-router-dom'
import useSEO from '../../Hooks/useSEO'
import IconoError from './IconoError'
import './PaginaError.css'

export default function PaginaError(){
    useSEO({title:'Error', description:'Bienvenidos a EGO'})

    return (
        <div className='contenedor-PaginaError'>
            <IconoError className='icono-error-PaginaError'/>
            <h1 className='titulo-PaginaError'>NO SE HA ENCONTRADO ESA PAGINA.</h1>
            
            <h2>Parece que no se ha encontrado nada en esta ubicación.</h2>
            <p>¡Animo! Puedes volver al HOME y seguir viendo todas nuestras promociones</p>
            <Link to="/" className='boton-PaginaError'>Volver al HOME</Link>
        </div>
    )
}

