import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import './FichaTecnica.css'
import CarruselPartesVehiculo from '../../Componentes/CarruselPartesVehiculo/CarruselPartesVehiculo';
import { useDetallesDelModelo } from '../../Hooks/useDetallesDelModelo';
import PlaceholderFichaTecnica from '../../Componentes/ItemsLoading/PlaceholderFichaTecnica/PlaceholderFichaTecnica';

export default function FichaTecnica(){
    useEffect(() => {
        window.scrollTo(0, 0)                                                                                           // Scrollea al arriba de todo, al iniciar la pagina
    }, [])

    const {id} = useParams();                                                                                           // Extraigo ID de la URL
    const {modelo,  model_features, model_highlights, loading} = useDetallesDelModelo({id})
    
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
        <>
        {loading ? <PlaceholderFichaTecnica />
                 :  <div>
                        <section className='encabezado-FichaTecnica' > 
                            <div className='contenedor-imagen-encabezado-FichaTecnica'>
                                <img src={modelo.photo} alt="img"  className='imagen-vehiculo-FichaTecnica'/>
                            </div>
                            <div className='contenedor-texto-encabezado-FichaTecnica'> 
                                <p  className='subtitulo-FichaTecnica'> <b>{modelo.name}</b></p>
                                <h1 className='titulo-FichaTecnica'>{modelo.title} </h1>
                                <p className='descripcion-FichaTecnica'>{modelo.description} </p>
                            </div>  
                        </section>
                        <CarruselPartesVehiculo ItemsPartes={model_features}/>    
                        <section > 
                            {model_highlights.map((itemSeccion, i)=>{
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
        }
        </>
        
        
    )
};

