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

export default fetchTodos