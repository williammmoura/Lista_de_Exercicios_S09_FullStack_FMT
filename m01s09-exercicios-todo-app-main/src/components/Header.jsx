import { Link } from 'react-router-dom';
import { useToDos } from '../context/useToDos';

export const Header = () => {
  return (
    <header className="header bg-body-secondary">
      <nav className="navbar navbar-expand-lg  container d-flex ">
        <span className="flex-grow-1">Tarefas.dev</span>
        <ul className="navbar-nav ">
          <li className="nav-item me-auto">
            <Link className="nav-link active" aria-current="page" to="/home">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="quem-sou">
              Quem Sou
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
