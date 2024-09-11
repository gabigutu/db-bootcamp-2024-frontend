import { useEffect, useState } from 'react';
import fetchUser from '../../services/users-service';

function UserDetails(props) {
    console.log(`User details received user id: ${props.id}`);

    const [ user, setUser ] = useState(null);

    useEffect(() => {
        const request = async () => {
            console.log('am primit', props)
            const userResponse = await fetchUser(props.id);
            setUser(userResponse);
        }
        request();
    }, [props.id]) // componentDidUpdate
    

    return (
        <ul>
            <li>Name: {user?.name}</li>
            <li>Email: {user?.email}</li>
            <li>Street: {user?.address?.street}</li>
        </ul>
    );

}

export default UserDetails;
