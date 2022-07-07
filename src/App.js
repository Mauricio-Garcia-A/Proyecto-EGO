import './App.css'
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
        <Home />
        <Modelos />
        <FichaTecnica />
      </section>
      <footer className='pie-de-pagina-App '>
        <PieDePagina />
      </footer>
    </div>
  );
}

export default App;
