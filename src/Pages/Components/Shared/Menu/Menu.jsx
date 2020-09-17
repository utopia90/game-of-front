import React from 'react';
import './Menu.scss'
import { Link } from 'react-router-dom';

export default function Menu() {

    return (
      
      <nav className="c-menu">
              <div className="row">
                  <div className="c-menu-bottom">
                      <ul>
                              <Link className="c-menu-bottom__link" to="/characters">PERSONAJES</Link>
                              <Link className="c-menu-bottom__link" to="/houses">CASAS</Link>
                              <Link className="c-menu-bottom__link" to="/chronology">CRONOLOGÍA</Link>
                      </ul>
                  </div>
              </div>
          </nav>
      

    )


}