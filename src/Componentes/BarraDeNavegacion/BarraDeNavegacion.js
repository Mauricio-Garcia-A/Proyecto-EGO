import React from 'react'
import './BarraDeNavegacion.css'

export default function BarraDeNavegacion() {
    return (
        <div className='contenedor-BarraDeNavegacion'>
            <div className='icono-BarraDeNavegacion'>
                MM
            </div>
            <div className='contenedor-botones-BarraDeNavegacion'>
                <button>Home</button>
                <button>Modelos</button>
                <button>Ficha Tecnica</button>
            </div>
        </div>
    )
}

