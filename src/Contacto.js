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

    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus("⚠️ Todos los campos son obligatorios");
      return;
    }

    emailjs
      .send(
        "service_mi1fayp",       // Service ID
        "template_06pv6tu",      // Template ID
        formData,                // Datos con mismos nombres que la plantilla
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
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Formulario */}
        <form onSubmit={handleSubmit} style={{ flex: 1, minWidth: "300px" }}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Correo electrónico:</label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Mensaje:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>

        {/* Mapa con pin en dirección */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.854100452966!2d-65.40461342546325!3d-24.80044897796843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc37573be5db1%3A0x932230511febf86c!2sManuela%20Gonz%C3%A1lez%20de%20Todd%20779%2C%20A4400%20Salta!5e0!3m2!1ses-419!2sar!4v1759185065632!5m2!1ses-419!2sar"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {status && <p>{status}</p>}
    </div>
  );
}

export default Contacto;
