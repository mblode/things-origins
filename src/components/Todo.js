import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'select' };
  }

  render() {
    const { details, index } = this.props;

    const buttonText = details.archived ? 'Unarchive' : 'Archive';
    
    return (
      <div>
        <input name="status" type="checkbox" checked={details.completed} onChange={() => this.props.completeTodo(index)} />
        <span>{details.text}</span>
        <select onChange={(e) => this.props.changeStatus(index, e.target.value)} value={details.status}>
          <option value="inbox">Inbox</option>
          <option value="today">Today</option>
          <option value="next">Next</option>
          <option value="someday">Someday</option>
        </select>
        <button onClick={() => this.props.archiveTodo(index)}>{buttonText}</button>
      </div>
    );
  }
}

export default Todo;
