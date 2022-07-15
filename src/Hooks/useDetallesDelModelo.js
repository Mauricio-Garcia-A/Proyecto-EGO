import { useEffect, useState } from 'react'
import { getModeloSeleccionado } from '../ServiciosApi/getModelos'

export function useDetallesDelModelo({id}) {
    const [modelo, setModelo]=useState([])
    const [loading, setLoadig]=useState(false)
    const [error, setError]=useState(false)
    const [model_features, setMF]=useState([])
    const [model_highlights, setMH]=useState([])

    useEffect(()=>{
        setLoadig(true)
        getModeloSeleccionado({id}).then(data=> {    
            setModelo(data.model)
            setMF(data.features)
            setMH(data.highlights)
            if (data.length === 0) {
                setError(true)
            } else {
                setError(false)
            }
            setLoadig(false)
        })        
    },[id])

    return {modelo, loading, error, model_features, model_highlights}
}