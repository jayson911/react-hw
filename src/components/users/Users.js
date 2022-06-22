import {useEffect, useState} from "react";
import {User} from "../index"

export default function Users(){

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    }, []);

    const infoUser = (item) => {
        console.log('asasas');
        setUser(item);
    };

    return(<div>
        <h2>user info</h2>
        {users.map((user, index)=><User
        key={index}
        item={user}
        infoUser={infoUser}
        />)}
        {user.id && <div>{user.username}</div>}
        {<div>Name: {user.name}</div>}
        {<div>Email: {user.email}</div>}
        {<div>website: {user.website}</div>}
        {<div>street: {user.address.street}</div>}
    </div>);

}