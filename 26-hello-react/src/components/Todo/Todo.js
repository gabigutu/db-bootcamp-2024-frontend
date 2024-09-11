import { Component } from "react";
import { formatDate } from "date-fns";
import { Link } from 'react-router-dom';
import fetchTodos from "../../services/todos-services";

class Todo extends Component {

    urlBase = 'https://jsonplaceholder.typicode.com';
    noSuccededRequests = 0;
    nowDate = null;

    constructor() {
        super();
        this.state = {
            todos: [],
            users: []
        }
        this.nowDate = new Date().toString();
        this.nowDate = formatDate(this.nowDate, "dd/MM/yyyy");

    }

    logSuccededRequests() {
        this.noSuccededRequests++;
        console.log(`No of succeded requests: ${this.noSuccededRequests}`);
    }

    componentDidMount() {
        const requestTodos = async () => {
            const todos = await fetchTodos();
            this.setState({
                todos: todos
            });
        }

        const requestUsers = async () => {
            const users = await fetchUsers();
            this.setState({
                users: users
            });
        }
        requestTodos();
        requestUsers();
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
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((todo, index) => {
                            return <tr>
                                <td>{todo.id}</td>
                                <td><Link to={'/todo/' + todo.id}>{todo.title}</Link></td>
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
                                <td>{this.nowDate}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Todo;
