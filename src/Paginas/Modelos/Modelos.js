import React from 'react';
import ItemVehiculo from '../../Componentes/ItemVehiculo/ItemVehiculo';
import { useModelos } from '../../Hooks/useModelos';
import './Modelos.css'

export default function Modelos() {
    const {MODELOS}=useModelos()
    return (
        <div>
            <div className='encabezado-Modelos'>
                <h1>Descubrí todos los modelos </h1>
                <div className='contenedor-selectores-Modelos'>
                    <select name="Filtrar" className='selector-Modelos'> 
                        <option selected value="0"> Filtar por </option>
                        <optgroup label="Marca">
                            <option value="1">Sedan</option>
                            <option value="2">Hatchback</option>
                            <option value="3">Pickups y Comerciales</option>
                            <option value="4">SUVs</option>
                        </optgroup> 
                    </select>
                    <select name="Ordenar" className='selector-Modelos'>
                        <option selected value="0">Ordenar por </option> 
                        <optgroup label="Año"> 
                            <option value="1">Acendente</option> 
                            <option value="2">Desendente</option> 
                        </optgroup> 
                        <optgroup label="Precio"> 
                            <option value="1">Mas Bajo</option> 
                            <option value="2">Mas Alto</option> 
                        </optgroup> 
                    </select>                  
                </div>    
            </div>

            <section className='contenedor-items-vehiculos-Modelos'>
                {MODELOS.map((vehiculo)=>{
                   return (
                        <ItemVehiculo 

                            id={vehiculo.id}
                            name={vehiculo.name } 
                            year={vehiculo.year} 
                            price={vehiculo.price} 
                            photo={vehiculo.photo} 
                        />                    
                   )
                })}
            </section>
            <hr className='linea-inferior-Modelos'/>
        </div>
    )
}