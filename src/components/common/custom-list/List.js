import React from 'react';
import './List.scss';
import {Link} from "react-router-dom";

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    {this.props.cols.map(col => (<th>{col}</th>))}
                    <th>actions</th>
                </tr>
                </thead>
                <tbody>
                {this.props.list.length > 0 ? (
                    this.props.list.map(obj => (
                        <tr key={obj.id}>
                            {this.props.cols.map(col => (<td>{obj[col]}</td>))}
                            <td>
                                <button className="primary" onClick={() => this.props.editRow(obj)}>
                                    Edit
                                </button>
                                <button className="primary" onClick={() => this.props.deleteRow(obj.id)}>
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