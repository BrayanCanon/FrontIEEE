import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';


class NavBar extends Component
{
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }

  render()
  {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#0A1B2A"}}>
      <a className="navbar-brand" href="#">
      <img src="/images/Logos/LOGOS_OFICIALES/Rama_IEEE.png" width="130" height="60" class="d-inline-block align-top" alt="" loading="lazy"></img>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className={this.getNavLinkClass("/")}>
            <NavLink to="/">
              <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Capítulos
        </a>
        <div className="dropdown-menu "aria-labelledby="navbarDropdown">
          <NavLink to="/Capitulos/ComputerSociety">
            <a className="dropdown-item" href="#">Computer Society</a>
          </NavLink>
          <div className="dropdown-divider"></div>
          <NavLink to="/Capitulos/RAS">
            <a className="dropdown-item" href="#">RAS</a>
          </NavLink>
        </div>
      </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contactanos</a>
          </li> 
        </ul>
            <span className={this.getNavLinkClass("/Login")}>
            <NavLink to="/Login">
              <a class="nav-link" href="#" style={{color: 'white'}}>Login</a>
            </NavLink>
            </span>
      </div>
    </nav>
    );
  }
}
NavBar = withRouter(NavBar);
export default NavBar;