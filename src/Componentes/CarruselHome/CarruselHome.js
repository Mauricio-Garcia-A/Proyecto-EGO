import React, {useState, useEffect} from 'react'
import './CarruselHome.css'

/* ---------------------------   Componente CARRUSELIMAGENESPRODUCTO -----------------------------------------
Este muesta las imagenes de los productos de forma dinamica (CARRUSEL)
    - recibe por props un array con las URL de las IMAGENES 
    - opcional recibe props la funcionalidad mostrar las imagenes automaticamente cada sierto tiempo, mediate las props AUTOPLAY y TEMPORIZADOR  
*/
export default function CarruselHome({imagenes, autoPlay=false, temporizador='5000'}) {  
    const [selectedIndex, setSelectedIndex]= useState(0)
    const [selectedImagen, setSelectedImagen]=useState(imagenes[0])
    const [loaded, setLoaded]=useState(false)
        
    const seleccionarSiguienteImagen = (index, images, siguiente) =>{                        // ---- LOGICA PRICIPAL DEL CARRUSEL ----
        setLoaded(false)
         setTimeout(()=>{
            const condition = siguiente     ? (index < images.length -1)                         // Verifica siguiente imagen existe (si me encuentro en limite superior de array)
                                            : (index > 0)                                        // Verifica anterior imagen existe (si me encuentro en limite inferior de array)
            const nextIndex = siguiente     ? condition ? index + 1                              // Si SIGIENTE=true y CONDICION=true entonces avanso una posicion
                                                        : 0                                      // Si SIGIENTE=true y CONDICION=false (el indice esta en el limite superio del array) entonces se posiciona el indice en el principio
                                            : condition ? index - 1                              // Si SIGIENTE=false y CONDICION=true entonces retrocedo una posicion
                                                        : images.length - 1                      // Si SIGIENTE=false y CONDICION=false (el indice esta en el limite inferior del array) entonces se posiciona el indice en el final
            selectPosition(nextIndex, images)            
        }, 500)
    }

    const previous=()=> {
        seleccionarSiguienteImagen(selectedIndex, imagenes, false)
    }
    const next=()=> {
        seleccionarSiguienteImagen(selectedIndex, imagenes, true)
    }
       
    const selectPosition=(index, images)=>{
        setSelectedIndex(index)
        setSelectedImagen(images[index])
    }        
        
    useEffect(()=>{
        if (autoPlay){
            const intervalo = setInterval(()=>{
                seleccionarSiguienteImagen(selectedIndex, imagenes, true)
            }, temporizador)
            return ()=> clearInterval(intervalo)
        }
    })
    
    return (
        <div className='contenedor-CarruselHome'>
            <div className='contenedor-botones-CarruselHome'>
                <div className='contenedor-botones-control-CarruselHome'>
                    <button onClick={previous} className='boton-flecha-CarruselHome '>{'<'}</button>
                    <button onClick={next} className='boton-flecha-CarruselHome ' >{'>'}</button>
                </div>
                <div className='contenedor-botones-selector-CarruselHome'>
                    {imagenes.map((imagen, i)=>{
                        return(<button key={"bsh"+i} onClick={()=>selectPosition(i,imagenes)} className={(i===selectedIndex)?'boton-selector-CarruselHome active-select-CarruselHome ':'boton-selector-CarruselHome'} />)
                    })}
                </div>
            </div>
            <div className='slider-imagen-CarruselHome'>
                <img className={loaded?'imagen-CarruselHome loaded': 'imagen-CarruselHome'} src={selectedImagen} alt="img" onLoad={()=> setLoaded(true) }/>
            </div>
        </div>
    )
}