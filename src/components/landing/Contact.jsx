"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    email: "",
    message: "",
  });
  const [submissionMessage, setSubmissionMessage] = useState(""); // State for custom submission message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend

    // Show submission message
    setSubmissionMessage("¡Mensaje enviado con éxito!");

    // Hide message after 3 seconds
    setTimeout(() => {
      setSubmissionMessage("");
    }, 3000); // Message visible for 3 seconds

    setFormData({
      name: "",
      service: "",
      email: "",
      message: "",
    });
  };

  const services = [
    "Consultoría",
    "Remodelación",
    "Diseño de Interiores",
    "Diseño Arquitectónico",
    "Otro",
  ];

  return (
    <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <h2
          className="text-4xl md:text-5xl mb-8 text-center"
          style={{ fontFamily: "'Italiana', serif" }}
        >
          Contacto
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block mb-2 text-sm font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Servicio
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <option value="" disabled>
                Selecciona un servicio
              </option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-black border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Enviar mensaje
          </button>

          {/* Custom submission message display */}
          {submissionMessage && (
            <div className="text-center text-green-500 mt-4">
              {submissionMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
