import "./Navbar.css";
import logo from "../assets/logo1.png";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar ">
      <div className="container-fluid ">
        <a className="navbar-brand " href="#">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-4" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                RACING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                SPORT CARS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                COLLECTIONS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                EXPERIENCES
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
