import { useState } from "react";

function ImageUploader() {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    // Validar que sea imagen
    if (!file.type.startsWith("image/")) {
      alert("Por favor selecciona un archivo de tipo imagen.");
      setPreview(null);
      return;
    }

    // Mostrar la imagen
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Subir imagen</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div style={{ marginTop: "20px" }}>
          <img src={preview} alt="Vista previa" style={{ maxWidth: "400px" }} />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;