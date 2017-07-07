import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TodoForm from './components/TodoForm';
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
    this.changeStatus = this.changeStatus.bind(this);
    this.emptyTrash = this.emptyTrash.bind(this);
    this.dataChanged = this.dataChanged.bind(this);

    this.state = {
      todos: {},
    };
  }

  componentWillMount() {
    this.ref = base.syncState('/todos', {
      context: this,
      state: 'todos',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addTodo(todo) {
    const todos = { ...this.state.todos }
    const timestamp = Date.now();
    todos[`todo-${timestamp}`] = todo;
    this.setState({ todos });
  }

  completeTodo(key) {
    const todos = { ...this.state.todos }
    todos[key].completed = !todos[key].completed;
    this.setState({ todos });
  }

  archiveTodo(key) {
    const todos = { ...this.state.todos };
    todos[key].archived = !todos[key].archived;
    this.setState({ todos });
  }

  changeStatus(key, value) {
    const todos = { ...this.state.todos };
    todos[key].status = value;
    this.setState({ todos });
  }

  emptyTrash() {
    const todos = { ...this.state.todos };
    const notArchived = Object.keys(todos)
      .filter(key => todos[key].archived !== true)
      .map(key => todos[key]);

    this.setState({ todos: notArchived });
  }

  dataChanged(key, value) {
    const todos = { ...this.state.todos };
    todos[key] = value;
    this.setState({ todos });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TodoForm addTodo={this.addTodo} />

          <Header />

          <main className="cont">
            <div className="row page-main">
              <div className="col-xs-12">
                <div className="page-content">
                  <Route exact path="/" title="Repositories" render={()=><Inbox todos={this.state.todos} completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} dataChanged={this.dataChanged} changeStatus={this.changeStatus} />}/>

                  <Route path="/today" title="Repositories" render={()=><Today todos={this.state.todos} completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} dataChanged={this.dataChanged} changeStatus={this.changeStatus} />}/>
                  
                  <Route path="/next" title="Repositories" render={()=><Next todos={this.state.todos} completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} dataChanged={this.dataChanged} changeStatus={this.changeStatus} />}/>

                  <Route path="/someday" title="Repositories" render={()=><Someday todos={this.state.todos} completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} dataChanged={this.dataChanged} changeStatus={this.changeStatus} />}/>

                  <Route path="/logbook" title="Repositories" render={()=><Logbook todos={this.state.todos} completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} dataChanged={this.dataChanged} changeStatus={this.changeStatus} />}/>

                  <Route path="/trash" title="Repositories" render={()=><Trash todos={this.state.todos} completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} dataChanged={this.dataChanged} emptyTrash={this.emptyTrash} />}/>

                </div>
              </div>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
