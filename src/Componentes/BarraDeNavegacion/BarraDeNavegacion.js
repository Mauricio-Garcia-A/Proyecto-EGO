import React from 'react'
import './BarraDeNavegacion.css'
import { Link } from "react-router-dom"

export default function BarraDeNavegacion() {
    return (
        <div className='contenedor-BarraDeNavegacion'>
            <div className='icono-BarraDeNavegacion'>
                MM
            </div>
            <div className='contenedor-botones-BarraDeNavegacion'>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/modelos">MODELOS</Link>
                <Link to="/fichatecnica">FICHA TECNICA</Link>
            </nav>
            </div>
        </div>
    )
}

