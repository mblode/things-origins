import React from 'react';
import Todo from './Todo';

class Trash extends React.Component {
    render() {
        return (
            <ul>
                <button onClick={() => this.props.emptyTrash()}>Empty Trash</button>
                {
                    Object.keys(this.props.todos)
                    .filter(key => this.props.todos[key].archived === true)
                    .map(key => <Todo key={key} index={key} details={this.props.todos[key]} completeTodo={this.props.completeTodo} archiveTodo={this.props.archiveTodo} />)
                }
            </ul>
        )
    }
}

export default Trash;
