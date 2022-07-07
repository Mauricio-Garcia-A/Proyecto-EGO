import './App.css'
import { Routes, Route} from "react-router-dom";

import BarraDeNavegacion from './Componentes/BarraDeNavegacion/BarraDeNavegacion'
import PieDePagina from './Componentes/PieDePagina/PieDePagina'
import Home from './Paginas/Home/Home'
import Modelos from './Paginas/Modelos/Modelos'
import FichaTecnica from './Paginas/FichaTecnica/FichaTecnica'

function App() {
  return (
    <div className="contenedor-App">
      <header>
        <BarraDeNavegacion />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="modelos" element={<Modelos />} />
          <Route path="fichatecnica" element={<FichaTecnica />} />
        </Routes> 
      </section>
      <footer className='pie-de-pagina-App '>
        <PieDePagina />
      </footer>
    </div>
  );
}

export default App;
