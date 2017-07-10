import React from 'react';

class More extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  render() {

    let select = null;
    const buttonText = this.props.details.archived ? `Put back in ${this.props.details.status}` : 'Delete';

    if (this.props.details.archived === false) {
      select = (<select
        onChange={(e) => {
          if (e.target.value === 'Evening') {
            this.props.handleChange(this.props.index, e.target.value, 'time');
          } else if (e.target.value === 'Today') {
            this.props.handleChange(this.props.index, e.target.value, 'time');
            this.props.handleChange(this.props.index, e.target.value, 'status');
          } else {
            this.props.handleChange(this.props.index, e.target.value, 'status');
          }
        } }
        value={this.props.details.status}
        className="custom-select mr-2"
      >
        <option value="Inbox">Inbox</option>
        <option value="Today">Today</option>
        <option value="Evening">Evening</option>
        <option value="Next">Next</option>
        <option value="Someday">Someday</option>
      </select>);
    }

    return (
      <div className="todo-more">
        <textarea
          placeholder="Notes"
          value={this.props.details.notes}
          className="todo-notes"
          ref={(input) => { this.notes = input; }}
          onChange={(e) => {this.props.handleChange(this.props.index, e.target.value, 'notes')} }
        />

        {select}

        <select
          onChange={(e) => {this.props.handleChange(this.props.index, e.target.value, 'project');} }
          value={this.props.details.project}
          className="custom-select mr-2"
        >
          <option value="">No Project</option>
          {
            Object.keys(this.props.projects)
            .map(key => (
              <option key={key} value={this.props.projects[key].timestamp}>
                {this.props.projects[key].title}
              </option>
            ))
          }
        </select>

        <button onClick={() => this.props.archiveTodo(this.props.index)} className="btn btn-secondary">{buttonText}</button>
      </div>
    );
  }
}

export default More;