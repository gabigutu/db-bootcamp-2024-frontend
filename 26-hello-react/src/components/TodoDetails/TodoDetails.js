import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchTodo from '../../services/todos-services';
import UserDetails from '../UserDetails/UserDetails';

function TodoDetails() {
    
    let { id } = useParams(); // TODO: is this async ?

    const [todo, setTodo] = useState(null);

    useEffect(() => { // component did mount
        console.log('componenta todo details a fost montata');
        const request = async () => {
            const responseTodo = await fetchTodo(id);
            console.log('Mesaj de dupa fetch');
            setTodo(responseTodo);
        }
        request();

        // fetch(URL_BASE + '/todos/' + id).then((response) => {
        //     console.log('Received response ', response);
        //     return response.json();
        // }).then((data) => {
        //     setTodo(data);
        // })
    }, []);

    return (
        <>
            <h1>To Do Details</h1> 
            <p>ID: {id}</p>
            <p>Task: {todo?.title}</p>
            <p>Completed: {todo?.completed ? 'Realizat' : 'In lucru'}</p>
            <UserDetails id={todo?.userId} />
        </>
    )
}

export default TodoDetails;
