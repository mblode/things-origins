import React from 'react';
import InlineEdit from 'react-edit-inline';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.changed = this.changed.bind(this);
    this.state = {
      value: 'select',
    };
  }

  changed(data) {
    this.props.dataChanged(this.props.index, data);
  }

  render() {
    const { details, index } = this.props;
    const buttonText = details.archived ? `Put back in ${details.status}` : 'Archive';

    let select = null;
    if (details.archived === false) {
      select = <select onChange={(e) => this.props.changeStatus(index, e.target.value)} value={details.status}>
        <option value="inbox">Inbox</option>
        <option value="today">Today</option>
        <option value="next">Next</option>
        <option value="someday">Someday</option>
      </select>;
    }

    return (
      <div>
        <input name="status" type="checkbox" checked={details.completed} onChange={() => this.props.completeTodo(index)} />
        <InlineEdit
          text={details.text}
          paramName="text"
          change={this.changed}
        />
        
        {select}
        <button onClick={() => this.props.archiveTodo(index)}>{buttonText}</button>
      </div>
    );
  }
}

export default Todo;
