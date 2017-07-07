import React from 'react';
import Todo from '../Todo';

const Trash = (props) => {
  return (
    <div>
      <h3>Trash</h3>
      <button className="btn btn-primary" onClick={() => props.emptyTrash()}>Empty Trash</button>
      <ul>
        {
          Object.keys(props.todos)
          .filter(key => props.todos[key].archived === true)
          .map(key => <Todo key={key} index={key} details={props.todos[key]} completeTodo={props.completeTodo} archiveTodo={props.archiveTodo} dataChanged={props.dataChanged} changeStatus={props.changeStatus} />)
        }
      </ul>
    </div>
  );
};

export default Trash;
