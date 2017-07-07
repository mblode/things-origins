import React from 'react';
import Todo from '../Todo';

const Logbook = (props) => {
  return (
    <div>
      <h3>Logbook</h3>
      <ul>
        {
          Object.keys(props.todos)
          .filter(key => props.todos[key].completed === true)
          .filter(key => props.todos[key].archived === false)
          .map(key => <Todo key={key} index={key} details={props.todos[key]} completeTodo={props.completeTodo} archiveTodo={props.archiveTodo} />)
        }
      </ul>
    </div>
  );
};

export default Logbook;
