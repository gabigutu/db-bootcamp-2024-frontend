import { Component } from "react";

class Todo extends Component {

    urlBase = 'https://jsonplaceholder.typicode.com';
    noSuccededRequests = 0;

    constructor() {
        super();
        this.state = {
            todos: [],
            users: []
        }
    }

    logSuccededRequests() {
        this.noSuccededRequests++;
        console.log(`No of succeded requests: ${this.noSuccededRequests}`);
    }

    componentDidMount() {
        this.fetchUsers();
        this.fetchTodos();
    }

    fetchTodos = async () => {
        const response = await fetch(this.urlBase+'/todos');
        const todos = await response.json();
        // console.log(todos);
        this.logSuccededRequests();
        this.setState({
            todos: todos
        });
    }
    fetchUsers = async () => {
        const response = await fetch(this.urlBase+'/users');
        const users = await response.json();
        // console.log(users);
        this.logSuccededRequests();
        this.setState({
            users: users
        });
    }
    fetchUpdateTodo = async (index) => {
        const url = this.urlBase + "/" + index;
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(this.state.todos[index])
        });
        const todoResponse = await response.json();
        this.logSuccededRequests();
        console.log(todoResponse)
    }

    fetchDeleteTodo = async (index) => {
        const url = this.urlBase + "/" + this.state.todos[index].id;
        const response = await fetch(url, {
            method: 'DELETE'
        });
        const todoResponse = await response.json();
        this.logSuccededRequests();
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

    sterge(index){
        this.state.todos.splice(index, 1);
        this.setState({
            todos: this.state.todos
        }, () => {
            console.log('S-a sters elementul');
        });
        this.fetchDeleteTodo(index);
    }

    render() {
        console.log('Rerendering Todo Component');
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
                            <th>Delete</th>
                            <th>User</th>
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
                                <td>
                                    <button onClick={() => this.sterge(index)}>Delete</button>
                                    
                                </td>
                                <td>
                                    {this.state.users.find( user => {
                                        return user.id ===todo.userId
                                    })?.name || 'Loading...'} 
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
