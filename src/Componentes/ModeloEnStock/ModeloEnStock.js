import React, { useContext, useState } from 'react'
import ModeloContext from '../../Contextos/ModeloContext'
import { useSimuladorAPI } from '../../Hooks/useSimuladorAPI'
import IconoFlecha from './IconoFlecha'
import { NavLink } from "react-router-dom"
import './ModeloEnStock.css'



export default function ModeloEnStock () {
    const [desplegado, setDesplegado]=useState(false)
    const {MODELO_SELECCIONADO} = useSimuladorAPI()
    const {setIdContex, setNameContex} = useContext(ModeloContext) 

    const handleChange = (e) => {
        setIdContex(0)
        setNameContex('Hilux-DXSR')
    }

    return (
        <div className='contenedor-ModeloEnStock' >
           <div className='titulo-ModeloEnStock '><span >Modelo en Stock - Oportunidades</span></div>
           <div className='contenedor-item-ModeloEnStock'>
                <section className='contenedor-visible-ModeloEnStock'>
                    <div className='contenedor-stock-ModeloEnStock'><b>EN STOCK</b></div>

                    <div className='contenedor-imagen-ModeloEnStock'>
                        <img src={MODELO_SELECCIONADO.photo} alt="Foto"  className='imagen-ModeloEnStock' />
                    </div>
                    <h3 className='texto-titulo-ModeloEnStock'> {MODELO_SELECCIONADO.name} </h3>
                    <p className='texto-informacion-ModeloEnStock'> {MODELO_SELECCIONADO.year} | {MODELO_SELECCIONADO.price}</p>
                </section>
                
                <section className={desplegado ? 'contenedor-desplegable-ModeloEnStock ' : 'contenedor-desplegable-ModeloEnStock desplegable-desactivo-ModeloEnStock'}>
                    <div className={desplegado ? 'contenedor-informacion-ModeloEnStock ' : 'contenedor-informacion-Mcontenedor informacion-desactivo-Mcontenedor'}>
                        <h3 className='titulo-informacion-ModeloEnStock'> CARACTERISTICAS </h3>
                        <p className='caracteristica-informacion-ModeloEnStock'> <b>Modelo:</b> {MODELO_SELECCIONADO.year}</p>
                        <p className='caracteristica-informacion-ModeloEnStock'> <b>Motor:</b> {MODELO_SELECCIONADO.motor}</p>
                        <p className='caracteristica-informacion-ModeloEnStock'> <b>Custible:</b> {MODELO_SELECCIONADO.combustible}</p>
                        <p className='caracteristica-informacion-ModeloEnStock'> <b>Diametro Llantas:</b> {MODELO_SELECCIONADO.diametroRueda}</p>
                        <p className='caracteristica-informacion-ModeloEnStock'> <b>Transmision:</b> {MODELO_SELECCIONADO.transmision}</p>
                        <br/><br/>
                        <NavLink to={`/modelo/0/Hilux-DXSR`} className='boton-ModeloEnStock' onClick={handleChange}>Ver ficha tecnica</NavLink>                     
                    </div>
                </section>
                <div className='contenedor-boton-flecha-ModeloEnStock'> 
                    <button className={desplegado ? 'boton-flecha-ModeloEnStock boton-desplegado-activo-ModeloEnStock ' : 'boton-flecha-ModeloEnStock'} onClick={()=>setDesplegado(!desplegado)}><IconoFlecha titulo='derecha' className='icono-flecha-ModeloEnStock' /></button>
                </div>
           </div>

        </div>
    )
}

