import React, { useState } from 'react'
import './BarraDeNavegacion.css'
import { NavLink } from "react-router-dom"
import LogoEGO from '../Logo/LogoEGO'
import IconoBarraDeNavegacion from './IconoBarraDeNavegacion'

export default function BarraDeNavegacion() {
    const [menuDesplegado, setMenuDespegado] = useState(false)

    return (
        <div className='contenedor-BarraDeNavegacion'>
            <div className='icono-BarraDeNavegacion'>
                <LogoEGO width='45px' height='45px' />
            </div>
            <div className='contenedor-links-BarraDeNavegacion'>
                <button className='boton-menu-desplegable-BarraDeNavegacion' onClick={()=>{setMenuDespegado(!menuDesplegado)}}>
                    {menuDesplegado ? <IconoBarraDeNavegacion titulo='cerrarMenu' width='40px' height='40px'/> : <IconoBarraDeNavegacion titulo='abrirMenu'  width='40px' height='40px'/> }
                </button>
                <nav className={menuDesplegado ? 'nav-BarraDeNavegacion' : 'nav-BarraDeNavegacion menu-desactivo'}>
                    <NavLink to="/" className='link-BarraDeNavegacion'>HOME</NavLink>
                    <NavLink to="/modelos" className='link-BarraDeNavegacion'>MODELOS</NavLink>
                    <NavLink to="/fichatecnica" className='link-BarraDeNavegacion'>FICHA TECNICA</NavLink>  
                </nav>
            </div>  
        </div>
    )
}

