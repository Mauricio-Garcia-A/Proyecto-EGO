import React from 'react'
import CarruselHome from '../../Componentes/CarruselHome/CarruselHome'
import ComparacionVehiculo from '../../Componentes/ComparacionVehiculo/ComparacionVehiculo'
import ItemsServiciosHome from '../../Componentes/ItemsServiciosHome/ItemsServiciosHome'
import { useModelos } from '../../Hooks/useModelos'
import './Home.css'

export default function Home(){
    const {IMAGENES_CARRUSEL} = useModelos()
    return (
        <>
            <CarruselHome imagenes={IMAGENES_CARRUSEL} autoPlay="true" />
            <ItemsServiciosHome />
            <br/>
            <ComparacionVehiculo />
            <img class="scale-with-grid" src="/wp-content/uploads/2021/09/Frame-851.svg" alt="Home" title=""></img>

        </>
        
    )
}

