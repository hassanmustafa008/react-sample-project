import React from 'react';
import './List.scss';
import {Can} from "@casl/react";

class Table extends React.Component {
    constructor(props) {
        debugger;
        super(props);
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    {this.props.cols.map(col => (<th>{col}</th>))}
                    <Can I='write' a='article' ability={this.props.ability}>
                        <th>actions</th>
                    </Can>
                </tr>
                </thead>
                <tbody>
                {this.props.list.length > 0 ? (
                    this.props.list.map(obj => (
                        <tr key={obj.id}>
                            {this.props.cols.map(col => (<td>{obj[col]}</td>))}
                            <td>
                                <Can I='write' a='article' ability={this.props.ability}>
                                    <button className="primary" onClick={() => this.props.editRow(obj)}>
                                        Edit
                                    </button>
                                </Can>
                                <Can I='delete' a='article' ability={this.props.ability}>
                                    <button className="primary" onClick={() => this.props.deleteRow(obj.id)}>
                                        Delete
                                    </button>
                                </Can>
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