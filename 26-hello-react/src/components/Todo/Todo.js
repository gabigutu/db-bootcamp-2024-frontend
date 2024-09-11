import { Component } from "react";
import { formatDate } from "date-fns";
import { Link } from 'react-router-dom';
import fetchTodos, { fetchDeleteTodo, fetchUpdateTodo } from "../../services/todos-services";

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
        this.fetchUsers();
        const request = async () => {
            const todos = await fetchTodos();
            this.setState({
                todos: todos
            });
        }
        request();
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

    sayHello() {
        console.log('hello');
    }

    sendUpdateAndDisplay = async (todo) => {
        const modifiedTodo = await fetchUpdateTodo(todo.id, todo);
        // if (modifiedTodo.completed === this.state.todos[index].completed) {
        if (true) { // obiectul confirmat are datele actualizate corect
            this.setState({
                todos: this.state.todos
            })
        } else {  // obiectul confirmat nu are datele actualizate corect

        }
        todo.disabled = false;
    };

    bifeaza(index) {
        const todo = this.state.todos[index];
        todo.disabled = true;
        this.setState({
            todos: this.state.todos
        }, () => {
            todo.completed = !todo.completed;
            this.sendUpdateAndDisplay(todo);
        });
    }


    sendDeleteAndDisplay = async (index, todo) => {
        const deletedTodo = await fetchDeleteTodo(todo.id);
        if (JSON.stringify(deletedTodo) === JSON.stringify({})) {
            this.state.todos.splice(index, 1);
            this.setState({
                todos: this.state.todos
            });
        }
        todo.clickedDelete = false;
    }

    sterge(index){
        const todo = this.state.todos[index];
        todo.clickedDelete = true;
        this.setState({
            todos: this.state.todos
        }, () => {
            this.sendDeleteAndDisplay(index, todo);
        });   
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
                                    <input type="checkbox" checked={todo.completed} onChange={this.bifeaza.bind(this,index)} disabled={todo.disabled}></input>
                                </td>
                                <td>
                                    <button onClick={() => this.sterge(index)} disabled={todo.clickedDelete}>Delete</button>
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
