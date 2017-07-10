import React from 'react';
import TodoForm from '../todo/TodoForm';
import TodoList from '../todo/TodoList';

const Today = (props) => {
  let evening = null
  const lengthEvening = (
      Object.keys(props.todos)
      .filter(key => props.todos[key].status === 'Evening')
      .map(key => props.todos[key])
      .length
    );
  if (lengthEvening !== 0) {
    evening = (
      <div>
        <h4 className="list-subtitle">This Evening</h4>
        <TodoList
          todos={props.todos}
          projects={props.projects}
          completeTodo={props.completeTodo}
          archiveTodo={props.archiveTodo}
          handleChange={props.handleChange}
          statusVal="Evening"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="page-header">
        <h3 className="list-title">{props.statusVal}</h3>
        <TodoForm addTodo={props.addTodo} statusVal={props.statusVal} />
      </div>
      <div className="page-content">
        <TodoList
          todos={props.todos}
          projects={props.projects}
          completeTodo={props.completeTodo}
          archiveTodo={props.archiveTodo}
          handleChange={props.handleChange}
          statusVal={props.statusVal}
        />

        {evening}
      </div>
    </div>
  );
};

export default Today;
