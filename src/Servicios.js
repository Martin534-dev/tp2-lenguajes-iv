import React from "react";
import "./Servicios.css";

function Servicios() {
  const habitaciones = [
    {
      id: 1,
      nombre: "Suite Deluxe",
      descripcion: "Amplia habitación con vista al mar y jacuzzi privado.",
      precio: "$150 USD / noche",
      imagen: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 2,
      nombre: "Habitación Doble",
      descripcion: "Confortable habitación con dos camas y balcón.",
      precio: "$90 USD / noche",
      imagen: "https://picsum.photos/300/200?random=2"
    },
    {
      id: 3,
      nombre: "Habitación Simple",
      descripcion: "Ideal para viajeros individuales, equipada con escritorio.",
      precio: "$60 USD / noche",
      imagen: "https://picsum.photos/300/200?random=3"
    }
  ];

  return (
    <div className="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="grid">
        {habitaciones.map((hab) => (
          <div key={hab.id} className="card">
            <img src={hab.imagen} alt={hab.nombre} />
            <h3>{hab.nombre}</h3>
            <p>{hab.descripcion}</p>
            <p><strong>{hab.precio}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
