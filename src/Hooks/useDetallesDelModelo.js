import { useEffect, useState, useContext } from 'react'
import ModeloContext from '../Contextos/ModeloContext'
import { getModeloSeleccionado } from '../ServiciosApi/getModelos'

export function useDetallesDelModelo({id}) {
    const [modelo, setModelo]=useState([])
    const [loading, setLoadig]=useState(false)
    const [error, setError]=useState(false)
    const [model_features, setMF]=useState([])
    const [model_highlights, setMH]=useState([])

    const {setIdContex, setNameContex} = useContext(ModeloContext) 

    useEffect(()=>{
        setLoadig(true)
        setIdContex(id)
        getModeloSeleccionado({id}).then(data=> {    
            setModelo(data.model)
            setMF(data.features)
            setMH(data.highlights)
            setNameContex(data.model.name.replace(/ /g, "-"))
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