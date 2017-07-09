import React from 'react';
import onClickOutside from 'react-onclickoutside';

import More from './More';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMore = this.toggleMore.bind(this);

    this.state = {
      value: 'select',
      active: false,
    };
  }

  handleClickOutside = () => {
    this.setState({
      active: false
    });
  }

  toggleMore() {
    this.setState({
      active: true
    });
  }

  render() {
    const { details, index } = this.props;

    return (
      <div className={`todo ${ this.state.active ? 'todo-active' : '' }`} onDoubleClick={this.toggleMore}>
        <div className="todo-main">
          <input name="status" className="todo-check" type="checkbox" checked={details.completed} onChange={() => this.props.completeTodo(index)} />
          <input
            type="text"
            placeholder="New To-Do"
            value={details.text}
            className="todo-input"
            onChange={e => this.props.handleChange(this.props.index, e.target.value, 'text')}
          />

          { this.state.active ? <More details={details} index={index} archiveTodo={this.props.archiveTodo} active={this.state.active} handleChange={this.props.handleChange} /> : null }
        </div>
      </div>
    );
  }
}

export default onClickOutside(Todo);
