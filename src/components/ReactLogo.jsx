import "../styles/reactLogo.css";

function ReactLogo({ number = "13" }) {
  return (
    <div className="circles">
      <div></div>
      <div></div>
      <div></div>
      <div className="center-circle"></div>
      <span className="center-number">13</span>
    </div>
  );
}

export default ReactLogo;
