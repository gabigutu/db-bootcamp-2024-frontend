import { Component } from "react";

class Todo extends Component {

    urlBase = 'https://jsonplaceholder.typicode.com/todos';

    constructor() {
        super();
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.fetchTodos();
    }

    fetchTodos = async () => {
        const response = await fetch(this.urlBase);
        const todos = await response.json();
        // console.log(todos);
        this.setState({
            todos: todos
        });
    }

    fetchUpdateTodo = async (index) => {
        const url = this.urlBase + "/" + index;
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(this.state.todos[index])
        });
        const todoResponse = await response.json();
        console.log(todoResponse)
    }

    sayHello() {
        console.log('hello');
    }

    bifeaza(index) {
        console.log('bifez indexul ' + index);
        // const todo = this.state.todos[index];
        // console.log('todo = ', todo);
        // const oldChecked = this.state.todos[index].completed;
        // console.log('was checked? ' + oldChecked);
        
        this.state.todos[index].completed = !this.state.todos[index].completed;
        this.setState({
            todos: this.state.todos
        })
        this.fetchUpdateTodo(index);
    }

    render() {
        console.log('Render Todo');
        return (
            <div>
                <h2>Todos</h2>
                <button onClick={this.sayHello.bind(this)}>Say Hello!</button>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((todo, index) => {
                            return <tr>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>
                                    <input type="checkbox" checked={todo.completed} onChange={this.bifeaza.bind(this,index)}></input>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Todo;
