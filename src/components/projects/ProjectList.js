import React from 'react';
import TodoList from '../todo/TodoList';
import TodoForm from '../todo/TodoForm';

const ProjectList = (props) => {
  return (
    <div>
      <div className="page-header">
        <h3 className="list-title">Project</h3>
        <TodoForm addTodo={props.addTodo} projectVal={props.index} />
      </div>
      <div className="page-content">
        <TodoList
          todos={props.todos}
          projects={props.projects}
          completeTodo={props.completeTodo}
          archiveTodo={props.archiveTodo}
          handleChange={props.handleChange}
          projectVal={props.index}
        />
      </div>
    </div>
  );
}

export default ProjectList;
