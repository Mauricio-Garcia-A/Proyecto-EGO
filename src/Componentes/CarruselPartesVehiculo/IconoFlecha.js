import React from 'react';

export default function IconoFlecha(props) {

    function tipoIcono(titulo) {
        switch (titulo) {
            case 'izquierda':
                return <path d="M213.1 438.1c4.3-6.6 9.3-13 15.3-18.8.7-.7 1.7-.9 2.4-1.5L611 43.3c44.8-44.4 117.4-44.4 162.3 0 44.8 44.4 44.8 116.4 0 160.7L472.5 500.3l300.8 296.3c44.7 44.3 44.7 116.1 0 160.3-44.7 44.2-117.1 44.2-161.8 0L240.7 591.7c-4.6-3.3-9.8-5.1-14-9.2-39.7-39.3-44.1-100.1-13.6-144.4z" />

                ;
            case 'derecha':
                return <path d="M786.9 561.9c-4.3 6.6-9.3 13-15.3 18.8-.7.7-1.7.9-2.4 1.5L389 956.7c-44.8 44.4-117.4 44.4-162.3 0-44.8-44.4-44.8-116.4 0-160.7l300.8-296.2-300.8-296.3c-44.7-44.3-44.7-116.1 0-160.3 44.7-44.3 117.1-44.3 161.8 0l370.8 365.1c4.6 3.3 9.8 5.1 14 9.2 39.7 39.3 44.1 100.1 13.6 144.4z" />

                ;                
            default:
              return 'No icono';
          }
      }

    return (
        <svg {...props} x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
            {tipoIcono(props.titulo)}
        </svg>
    );
}