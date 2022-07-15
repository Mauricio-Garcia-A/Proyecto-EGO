import Parte1 from '../Imagenes/Parte1.jpg'
import Parte2 from '../Imagenes/Parte2.jpg'
import Parte3 from '../Imagenes/Parte3.jpg'
import Parte4 from '../Imagenes/Parte4.jpg'
import Parte5 from '../Imagenes/Parte5.jpg'
import Parte6 from '../Imagenes/Parte6.jpg'
import Parte7 from '../Imagenes/Parte7.jpg'
import Parte8 from '../Imagenes/Parte8.jpg'

import Imagen1 from '../Imagenes/Imagen1.png'

import Imagen2 from '../Imagenes/Imagen2.jpg'
import Imagen3 from '../Imagenes/Imagen3.png'
import Imagen4 from '../Imagenes/Imagen4.jpg'
import Imagen5 from '../Imagenes/Imagen5.png'

import ImagenHome1 from '../Imagenes/Imagen1-HOME.webp'
import ImagenHome2 from '../Imagenes/Imagen2-HOME.webp'
import ImagenHome3 from '../Imagenes/Imagen3-HOME.webp'
import ImagenHome4 from '../Imagenes/Imagen4-HOME.webp'
import ImagenHome5 from '../Imagenes/Imagen5-HOME.webp'


export function useSimuladorAPI() {
    const IMAGENES_CARRUSEL = [ImagenHome1,ImagenHome2,ImagenHome3,ImagenHome4,ImagenHome5]

    const MODELOS = [
        {
            id: 1,
            name: "Corolla",
            segment: "Sedan",
            year: 2021,
            price: 3817000.0,
            thumbnail: "http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-300.png",
            photo: "http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-600.png",
        },
        {
            id: 2,
            name: "Camry",
            segment: "Sedan",
            year: 2021,
            price: 4250400.0,
            thumbnail: "http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-300.png",
            photo: "http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-600.png"
        },
        {
            id: 3,
            name: "Yaris Hatchback",
            segment: "Hatchback",
            year: 2021,
            price: 2585000.0,
            thumbnail: "http://challenge.agenciaego.tech/media/images/YarisHB_Rojo_res.width-300.png",
            photo: "http://challenge.agenciaego.tech/media/images/YarisHB_Rojo_res.width-600.png"
        },
        {
            id: 4,
            name: "Etios",
            segment: "Hatchback",
            year: 2021,
            price: 1731000.0,
            thumbnail: "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-300.png",
            photo: "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-600.png"
        },
        {
            id: 5,
            name: "Hilux",
            segment: "Pickups y Comerciales",
            year: 2021,
            price: 3410000.0,
            thumbnail: "http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-300.png",
            photo: "http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-600.png"
        },
        {
            id: 6,
            name: "Hiace Furgón",
            segment: "Pickups y Comerciales",
            year: 2021,
            price: 3645200.0,
            thumbnail: "http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-300.png",
            photo: "http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-600.png"
        },
        {
            id: 7,
            name: "Rav4",
            segment: "SUVs",
            year: 2021,
            price: 2960500.0,
            thumbnail: "http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-300.png",
            photo: "http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-600.png"
        },
        {
            id: 8,
            name: "SW4",
            segment: "SUVs",
            year: 2021,
            price: 6892000.0,
            thumbnail: "http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-300.png",
            photo: "http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-600.png"
        }
      ]
    
      const ITEM_PARTES = [
        {
            name: "Motores",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            image: Parte1,
        },
        {
            name: "Suspencion Mejorada",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            image: Parte2,
        }
      ]
    
      const SECCIONES=[
        {   titulo:'Titulo de 20px',
            descripcion:' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            imagen:Imagen2
        },
        {   titulo:'Titulo de 20px',
            descripcion:' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            imagen:Imagen3
        },
        {   titulo:'Titulo de 20px',
            descripcion:' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            imagen:Imagen4
        },
        {   titulo:'Titulo de 20px',
            descripcion:' Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            imagen:Imagen5
        },
    ]

    const MODELO_SELECCIONADO={ name:'Hilux DX/SR', 
                                title:'Preparada para cualquier desafío' , 
                                description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500', 
                                photo:Imagen1 
                            }

    return { MODELOS, ITEM_PARTES, SECCIONES, IMAGENES_CARRUSEL, MODELO_SELECCIONADO} 
}