import React from 'react'
import CarruselHome from '../../Componentes/CarruselHome/CarruselHome'
import ComparacionVehiculo from '../../Componentes/ComparacionVehiculo/ComparacionVehiculo'
import ItemsServiciosHome from '../../Componentes/ItemsServiciosHome/ItemsServiciosHome'
import { useSimuladorAPI } from '../../Hooks/useSimuladorAPI'
import './Home.css'

export default function Home(){

    const {IMAGENES_CARRUSEL} = useSimuladorAPI()
    return (
        <>
            <CarruselHome imagenes={IMAGENES_CARRUSEL} autoPlay="true" />
            <h1 className='titulo-Home'>¡Bienvenido a Agencia EGO!</h1>
            <section className='seccion-Home'>
                <ItemsServiciosHome />
            </section>
            <section className='seccion-Home'>
                <ComparacionVehiculo />
            </section>
        </>
    )
}

