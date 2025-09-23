import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones simples
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus("⚠️ Todos los campos son obligatorios");
      return;
    }

    emailjs
      .send(
        "service_mi1fayp",       // Service ID
        "template_06pv6tu",      // Template ID
        formData,                // Ahora usa los mismos nombres que la plantilla
        "JKGCL9x6rrLCP4wir"      // Public Key
      )
      .then(
        () => {
          setStatus("✅ Correo enviado con éxito");
          setFormData({ from_name: "", from_email: "", message: "" });
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
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Correo electrónico:</label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Mensaje:</label>
          <textarea
            name="message"
            value={formData.message}
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
