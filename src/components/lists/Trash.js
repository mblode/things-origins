import React from 'react';
import TodoList from '../todo/TodoList';

const Trash = (props) => {
  return (
    <div>
      <div className="page-header">
        <h3 className="list-title">Trash</h3>
        <button className="ml-3 mb-3 btn btn-primary btn-sm" onClick={() => props.emptyTrash()}>Empty Trash</button>
      </div>
      <div className="page-content">
        <TodoList
          todos={props.todos}
          projects={props.projects}
          completeTodo={props.completeTodo}
          archiveTodo={props.archiveTodo}
          handleChange={props.handleChange}
          archivedVal
          statusVal={props.statusVal}
        />
      </div>
    </div>
  );
};

export default Trash;
