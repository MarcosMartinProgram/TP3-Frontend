import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Desarrollo de Sistemas Web (Front End) - TP3 - Grupo 13 - 2° A</p>

        {/* 🔗 Redes Sociales */}
        <div className="social-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn github"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn twitter"
            title="X (Twitter)"
          >
            <i className="fab fa-x-twitter"></i>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn facebook"
            title="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
