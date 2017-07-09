import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <section className="nav-cont">
        <div className="row">
          <div className="col-12">
            <header className="nav-sidebar">
              <nav className="nav">
                <ul className="nav flex-column sidebar-ul">
                  <li className="nav-item mb-3">
                    <NavLink exact to="/">
                      <span className="nav-link">Inbox</span>
                      <ListLength todos={this.props.todos} status="Inbox" />
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Today">
                      <span className="nav-link">Today</span>
                      <ListLength todos={this.props.todos} status="Today" />
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Next">
                      <span className="nav-link">Next</span>
                      <ListLength todos={this.props.todos} status="Next" />
                    </NavLink>
                  </li>
                  <li className="nav-item mb-3">
                    <NavLink to="/Someday">
                      <span className="nav-link">Someday</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Logbook">
                      <span className="nav-link">Logbook</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Trash">
                      <span className="nav-link">Trash</span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </div>
      </section>
    );
  }
}

const ListLength = (props) => {
  return (
    <span className="list-length">
      {Object.keys(props.todos)
        .filter(key => props.todos[key].completed === false)
        .filter(key => props.todos[key].archived === false)
        .filter(key => props.todos[key].status === props.status)
        .map(key => props.todos[key])
        .length
      }
    </span>
  );
}

export default Header;