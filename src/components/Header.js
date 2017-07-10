import React from 'react';
import { NavLink } from 'react-router-dom';
import AddProject from './projects/AddProject';

class Header extends React.Component {
  render () {
    let logbook = null;
    const lengthLogbook = (
      Object.keys(this.props.todos)
      .filter(key => this.props.todos[key].completed === true)
      .filter(key => this.props.todos[key].archived === false)
      .map(key => this.props.todos[key])
      .length
    );
    if (lengthLogbook !== 0) {
      logbook = (
        <li className="nav-item">
          <NavLink to="/Logbook">
            <span className="nav-link">Logbook</span>
          </NavLink>
        </li>
      );
    }

    let trash = null;
    const lengthTrash = (
      Object.keys(this.props.todos)
      .filter(key => this.props.todos[key].archived === true)
      .map(key => this.props.todos[key])
      .length
    );
    if (lengthTrash !== 0) {
      trash = (
        <li className="nav-item mb-3">
          <NavLink to="/Trash">
            <span className="nav-link">Trash</span>
          </NavLink>
        </li>
      );
    }

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
                  <li className="nav-item">
                    <NavLink to="/Later">
                      <span className="nav-link">Later</span>
                      <ListLength todos={this.props.todos} status="Later" />
                    </NavLink>
                  </li>
                  <li className="nav-item mb-3">
                    <NavLink to="/Someday">
                      <span className="nav-link">Someday</span>
                    </NavLink>
                  </li>
                  {logbook}
                  {trash}

                  {
                    Object.keys(this.props.projects)
                    .map(key => (
                      <li className="nav-item" key={key}>
                        <NavLink to={'/projects/'+this.props.projects[key].timestamp }>
                          <span className="nav-link">{this.props.projects[key].title}</span>
                        </NavLink>
                      </li>
                    ))
                  }
                  <AddProject addProject={this.props.addProject}/>
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
        .filter(key => {
          if (props.status === 'Today') {
            return (
              props.todos[key].status === 'Today' ||
              props.todos[key].status === 'Evening'
            );
          }
          return props.todos[key].status === props.status
        })
        .map(key => props.todos[key])
        .length
      }
    </span>
  );
}

export default Header;