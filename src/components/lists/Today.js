import React from 'react';
import Todo from '../Todo';

const Today = (props) => {
  return (
    <div>
      <h3>Today</h3>
      <ul>
        {
          Object.keys(props.todos)
          .filter(key => props.todos[key].completed === false)
          .filter(key => props.todos[key].archived === false)
          .filter(key => props.todos[key].status === 'today')
          .map(key => <Todo key={key} index={key} details={props.todos[key]} completeTodo={props.completeTodo} archiveTodo={props.archiveTodo} dataChanged={props.dataChanged} changeStatus={props.changeStatus} />)
        }
      </ul>
    </div>
  );
};

export default Today;
