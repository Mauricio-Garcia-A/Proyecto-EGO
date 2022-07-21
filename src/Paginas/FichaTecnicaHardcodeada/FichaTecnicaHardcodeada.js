import React, { useEffect } from 'react';
import './FichaTecnicaHardcodeada.css'
import CarruselPartesVehiculo from '../../Componentes/CarruselPartesVehiculo/CarruselPartesVehiculo';

import { useSimuladorAPI } from '../../Hooks/useSimuladorAPI';

export default function FichaTecnicaHardcodeada(){
    useEffect(() => {
        window.scrollTo(0, 0)                                                                                           // Scrollea al arriba de todo, al iniciar la pagina
    }, [])
                                                                          
    const {ITEM_PARTES, SECCIONES, MODELO_SELECCIONADO} = useSimuladorAPI()
      
    const ItemDescripcion = ({Titulo, Descripcion, Imagen, Par})=>{
        return(
                <section className={Par ? 'seccion-decripcion-vehiculo-FichaTecnicaHardcodeada seccion-par-FichaTecnicaHardcodeada': 'seccion-decripcion-vehiculo-FichaTecnicaHardcodeada seccion-impar-FichaTecnicaHardcodeada'} > 
                    <div className='contenedor-textos-seccion-FichaTecnicaHardcodeada'> 
                        <h4 className='titulo-seccion-FichaTecnicaHardcodeada'>{Titulo}</h4>
                        <p className='descripcion-FichaTecnicaHardcodeada'> {Descripcion} </p>
                    </div>
                    <div className='contenedor-imagen-seccion-FichaTecnicaHardcodeada'>
                        <img src={Imagen} alt="img"  className='imagen-seccion-FichaTecnicaHardcodeada'/>
                    </div>
                </section>
        )
    }

    return (
        <>
            <div>
                <section className='encabezado-FichaTecnicaHardcodeada' > 
                    <div className='contenedor-imagen-encabezado-FichaTecnicaHardcodeada'>
                        <img src={MODELO_SELECCIONADO.photo} alt="img"  className='imagen-vehiculo-FichaTecnicaHardcodeada'/>
                    </div>
                    <div className='contenedor-texto-encabezado-FichaTecnicaHardcodeada'> 
                        <p  className='subtitulo-FichaTecnicaHardcodeada'> <b>{MODELO_SELECCIONADO.name}</b></p>
                        <h1 className='titulo-FichaTecnicaHardcodeada'>{MODELO_SELECCIONADO.title} </h1>
                        <p className='descripcion-FichaTecnicaHardcodeada'>{MODELO_SELECCIONADO.description} </p>
                    </div>  
                </section>
                <CarruselPartesVehiculo ItemsPartes={ITEM_PARTES}/>    
                <section > 
                    {SECCIONES.map((itemSeccion, i)=>{
                        let seccionPar=false
                        if ((i%2)===0) {
                            seccionPar=true
                        }
                        return(
                            <ItemDescripcion key={'itemDescropcion'+i} Titulo={itemSeccion.title} Descripcion={itemSeccion.content} Imagen={itemSeccion.image} Par={seccionPar} /> 
                        )
                    })}    
                </section>
            </div>
        </>
    )
};

