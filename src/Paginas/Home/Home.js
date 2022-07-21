import React from 'react'
import CarruselHome from '../../Componentes/CarruselHome/CarruselHome'
import ComparacionVehiculo from '../../Componentes/ComparacionVehiculo/ComparacionVehiculo'
import ItemsServiciosHome from '../../Componentes/ItemsServiciosHome/ItemsServiciosHome'
import ModeloEnStock from '../../Componentes/ModeloEnStock/ModeloEnStock'
import useSEO from '../../Hooks/useSEO'
import { useSimuladorAPI } from '../../Hooks/useSimuladorAPI'
import './Home.css'

export default function Home(){
    useSEO({title:'HOME', description:'Bienvenidos a EGO'})
    const {IMAGENES_CARRUSEL} = useSimuladorAPI()
    return (
        <>
            <CarruselHome imagenes={IMAGENES_CARRUSEL} autoPlay="true" />
            <h1 className='titulo-Home'>¡Bienvenido a Agencia EGO!</h1>
            <section className='seccion-Home'>
                <ItemsServiciosHome />
            </section>
            <section>
                <ModeloEnStock />
            </section>
            <section className='seccion-Home'>
                <ComparacionVehiculo />
            </section>
        </>
    )
}

