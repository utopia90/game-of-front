import React from 'react';
import './Menu.scss'
import { Link } from 'react-router-dom';

export default function Menu() {

    return (
      
      <nav className="c-menu">
              <div className="row">
                  <div className="c-menu-bottom">
                      <ul>
                              <Link className="c-menu-bottom__link" to="/personajes">personajes</Link>
                              <Link className="c-menu-bottom__link" to="/casas">casas</Link>
                              <Link className="c-menu-bottom__link" to="/cronologia">cronologia</Link>
                      </ul>
                  </div>
              </div>
          </nav>
      

    )


}