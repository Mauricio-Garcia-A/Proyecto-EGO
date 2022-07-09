import React from 'react'
import CarruselHome from '../../Componentes/CarruselHome/CarruselHome'
import ComparacionVehiculo from '../../Componentes/ComparacionVehiculo/ComparacionVehiculo'
import { useModelos } from '../../Hooks/useModelos'
import './Home.css'

export default function Home(){
    const {IMAGENES_CARRUSEL} = useModelos()
    return (
        <>
            <CarruselHome imagenes={IMAGENES_CARRUSEL} autoPlay="true" />
            <br/>
            <ComparacionVehiculo />
            
        </>
        
    )
}

