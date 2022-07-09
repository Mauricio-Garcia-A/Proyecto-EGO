import React from 'react'
import CarruselHome from '../../Componentes/CarruselHome/CarruselHome'
import { useModelos } from '../../Hooks/useModelos'
import './Home.css'

export default function Home(){
    const {IMAGENES_CARRUSEL} = useModelos()
    return (
        <>
            <div>
                <CarruselHome imagenes={IMAGENES_CARRUSEL} autoPlay="true" />
            </div>
        </>
        
    )
}

