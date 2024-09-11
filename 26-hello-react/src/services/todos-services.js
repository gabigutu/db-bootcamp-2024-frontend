import { PLACEHOLDER_URL_BASE, PLACEHOLDER_PATHS } from "./fetch-setup";

export async function fetchTodo(id) {
    if (id === undefined) return;
    const response = await fetch(PLACEHOLDER_URL_BASE + PLACEHOLDER_PATHS['todos'] + '/' + id);
    const todo = await response.json();
    console.log(todo);
    return todo;
}

async function fetchTodos() {
    const response = await fetch(PLACEHOLDER_URL_BASE  + PLACEHOLDER_PATHS['todos']);
    const todos = await response.json();
    // console.log(todos);
    // this.logSuccededRequests();
    return todos;
}


export async function fetchUpdateTodo(id, todo) {
    const url = PLACEHOLDER_URL_BASE + PLACEHOLDER_PATHS['todos'] + "/" + id;
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(todo)
    });
    const json = await response.json();
    // this.logSuccededRequests();
    // console.log(todoResponse)
    return json;
}

export async function fetchDeleteTodo(id) {
    const url = PLACEHOLDER_URL_BASE + PLACEHOLDER_PATHS['todos'] + "/" + id;
    const response = await fetch(url, {
        method: 'DELETE'
    });
    const json = await response.json();
    // this.logSuccededRequests();
    // console.log(todoResponse)
    return json;
}

export default fetchTodos