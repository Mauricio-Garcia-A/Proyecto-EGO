import React, { useEffect, useRef, useState } from 'react';
import ItemParteVehiculo from './ItemParteVehiculo.js';
import "./CarruselPartesVehiculo.css";
import IconoFlecha from './IconoFlecha.js';

export default function CarruselPartesVehiculo({ItemsPartes}) {
    const [visibleBotonIzquierda, setVisibleBotonIzquierda]=useState(true)
    const [visibleBotonDerecha, setVisibleBotonDerecha]=useState(true)
    const [visibleSelector, setVisibleSelector]=useState(true)
    const [selectedIndex, setSelectedIndex]=useState(0)
    const contenedorScroll = useRef()

    /* 
    useEffect(()=>{
       // console.log(`WIDTH: ${contenedorScroll.current.offsetWidth  }`)
       // console.log(`Scroll WIDTH: ${contenedorScroll.current.scrollWidth }`)
       // console.log(`Scroll LEFT: ${contenedorScroll.current.scrollLeft }`)

        if (contenedorScroll.current.offsetWidth === contenedorScroll.current.scrollWidth){
           setVisibleBotonDerecha(false)
           setVisibleBotonIzquierda(false)
           setVisibleSelector(false)
        } else {
           setVisibleBotonDerecha(true)
           setVisibleBotonIzquierda(false)
           setVisibleSelector(true)            
        }
    },[])
    */

    const scroll = (scrollOffset) => {
        contenedorScroll.current.scrollLeft += scrollOffset

        for (let i = 0; i < numeroSelectores; i++) {
            if (contenedorScroll.current.scrollLeft >= (200*(i+1))) { setSelectedIndex(i)}
        }
    
        /*
        if ((contenedorScroll.current.scrollLeft) === 0) {
            setVisibleBotonIzquierda(false)
        } else {
            setVisibleBotonIzquierda(true)
        }

        if ((contenedorScroll.current.scrollWidth - (contenedorScroll.current.offsetWidth + contenedorScroll.current.scrollLeft)) === 0) {
            setVisibleBotonDerecha(false)
        } else {
            setVisibleBotonDerecha(true)    
        }
        */
    }

    let crearListaItems = ItemsPartes.map((data, i) => 
        <ItemParteVehiculo 
            key={'itemParteVehiculo'+i}
            titulo={data.name} 
            descripcion={data.description} 
            photo={data.image} 
        />
    );

    const numeroSelectores=Math.ceil((ItemsPartes.length)/3)
    let listaSelect=[]
    for (let i = 0; i < numeroSelectores; i++) {
        listaSelect.push(i)
    }
    let crearListaSelect =listaSelect.map((item,i) => {
       return( 
            <div key={'selectorCPV'+item}  className={(item===selectedIndex)?'selector-CarruselPartesVehiculo active-select-CarruselPartesVehiculo':'selector-CarruselPartesVehiculo'} />
       )}
    );

    return (
        <div className='contenedor-CarruselPartesVehiculo'> 
            
            <div className='contenedor-items-CarruselPartesVehiculo' ref={contenedorScroll}>            
                <div className='gradienteDerecho-CarruselPartesVehiculo'>
                   <button onClick={() => scroll(220)} className={visibleBotonDerecha ?'boton-control-CarruselPartesVehiculo':'boton-control-CarruselPartesVehiculo boton-control-no-visible'}> <IconoFlecha titulo='derecha' /> </button>  
                </div>
                <div className='gradienteIzquerdo-CarruselPartesVehiculo'>
                    <button onClick={() => scroll(-220)} className={visibleBotonIzquierda ?'boton-control-CarruselPartesVehiculo':'boton-control-CarruselPartesVehiculo boton-control-no-visible'}><IconoFlecha titulo='izquierda' /></button>
                </div>
                {crearListaItems}    
                          
            </div>
            <div className={visibleSelector?'contenedor-selectores-CarruselPartesVehiculo ':'contenedor-selectores-CarruselPartesVehiculo selector-control-no-visible'}>
                {crearListaSelect}    
            </div>
            
        </div>
    )
}