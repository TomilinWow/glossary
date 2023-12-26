import { Link, useLocation } from 'react-router-dom';
import "./Header.css"
export const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="header-buttons">
        <Link to="/glossary">
          <button className={`button ${location.pathname === '/glossary' ? 'active' : ''}`}>
            Глоссарий
          </button>
        </Link>
        <Link to="/semantic">
          <button className={`button ${location.pathname === '/semantic' ? 'active' : ''}`}>
            Семантический граф
          </button>
        </Link>
      </div>
      <div className="header-info">
        Томилин Егор P4209
      </div>
    </div>
  );
}