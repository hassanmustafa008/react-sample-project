import React, {useState} from 'react';
import './Users.scss';
import AddUserForm from "./AddUser";
import EditUserForm from "./EditUser";

const Users = () => {
    const usersData = [
        {id: 1, name: 'Tania', username: 'floppydiskette'},
        {id: 2, name: 'Craig', username: 'siliconeidolon'},
        {id: 3, name: 'Ben', username: 'benisphere'},
    ];
    const [users, setUsers] = useState(usersData);
    const [editing, setEditing] = useState(false);
    const initialFormState = {id: null, name: '', username: ''};
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const addUser = user => {
        user.id = users.length + 1;
        setUsers([...users, user]);
        //state variable
    };
    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id));
    };
    const editRow = user => {
        setEditing(true);
        setCurrentUser({id: user.id, name: user.name, username: user.username});
    };
    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    };
    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Edit User</h2>
                            <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser}/>
                        </div>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    {/* {state variable}*/}
                    <Table users={users} editRow={editRow} deleteUser={deleteUser}></Table>
                </div>
            </div>
        </div>
    );
};

const Table = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button className="button muted-button" onClick={() => props.editRow(user)}>
                                Edit
                            </button>
                            <button className="button muted-button" onClick={() => props.deleteUser(user.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default Users;