import { useEffect, useState } from 'react'
import { getModelos } from '../ServiciosApi/getModelos'

export function useModelos({segment, ordering}) {
    const [modelos, setModelos]=useState([])
    const [loading, setLoadig]=useState(false)
    const [error, setError]=useState(false)

    useEffect(()=>{
        setLoadig(true)
        getModelos({segment, ordering}).then(items=> {    
            setModelos(items)
            if (items.length === 0) {
                setError(true)
            } else {
                setError(false)
            }
            setLoadig(false)
        })        
    },[segment, ordering])

    return {modelos, loading, error}
}