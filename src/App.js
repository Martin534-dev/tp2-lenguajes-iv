import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ImageUploader from "./ImageUploader";
import Contacto from "./Contacto";
import Servicios from "./Servicios";
import Home from "./Home"; 
import API from "./API";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/imagenes">Subida de Imágenes</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/api">API</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imagenes" element={<ImageUploader />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/api" element={<API />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
