import React from 'react';

export default function IconoBarraDeNavegacion(props) {

    function tipoIcono(titulo) {
        switch (titulo) {
            case 'cerrarMenu':
                return 	<path d="m427.314 107.313-22.628-22.626L256 233.373 107.314 84.687l-22.628 22.626L233.373 256 84.686 404.687l22.628 22.626L256 278.627l148.686 148.686 22.628-22.626L278.627 256l148.687-148.687z" />
                ;
            case 'abrirMenu':
                return <path d="M0 382.5h459v-51H0v51zM0 255h459v-51H0v51zM0 76.5v51h459v-51H0z" />

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