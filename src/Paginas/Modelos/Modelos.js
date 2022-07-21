import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PlaceholderModelos from '../../Componentes/ItemsLoading/PlaceholderModelos/PlaceholderModelos';
import ItemVehiculo from '../../Componentes/ItemVehiculo/ItemVehiculo';
import SelectorModelos from '../../Componentes/SelectorModelos/SelectorModelos';
import { useModelos } from '../../Hooks/useModelos';
import useSEO from '../../Hooks/useSEO';
import './Modelos.css'


const SELECCIONAR_MODELO = [{   tipo:'Marca',
                                opciones:[  {titulo:'Sedan', valor:'1'},
                                            {titulo:'Hatchback', valor:'2'},
                                            {titulo:'Pickups y Comerciales', valor:'3'},
                                            {titulo:'SUVs', valor:'4'}]
                            }]
const OREDENAR_MODELO = [{  tipo:'Año', 
                            opciones:[  {titulo:'Acendente', valor:'year'},
                                            {titulo:'Desendente', valor:'-year'}]
                         },
                         {   tipo:'Precio', 
                            opciones:[  {titulo:'Mas Bajo', valor:'price'},
                                        {titulo:'Mas Alto', valor:'-price'}]
                        }]
          
export default function Modelos() {
    const [segment,setSegment]=useState('')
    const [ordering,setOrdering]=useState('')

    const {modelos,loading}=useModelos({segment, ordering})

    const tituloSeoM = loading ? 'Cargando...' : `${modelos.length} Modelos`
    const descripcionSeoM = `Descripcion de los ${modelos.length} Modelos`
    useSEO({title: tituloSeoM, description: descripcionSeoM})

    return (
        <div>
            <div className='encabezado-Modelos'>
                <h1>Descubrí todos los modelos </h1>
                <div className='contenedor-selectores-Modelos'>
                    <SelectorModelos 
                        titulo='filtrar'
                        opcionPorDefectoTitulo='Filtar por'
                        opcionPorDefectoValor=''
                        grupoDeOpciones = {SELECCIONAR_MODELO}
                        handleChange={(e)=>{setSegment(e.target.value)}}
                    />
                    <SelectorModelos 
                        titulo='ordenar'
                        opcionPorDefectoTitulo='Ordenar por'
                        opcionPorDefectoValor=''
                        grupoDeOpciones = {OREDENAR_MODELO}
                        handleChange={(e)=>{setOrdering(e.target.value)}}
                    />                
                </div>    
            </div>

            {loading ? <PlaceholderModelos /> 
                     :  <section className='contenedor-items-vehiculos-Modelos'>
                            {modelos.map((vehiculo)=>{
                            return (
                                <Link key={'itemVehiculo'+vehiculo.id}  to={`/modelo/${vehiculo.id}/${vehiculo.name.replace(/ /g, "-")}`} className='estilos-link-Modelos'>
                                    <ItemVehiculo 
                                        id={vehiculo.id}
                                        name={vehiculo.name } 
                                        year={vehiculo.year} 
                                        price={vehiculo.price} 
                                        photo={vehiculo.photo} 
                                    />                              
                                </Link>
                            )
                            })}
                        </section>
            }
            
            <hr className='linea-inferior-Modelos'/>
        </div>
    )
}