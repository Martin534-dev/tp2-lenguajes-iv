import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ImageUploader from "./ImageUploader";
import Contacto from "./Contacto";
import Servicios from "./Servicios";
import Home from "./Home"; 
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Menu */}
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/imagenes">Subida de Imágenes</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Pagina de inicio */}
          <Route path="/imagenes" element={<ImageUploader />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
