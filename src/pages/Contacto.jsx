import React, { useState, useEffect } from "react";
import "../styles/contacto.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'sending', 'success'

  useEffect(() => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.email) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El formato del email no es válido.";
    }
    if (!formData.asunto) newErrors.asunto = "El asunto es obligatorio.";
    if (!formData.mensaje) newErrors.mensaje = "El mensaje es obligatorio.";
    
    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSubmissionStatus("sending");

    // Simulación de llamada a una API
    setTimeout(() => {
      setSubmissionStatus("success");
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
    setTouched({});
    setSubmissionStatus(null);
  };

  return (
    <section className="contact-section">
      <h2>Información de Contacto</h2>
      
      <div className="contact-layout-container">
        <div className="contact-card">
          {/* Email */}
          <div className="contact-item">
            <div className="icon-circle email">
              📧
            </div>
            <div className="contact-info">
              <h4>Email del Equipo</h4>
              <p>grupo13.dsw@ifts29.edu.ar</p>
            </div>
          </div>

          {/* Institución */}
          <div className="contact-item">
            <div className="icon-circle institucion">
              🏫
            </div>
            <div className="contact-info">
              <h4>Institución</h4>
              <p>IFTS N°29 - Tecnicatura en Desarrollo de Software</p>
            </div>
          </div>

          {/* Período */}
          <div className="contact-item">
            <div className="icon-circle calendario">
              📅
            </div>
            <div className="contact-info">
              <h4>Período Académico</h4>
              <p>2025 - Segundo Cuatrimestre</p>
            </div>
          </div>

          {/* GitHub */}
          <div className="contact-item">
            <div className="icon-circle github">
              💻
            </div>
            <div className="contact-info">
              <h4>Repositorio GitHub</h4>
              <a 
                href="https://github.com/MarcosMartinProgram/TP3-Frontend" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                MarcosMartinProgram/TP3-Frontend
              </a>
            </div>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="form-container">
          {submissionStatus === "success" ? (
            <div className="success-message">
              <h3>¡Mensaje enviado con éxito!</h3>
              <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
              <button onClick={resetForm} className="submit-button">
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <>
              <h3>Envíanos un mensaje</h3>
              <form noValidate onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={touched.nombre && errors.nombre ? "invalid" : ""}
                  />
                  {touched.nombre && errors.nombre && (
                    <span className="error-message">{errors.nombre}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={touched.email && errors.email ? "invalid" : ""}
                  />
                  {touched.email && errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="asunto">Asunto</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={touched.asunto && errors.asunto ? "invalid" : ""}
                  />
                  {touched.asunto && errors.asunto && (
                    <span className="error-message">{errors.asunto}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" rows="4" value={formData.mensaje} onChange={handleChange} onBlur={handleBlur} required className={touched.mensaje && errors.mensaje ? "invalid" : ""}></textarea>
                  {touched.mensaje && errors.mensaje && (
                    <span className="error-message">{errors.mensaje}</span>
                  )}
                </div>

                <button type="submit" className="submit-button" disabled={!isFormValid || submissionStatus === 'sending'}>
                  {submissionStatus === "sending" ? "Enviando..." : "Enviar"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
