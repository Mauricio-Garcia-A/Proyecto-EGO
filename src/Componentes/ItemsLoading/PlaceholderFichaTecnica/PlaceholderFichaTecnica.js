import React from 'react'
import ImagenVehiculoDefault from '../../../Imagenes/VehiculoDefault.png'
import './PlaceholderFichaTecnica.css'


export default function PlaceholderFichaTecnica() {


    return (
        <>
            <section className='encabezado-PlaceholderFichaTecnica' > 
                <div className='contenedor-imagen-encabezado-PlaceholderFichaTecnica'>
                    <img src={ImagenVehiculoDefault} alt="img"  className='imagen-vehiculo-PlaceholderFichaTecnica'/>
                </div>
                <div className='contenedor-texto-encabezado-PlaceholderFichaTecnica'> 
                    <div className='texto-subtitulo-modelo-PlaceholderFichaTecnica' />
                    <div className='texto-titulo-PlaceholderFichaTecnica' style={{width:'80%'}}/>
                    <div className='texto-titulo-PlaceholderFichaTecnica' style={{width:'30%'}}/>
                    <br />
                    <div className='texto-descripcion-PlaceholderFichaTecnica' />
                    <div className='texto-descripcion-PlaceholderFichaTecnica' />
                    <div className='texto-descripcion-PlaceholderFichaTecnica'  style={{width:'40%'}}/>
                </div>  
            </section>

            <div className='contenedor-carrusel-PlaceholderFichaTecnica'> 
                <div className='gradienteDerecho-PlaceholderFichaTecnica ' />
                { ['','','',''].map(()=>{ 
                    return(
                        <div className='contenedor-item-PlaceholderFichaTecnica'>
                            <div className='contenedor-imagen-item-carrusel-PlaceholderFichaTecnica'>
                                <img src={ImagenVehiculoDefault} alt="img" className='imagen-PlaceholderFichaTecnica'/> 
                            </div> 
                            <div className='contenedor-texto-item-carrusel-PlaceholderFichaTecnica'>
                                <div className='texto-descripcion-PlaceholderFichaTecnica' style={{width:'40%'}}/>
                                <br />
                                <div className='texto-descripcion-PlaceholderFichaTecnica'  /> 
                                <div className='texto-descripcion-PlaceholderFichaTecnica'  />    
                            </div>  
                                                    
                        </div>
                    )
                })}
            </div>

            <section > 
                {['',''].map((itemSeccion, i)=>{
                    let seccionPar=false
                    if ((i%2)===0) {
                        seccionPar=true
                    }
                    return(
                        <section className={seccionPar ? 'seccion-decripcion-vehiculo-PlaceholderFichaTecnica seccion-par-PlaceholderFichaTecnica': 'seccion-decripcion-vehiculo-PlaceholderFichaTecnica seccion-impar-PlaceholderFichaTecnica'} > 
                            <div className='contenedor-textos-seccion-PlaceholderFichaTecnica'> 
                                <div className='texto-titulo-PlaceholderFichaTecnica' style={{width:'30%'}}/>
                                <br />
                                <div className='texto-descripcion-PlaceholderFichaTecnica' />
                                <div className='texto-descripcion-PlaceholderFichaTecnica' />
                                <div className='texto-descripcion-PlaceholderFichaTecnica'  style={{width:'40%'}}/>
                                <br />
                            </div>
                            <div className='contenedor-imagen-seccion-PlaceholderFichaTecnica'>
                                <img src={ImagenVehiculoDefault} alt="img"  className='imagen-seccion-PlaceholderFichaTecnica'/>
                            </div>
                        </section> 
                    )
                })}    
            </section>  
        </>
    )
}