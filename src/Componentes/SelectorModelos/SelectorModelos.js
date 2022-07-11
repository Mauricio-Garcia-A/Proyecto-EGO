import React from 'react'
import './SelectorModelos.css'

export default function SelectorModelos({titulo, handleChange, opcionPorDefectoTitulo, opcionPorDefectoValor, grupoDeOpciones}) {
    return (
        <>
            <select name={titulo} className='selector-SelectorModelos' onChange={handleChange}> 
                <option value={opcionPorDefectoValor}> {opcionPorDefectoTitulo} </option>
                {grupoDeOpciones.map((grupo,i)=>{
                    return(
                        <optgroup label={grupo.tipo} key={`select-${grupo.tipo}-${i}`}>
                            {grupo.opciones.map((opcion,e)=>{
                                return(
                                    <option value={opcion.valor} key={`option-${opcion.titulo}-${e}`} >{opcion.titulo}</option>
                                )
                            })}
                        </optgroup> 
                    )
                })}
                
            </select>

        </>
    )
}