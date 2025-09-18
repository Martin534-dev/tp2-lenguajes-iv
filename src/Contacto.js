import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones simples
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setStatus("⚠️ Todos los campos son obligatorios");
      return;
    }

    emailjs
      .send(
        "service_mi1fayp",       // Service ID
        "template_06pv6tu",      // Template ID
        {
          nombre: formData.nombre,
          email: formData.email,
          mensaje: formData.mensaje,
        },
        "JKGCL9x6rrLCP4wir"      // Public Key
      )
      .then(
        () => {
          setStatus("✅ Correo enviado con éxito");
          setFormData({ nombre: "", email: "", mensaje: "" });
        },
        (error) => {
          setStatus("❌ Error al enviar: " + error.text);
        }
      );
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Correo electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Mensaje:</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}

export default Contacto;