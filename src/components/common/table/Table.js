import React from 'react';
import './Table.scss';
import {Link} from "react-router-dom";

class Table extends React.Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DATE</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.props.mockData.length > 0 ? (
                    this.props.mockData.map(obj => (
                        <tr key={obj.id}>
                            <td>{obj.id}</td>
                            <td>{obj.title}</td>
                            <td>{obj.date}</td>
                            <td>
                                <Link to={'/editMockoon'}>Edit</Link>
                                <button className="button muted-button" onClick={() => this.props.editRow(obj)}>
                                    Edit
                                </button>
                                <button className="button muted-button" onClick={() => this.props.deleteUser(obj.id)}>
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
    }
}

export default Table;