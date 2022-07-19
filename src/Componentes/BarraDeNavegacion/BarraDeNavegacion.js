import React, { useContext, useState } from 'react'
import './BarraDeNavegacion.css'
import { NavLink } from "react-router-dom"
import LogoEGO from '../Logo/LogoEGO'
import IconoBarraDeNavegacion from './IconoBarraDeNavegacion'
import ModeloContext from '../../Contextos/ModeloContext'

export default function BarraDeNavegacion() {
    const [menuDesplegado, setMenuDespegado] = useState(false)

    const { idContex, nameContex }= useContext(ModeloContext)

    return (
        <div className='contenedor-BarraDeNavegacion'>
            <div className='icono-BarraDeNavegacion'>
                <NavLink to="/" >
                    <LogoEGO width='45px' height='45px' />
                </NavLink>
            </div>
            <div className='contenedor-links-BarraDeNavegacion'>
                <div className='contenedor-boton-menu-desplegable-BarraDeNavegacion'>
                    <span className='texto-menu-desplegable-BarraDeNavegacion'>Menú</span>
                    <button className='boton-menu-desplegable-BarraDeNavegacion' onClick={()=>{setMenuDespegado(!menuDesplegado)}}>
                        {menuDesplegado ? <IconoBarraDeNavegacion titulo='cerrarMenu' width='40px' height='40px'/> : <IconoBarraDeNavegacion titulo='abrirMenu'  width='40px' height='40px'/> }
                    </button>                    
                </div>

                <div className={menuDesplegado ?'contenedor-nav-BarraDeNavegacion':'contenedor-nav-BarraDeNavegacion contenedor-desactivo'}>
                    <nav className={menuDesplegado ? 'nav-BarraDeNavegacion' : 'nav-BarraDeNavegacion menu-desactivo'} onClick={()=>{setMenuDespegado(!menuDesplegado)}}>
                        <NavLink to="/" className='link-BarraDeNavegacion'>HOME</NavLink>
                        <NavLink to="/modelos" className='link-BarraDeNavegacion'>Modelos</NavLink>
                        <NavLink to={`/modelo/${idContex}/${nameContex}`} className='link-BarraDeNavegacion'>Ficha de modedelo</NavLink>  
                    </nav>
                </div>
             
            </div>  
        </div>
    )
}