import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import {
  faUserCircle,
  faSignOut,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Navbar(props,setSigninUser) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
      <div className="dropdown mb-3">
                            <Link to="/ok" className="d-flex align-items-center justify-content-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon
                                        icon={faUserCircle}
                                        style={{ fontSize: 40, color: 'orange' }}
                                    />                            </Link>
                            <ul className="dropdown-menu text-small shadow mx-3" aria-labelledby="dropdownUser2">

                                <li> <Link to="/userprofile" onClick={() => setSigninUser({})} className="nav_link active">
                                    <FontAwesomeIcon
                                        icon={faUserCircle}
                                        style={{ fontSize: 30, color: 'orange' }}
                                    />
                                </Link></li>
                                <hr />
                                <NavLink to="/" onClick={() => setSigninUser({})} className="nav_link">
                                    <FontAwesomeIcon
                                        icon={faSignOut}
                                        style={{ fontSize: 30, color: 'orange' }}
                                    />
                                    <span className="nav_name">SignOut</span>
                                </NavLink>
                            </ul>
                        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/products" className="nav_link">
                <FontAwesomeIcon
                  icon={faHome}
                  style={{ fontSize: 30, color: 'orange' }}
                />
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/product" className="nav_link">
                <FontAwesomeIcon
                  icon={faCartArrowDown}
                  style={{ fontSize: 30, color: 'orange' }}
                />
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/order" className="nav_link">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ fontSize: 30, color: 'orange' }}
                />
              </Link>         
            </li> */}
           
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'Dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}
Navbar.defaultProps = {
  title: 'set Title here',
  about: 'About here'
}



