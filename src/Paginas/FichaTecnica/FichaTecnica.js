import React from 'react';
import { useSimuladorAPI } from '../../Hooks/useSimuladorAPI';
import './FichaTecnica.css'
import Imagen1 from '../../Imagenes/Imagen1.png'
import CarruselPartesVehiculo from '../../Componentes/CarruselPartesVehiculo/CarruselPartesVehiculo';

export default function FichaTecnica(){
    const {SECCIONES,ITEM_PARTES}=useSimuladorAPI()

    const ItemDescripcion = ({Titulo, Descripcion, Imagen, Par})=>{
        return(
                <section className={Par ? 'seccion-decripcion-vehiculo-FichaTecnica seccion-par-FichaTecnica': 'seccion-decripcion-vehiculo-FichaTecnica seccion-impar-FichaTecnica'} > 
                    <div className='contenedor-textos-seccion-FichaTecnica'> 
                        <h4 className='titulo-seccion-FichaTecnica'>{Titulo}</h4>
                        <p className='descripcion-FichaTecnica'> {Descripcion} </p>
                    </div>
                    <div className='contenedor-imagen-seccion-FichaTecnica'>
                        <img src={Imagen} alt="img"  className='imagen-seccion-FichaTecnica'/>
                    </div>
                </section>
        )
    }

    return (
        <div>
            <section className='encabezado-FichaTecnica' > 
                <div className='contenedor-imagen-encabezado-FichaTecnica'>
                    <img src={Imagen1} alt="img"  className='imagen-vehiculo-FichaTecnica'/>
                </div>
                <div className='contenedor-texto-encabezado-FichaTecnica'> 
                    <p  className='subtitulo-FichaTecnica'> <b>Hilux DX/SR</b></p>
                    <h1 className='titulo-FichaTecnica'>Preparada para cualquier desafío </h1>
                    <p className='descripcion-FichaTecnica'> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 </p>
                 </div>  
            </section>
                <CarruselPartesVehiculo ItemsPartes={ITEM_PARTES}/>
            <section > 
                
            </section>

            {SECCIONES.map((itemSeccion, i)=>{
                let seccionPar=false
                if ((i%2)===0) {
                    seccionPar=true
                }
                return(
                       <ItemDescripcion key={'itemDescropcion'+i} Titulo={itemSeccion.titulo} Descripcion={itemSeccion.descripcion} Imagen={itemSeccion.imagen} Par={seccionPar} /> 
                )
            })}
        </div>
    )
};

