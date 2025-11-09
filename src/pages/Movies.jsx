import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moviesData from "../data/movies.json";

// Importa dinámicamente todas las imágenes de películas.
// Vite las procesará y nos dará las URLs finales para producción.
const movieImageModules = import.meta.glob('../assets/img/movie*.jpg', { eager: true, query: '?url', import: 'default' });
const movieImages = Object.fromEntries(Object.entries(movieImageModules).map(([path, url]) => [path.split('/').pop(), url]));

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('favorites') || '[]');
    } catch (e) {
      return [];
    }
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("Por Año");

  const navigate = useNavigate();

  useEffect(() => {
    setMovies(moviesData);
    setLoading(false);
  }, []);

  const uniqueYears = ["Por Año", ...new Set(moviesData.map((m) => m.year))].sort(
  (a, b) => b - a
);

const filteredMovies = movies
  .filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((m) =>
    selectedYear === "Por Año" ? true : m.year === Number(selectedYear)
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  if (loading) return <div style={{ padding: '2rem', color: 'white' }}>Cargando películas...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: 'white' }}>Películas</h2>
    

 <div
  style={{
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  }}
>
  <input
    type="text"
    placeholder="Buscar película..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{
      padding: '0.5rem 1rem',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-color)',
      width: '250px',
      fontSize: '1rem'
    }}
  />

  <select
    value={selectedYear}
    onChange={(e) => setSelectedYear(e.target.value)}
    style={{
      padding: '0.5rem 1rem',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-color)',
      background: 'var(--bg-secondary)',
      color: 'var(--text-primary)',
      fontSize: '1rem'
    }}
  >
    {uniqueYears.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ))}
  </select>

</div>


      <div className="team-grid">
        {filteredMovies.map((m) => (
          <div key={m.id} className="member-card">
            <div className="card-image">
              <img src={movieImages[m.image]} alt={m.title} loading="lazy" />
            </div>
            <div className="card-content">
              <h4 className="member-name">{m.title}</h4>
              <p className="member-theme">{m.year} • ⭐ {m.rating}</p>
              <p className="member-description">{m.synopsis}</p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button className={`btn ${favorites.includes(m.id) ? 'btn-primary' : ''}`} onClick={() => toggleFavorite(m.id)} style={{ minWidth: '100px' }}>
                  {favorites.includes(m.id) ? '💖 Favorito' : '🤍 Favorito'}  
                </button>
                <button className="btn btn-primary" onClick={() => navigate(`/movies/${m.id}`)}>Ver detalles</button>
              </div>
            </div>
          </div>
        ))}
      </div>
{filteredMovies.length === 0 && (
        <p style={{ color: 'white', textAlign: 'center' }}>
          No se encontraron películas que coincidan con “{searchTerm}”.
        </p>
      )}
    </div>
  );
}
