import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <section className="nav-cont">
        <div className="row">
          <div className="col-12">
            <header className="nav-sidebar">
              <nav className="nav">
                <ul>
                  <li><Link to="/">Inbox</Link></li>
                  <li><Link to="/today">Today</Link></li>
                  <li><Link to="/next">Next</Link></li>
                  <li><Link to="/someday">Someday</Link></li>
                  <li><Link to="/logbook">Logbook</Link></li>
                  <li><Link to="/trash">Trash</Link></li>
                </ul>
              </nav>
            </header>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;