import React from 'react';
import TodoList from '../todo/TodoList';
import TodoForm from '../todo/TodoForm';

const ProjectList = (props) => {
  const string = props.projects[`project-${props.id}`];
  let title = null;
  let notes = null;
  if (string === undefined) {
    title = '';
    notes = '';
  } else {
    title = string.title;
    notes = string.notes;
  }

  return (
    <div>
      <div className="page-header">
        <input
          type="text"
          placeholder="New Project"
          value={title}
          className="project-title"
          onChange={e => props.projectChange(props.id, e.target.value, 'title')}
        />
        <textarea
          placeholder="Notes"
          value={notes}
          className="project-notes"
          onChange={(e) => {props.projectChange(props.id, e.target.value, 'notes')} }
        />
        <TodoForm addTodo={props.addTodo} projectVal={props.id} />
      </div>
      <div className="page-content">
        <TodoList
          todos={props.todos}
          projects={props.projects}
          completeTodo={props.completeTodo}
          archiveTodo={props.archiveTodo}
          handleChange={props.handleChange}
          projectVal={props.id}
        />
      </div>
    </div>
  );
}

export default ProjectList;
