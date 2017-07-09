import React from 'react';
import TodoList from '../todo/TodoList';

const Trash = (props) => {
  return (
    <div>
      <h3 className="list-title">Trash</h3>
      <button className="ml-3 mb-3 btn btn-primary btn-sm" onClick={() => props.emptyTrash()}>Empty Trash</button>
      <TodoList
        todos={props.todos}
        completeTodo={props.completeTodo}
        archiveTodo={props.archiveTodo}
        handleChange={props.handleChange}
        archivedVal
        statusVal={props.statusVal}
      />
    </div>
  );
};

export default Trash;
