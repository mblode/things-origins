import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';

import Inbox from './components/lists/Inbox';
import Today from './components/lists/Today';
import Next from './components/lists/Next';
import Someday from './components/lists/Someday';
import Logbook from './components/lists/Logbook';
import Trash from './components/lists/Trash';

import base from './base';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.archiveTodo = this.archiveTodo.bind(this);
    this.emptyTrash = this.emptyTrash.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      todos: {},
      projects: {},
    };
  }

  componentWillMount() {
    this.ref = base.syncState('/todos', {
      context: this,
      state: 'todos',
    });

    this.ref = base.syncState('/projects', {
      context: this,
      state: 'projects',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addTodo = (todo) => {
    const todos = { ...this.state.todos };
    const timestamp = Date.now();
    todos[`todo-${timestamp}`] = todo;
    todos[`todo-${timestamp}`].timestamp = timestamp;
    this.setState({ todos });
  }

  addTodo = (project) => {
    const projects = { ...this.state.todos };
    const timestamp = Date.now();
    projects[`project-${timestamp}`] = project;
    projects[`project-${timestamp}`].timestamp = timestamp;
    this.setState({ projects });
  }

  completeTodo = (key) => {
    setTimeout(() => {
    const todos = { ...this.state.todos };
    todos[key].completed = !todos[key].completed;
    this.setState({ todos });
    }, 1000);
  }

  archiveTodo = (key) => {
    const todos = { ...this.state.todos };
    todos[key].archived = !todos[key].archived;
    this.setState({ todos });
  }

  handleChange = (key, value, type) => {
    const todos = { ...this.state.todos };

    if (type === 'status') {
      todos[key].archived = false;
      todos[key].completed = false;
      todos[key].status = value;
    } else if (type === 'notes') {
      todos[key].notes = value;
    } else if (type === 'text') {
      todos[key].text = value;
    }

    this.setState({ todos });
  }

  emptyTrash = () => {
    const todos = { ...this.state.todos };
    const notArchived = Object.keys(todos)
      .filter(key => todos[key].archived !== true)
      .map(key => todos[key]);

    this.setState({ todos: notArchived });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header todos={this.state.todos} />

          <main className="cont">
            <div className="row page-main">
              <div className="col-12">
                <Route exact path="/" render={() => <Inbox todos={this.state.todos} completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} handleChange={this.handleChange} addTodo={this.addTodo} statusVal="Inbox" />} />

                <Route path="/Today" render={() => <Today todos={this.state.todos} completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} handleChange={this.handleChange} addTodo={this.addTodo} statusVal="Today" />} />

                <Route path="/Next" render={() => <Next todos={this.state.todos} completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} handleChange={this.handleChange} addTodo={this.addTodo} statusVal="Next" />} />

                <Route path="/Someday" render={() => <Someday todos={this.state.todos} completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} handleChange={this.handleChange} addTodo={this.addTodo} statusVal="Someday" />} />

                <Route path="/Logbook" render={() => <Logbook todos={this.state.todos} completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} handleChange={this.handleChange} statusVal="Logbook" />} />

                <Route path="/Trash" render={() => <Trash todos={this.state.todos} completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} handleChange={this.handleChange} emptyTrash={this.emptyTrash} statusVal="Trash" />} />
              </div>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
