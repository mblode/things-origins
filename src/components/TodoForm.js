import React from 'react';

class TodoForm extends React.Component  {
    createTodo(event) {
        event.preventDefault();

        const todo = {
            text: this.text.value,
            status: 'inbox',
            completed: false,
            archived: false,
        }

        this.props.addTodo(todo);
        this.todoForm.reset();
    }

    render () {
        return (
            <form ref={(input) => this.todoForm = input} onSubmit={(e) => this.createTodo(e)}>
                <input placeholder="New To-Do" ref={(input) => {this.text = input;}} />
            </form>
        )
    }
}

export default TodoForm;