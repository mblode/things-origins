import React from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Logbook from './components/Logbook';
import Trash from './components/Trash';

import base from './base';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.archiveTodo = this.archiveTodo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.emptyTrash = this.emptyTrash.bind(this);

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

  addTodo(todo){
    // Assemble data
    const todos = { ...this.state.todos }
    const timestamp = Date.now();
    // Update data
    todos[`todo-${timestamp}`] = todo;
    // Update state
    this.setState({ todos });
  }

  completeTodo(key) {
    const todos = { ...this.state.todos }

    todos[key].completed = !todos[key].completed;
    // Update state with filter
    this.setState({ todos });
  }

  archiveTodo(key) {
    const todos = { ...this.state.todos };

    todos[key].archived = !todos[key].archived;
    // Update state with filter
    this.setState({ todos });
  }

  changeStatus(key, value) {
    const todos = { ...this.state.todos };

    todos[key].status = value;
    // Update state with filter
    this.setState({ todos });
  }

  emptyTrash() {
    const todos = {...this.state.todos};
    const notArchived = Object.keys(todos)
      .filter(key => todos[key].archived !== true)
      .map(key => todos[key]);

    this.setState({ todos: notArchived });
  }

  render() {
    return (
      <div className="App">
        <TodoForm addTodo={this.addTodo} />

        <Header title="Inbox" />
        <TodoList completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} changeStatus={this.changeStatus} todos={this.state.todos} statusVal="inbox"/>

        <Header title="Today" />
        <TodoList completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} changeStatus={this.changeStatus} todos={this.state.todos} statusVal="today"/>

        <Header title="Next" />
        <TodoList completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} changeStatus={this.changeStatus} todos={this.state.todos} statusVal="next"/>

        <Header title="Someday" />
        <TodoList completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} changeStatus={this.changeStatus} todos={this.state.todos} statusVal="someday"/>

        <Header title="Logbook" />
        <Logbook completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} todos={this.state.todos} />

        <Header title="Trash" />
        <Trash completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} emptyTrash={this.emptyTrash} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
