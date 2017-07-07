import React from 'react';

import TodoList from './TodoList';

class Inbox extends React.Component {
  render() {
    return (
      <TodoList completeTodo={this.completeTodo} archiveTodo={this.archiveTodo} changeStatus={this.changeStatus} todos={this.state.todos} completeVal={false} archiveVal={true} statusVal="inbox"/>
    );
  }
}

export default Inbox;
