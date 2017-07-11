import React from 'react';

class AddProject extends React.Component  {
  constructor(props) {
    super(props);
    this.createProject = this.createProject.bind(this);
  }

  createProject(event) {
    event.preventDefault();

    const project = {
      title: 'New Project',
      notes: '',
    }

    this.props.addProject(project);
  }

  render() {
    return (
      <button className="btn btn-sm add-project" onClick={(e) => this.createProject(e)}>+ New Project</button>
    );
  }
}

export default AddProject;
