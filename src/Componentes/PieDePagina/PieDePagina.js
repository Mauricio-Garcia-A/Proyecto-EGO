import React from 'react'
import './PieDePagina.css'
import LogoEGO from '../Logo/LogoEGO'
import IconoPieDePagina from './IconoPieDePagina'
import ImagenUbicacion from '../../Imagenes/imagen-ubicacion.png'

/* -----------------------------------   Componente PIEDEPAGINA  ---------------------------------------------
    Este componente solo muestra informacion de interes que suele estar en los footers. (No fue solicitado en el CHALLENGE de EGO - Tarea PROACTIVA)
*/
export default function PieDePagina() {

    function ItemDeInformacion(props){
        return(
            <div className='contenedor-item-informacion-PieDePagina'>
                <div>
                    <IconoPieDePagina titulo={props.icono}  width='17px' height='17px'  fill="while"/>
                    <b className='item-titulo-informacion-PieDePagina'>{props.title}</b><br/>
                </div>  
                <div className='item-informacion-PieDePagina'>
                    {props.links.map((lk, e)=>{
                        return(<a  key={"lk"+e} className="textLinks-PieDePagina" href="/#">● {lk.dato}</a>)})                
                    }
                </div>    
            </div>  
        )
    }

    return (
        <div className='contenedor-PieDePagina '>
            <div className="contenedor-secciones-PieDePagina">
                <div className='seccion1-PieDePagina'>
                    <div className='iconoLogo-PieDePagina'>
                        <LogoEGO width='70px' height='70px' />
                    </div>
                    <b className='titulo-redes-sociales-PieDePagina'>Siguenos en nuestras Redes Sociales</b>
                    <div className='redes-sociales-PieDePagina'>
                        <IconoPieDePagina titulo='instagram' width='25px' height='25px' className='icono-red-social icono-instagram'/>
                        <IconoPieDePagina titulo='facebook'  width='25px' height='25px'  className='icono-facebook icono-red-social '/> 
                        <IconoPieDePagina titulo='youtube'  width='25px' height='25px'  className='icono-youtube icono-red-social '/>
                    </div>
                </div>
                <div className='seccion2-PieDePagina'>
                    {INFORMACION_OPCIONES.map((opcion,i)=>{ 
                        return(
                            <ItemDeInformacion title={opcion.titulo} icono={opcion.icono} links={opcion.opciones} key={"ItemInfo"+i}/>
                        )
                    })}   
                </div>
                  
                <div className='seccion3-PieDePagina'>
                    <IconoPieDePagina titulo='ubicacion'  width='15px' height='15px'  fill="while"/><b> Sucursales</b><br/>
                    <div className='contenedor-sucursales-PieDePagina'>
                        <div className='mapa-PieDePagina'>
                            <img className='imagen-PieDePagina'src={ImagenUbicacion} alt='img' ></img>
                        </div>
                        <div className='sucursales-PieDePagina'> 
                            {INFORMACION_SUCURSALES.map((opcion,i)=>{ 
                                return(
                                    <div className='item-sucursal-PieDePagina' key={'ubicacion'+i}>
                                       <span key={"ItemInfo"+i} className="textLinks-PieDePagina"><IconoPieDePagina titulo='ubicacion'  width='10px' height='10px'  fill="while"/> {opcion.titulo}</span> 
                                    </div>
                                    
                                )
                            })}
                        </div>
                    </div>
                   
                    <IconoPieDePagina titulo='telefono'  width='15px' height='15px'  /><b> 0800 888 4555</b>
                    <span className="textLinks-PieDePagina texto-seccion3-PieDePagina">Salón comercial: Lunes a Sábado de 8.30 a 19.30hs.</span>
                    <span className="textLinks-PieDePagina  texto-seccion3-PieDePagina">Posventa: Lunes a Viernes de 8:30 a 17:30hs.</span>
                </div>         
            </div>
            <div className="contenedor-informacion-general-PieDePagina">
                <span>Copyright © 1989-2022 EGO M.A.G</span><br/>
                <span>Diagonal 113, N476, CP1900, LA PLATA - BUENOS AIRES - ARGENTINA</span>
            </div>
        </div>
    )
}

const INFORMACION_SUCURSALES = [{titulo:"CABA"},{titulo:"La Plata"}]
const INFORMACION_OPCIONES = [
    { titulo:"Acerca de Nosotros", 
      icono:'informacion',
      opciones: [ {titulo:'informacion', dato:"Informacion"},
                                              {titulo:'novedades', dato:"Novedades"}
                ]},
    { titulo:"Autos",
      icono:'autos',
      opciones: [ {titulo:'ceroKm',dato:"Autos 0km"},
                                  {titulo:'usados',dato:"Autos Usados"}
                ]},
    { titulo:"Servicios", 
      icono:'sevicios',
      opciones: [ {titulo:'planaAhorra',dato:"Plan de ahorra"}, 
                                      {titulo:'posventa',dato:"Posventa"},
                ]}
]