import { Routes, Route} from "react-router-dom";
import BarraDeNavegacion from './Componentes/BarraDeNavegacion/BarraDeNavegacion'
import PieDePagina from './Componentes/PieDePagina/PieDePagina'
import Home from './Paginas/Home/Home'
import Modelos from './Paginas/Modelos/Modelos'
import FichaTecnica from './Paginas/FichaTecnica/FichaTecnica'
import './App.css'
import FichaTecnicaHardcodeada from "./Paginas/FichaTecnicaHardcodeada/FichaTecnicaHardcodeada";


function App() {
  return (
    <div className="contenedor-App">
      <header>
        <BarraDeNavegacion />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Proyecto-EGO" element={<Home />} />
          <Route path="modelos" element={<Modelos />} />
          <Route path="/modelo/:id/:name" element={<FichaTecnica />} />
          <Route path="/modelo/0/Hilux-DXSR" element={<FichaTecnicaHardcodeada />} />
        </Routes> 
      </section>
      <footer className='pie-de-pagina-App '>
        <PieDePagina />
      </footer>
    </div>
  );
}

export default App;
