import React from 'react';

import Todo from './Todo';

class Logbook extends React.Component {
  render() {
    return (
      <ul>
        {
          Object.keys(this.props.todos)
          .filter(key => this.props.todos[key].completed === true)
          .filter(key => this.props.todos[key].archived === false)
          .map(key => <Todo key={key} index={key} details={this.props.todos[key]} completeTodo={this.props.completeTodo} archiveTodo={this.props.archiveTodo} />)
        }
      </ul>
    );
  }
}

export default Logbook;
