import React from 'react';
import { NavLink } from 'react-router-dom';

import AddProject from './projects/AddProject';
import inbox from '../svg/inbox.svg';
import today from '../svg/today.svg';
import later from '../svg/later.svg';
import logbook from '../svg/logbook.svg';
import trash from '../svg/trash.svg';

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
            <div className="nav-link">
              <img src={logbook} alt="logbook"/>
              <span>Logbook</span>
            </div>
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
        <li className="nav-item">
          <NavLink to="/Trash">
            <div className="nav-link">
              <img src={trash} alt="trash"/>
              <span>Trash</span>
            </div>
          </NavLink>
        </li>
      );
    }

    return (
      <header>
            <nav className="nav-sidebar">
                <ul className="nav flex-column sidebar-ul">
                  <li className="nav-item mb-3">
                    <NavLink exact to="/">
                      <div className="nav-link">
                        <img src={inbox} alt="inbox"/>
                        <span>Inbox</span>
                      </div>
                      <ListLength todos={this.props.todos} status="Inbox" />
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Today">
                      <div className="nav-link">
                        <img src={today} alt="today"/>
                        <span>Today</span>
                      </div>
                      <ListLength todos={this.props.todos} status="Today" />
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Next">
                      <div className="nav-link">
                        <img src={later} alt="next"/>
                        <span>Next</span>
                      </div>
                      <ListLength todos={this.props.todos} status="Next" />
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Later">
                      <div className="nav-link">
                        <img src={later} alt="later"/>
                        <span>Later</span>
                      </div>
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
                  <div className="mb-3"></div>

                  {
                    Object.keys(this.props.projects)
                    .map(key => (
                      <li className="nav-item" key={key}>
                        <NavLink to={'/projects/'+this.props.projects[key].timestamp }>
                          <span className="nav-link">{this.props.projects[key].title}</span>
                          <ListLength todos={this.props.todos} project={this.props.projects[key].timestamp} />
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
            </nav>
            <footer className="nav-sidebar-footer">
              <AddProject addProject={this.props.addProject}/>
            </footer>
      </header>
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
          } else if (props.status === undefined && props.project) {
            return props.todos[key]
          } 
          return props.todos[key].status === props.status
        }).filter((key) => {
          if (props.project === undefined && props.status) {
            return props.todos[key]
          }
          return props.todos[key].project == props.project
        })
        .map(key => props.todos[key])
        .length
      }
    </span>
  );
}

export default Header;