import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ImageUploader from "./ImageUploader";
import Contacto from "./Contacto";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>Subida de Imágenes</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ImageUploader />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
