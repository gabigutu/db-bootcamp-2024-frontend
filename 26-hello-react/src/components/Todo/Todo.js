import { formatDate } from "date-fns";
import { Component } from "react";
import { Link } from 'react-router-dom';
import fetchTodos, { fetchDeleteTodo, fetchUpdateTodo } from "../../services/todos-services";
import fetchUsers from "../../services/users-service";

class Todo extends Component {

    urlBase = 'https://jsonplaceholder.typicode.com';
    noSuccededRequests = 0;
    nowDate = null;

    constructor(props) {
        super(props);

        console.log(this.props);

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

    sterge(index) {
        const todo = this.state.todos[index];
        todo.clickedDelete = true;
        this.setState({
            todos: this.state.todos
        }, () => {
            this.sendDeleteAndDisplay(index, todo);
        });
    }

    setSearchField(inputValue) {
        this.search = inputValue;
    }

    performSearch() {
        this.props.navigate('/todo?s=' + this.search);
    }

    render() {
        console.log('Rerendering Todo Component');
        return (
            <div>
                <h2>Todos</h2>
                <form>
                    <input onChange={(event) => {
                        console.log(event.target, event.target.value);
                        this.setSearchField(event.target.value);
                    }}></input>
                    <button onClick={this.performSearch()}>Submit</button>
                </form>
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
                                    <input type="checkbox" checked={todo.completed} onChange={this.bifeaza.bind(this, index)} disabled={todo.disabled}></input>
                                </td>
                                <td>
                                    <button onClick={() => this.sterge(index)} disabled={todo.clickedDelete}>Delete</button>
                                </td>
                                <td>
                                    {this.state.users.find(user => {
                                        return user.id === todo.userId
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
