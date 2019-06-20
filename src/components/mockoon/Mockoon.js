import React from 'react';
import axios from 'axios';
import Table from "../common/table/Table";

class Mockoon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            id: null,
            mockData: []
        };
        this.onEditHandle = this.onEditHandle.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:3002/users`, {responseType: "application/json"})
            .then(res => {
                const mockData = res.data;
                this.setState({mockData});
            });
    }

    onSubmitHandle(event) {
        event.preventDefault();

        this.setState({
            mockData: [...this.state.mockData, {
                id: Date.now(),
                title: event.target.item.value,
                done: false,
                date: new Date()
            }]
        });

        event.target.item.value = '';
    }

    onDeleteHandle() {
        let id = arguments[0];

        this.setState({
            mockData: this.state.mockData.filter(item => {
                if (item.id !== id) {
                    return item;
                }
                return null;
            })
        });
    }

    onEditHandle(event) {
        this.setState({
            edit: true,
            id: arguments[0],
            title: arguments[1]
        });
    }

    onUpdateHandle(event) {
        event.preventDefault();

        this.setState({
            mockData: this.state.mockData.map(item => {
                if (item.id === this.state.id) {
                    item['title'] = event.target.updatedItem.value;
                    return item;
                }

                return item;
            })
        });

        this.setState({
            edit: false
        });
    }

    onCompleteHandle() {
        let id = arguments[0];

        this.setState({
            mockData: this.state.mockData.map(item => {
                if (item.id === id) {
                    item['done'] = true;
                    return item;
                }

                return item;
            })
        });
    }

    renderEditForm() {
        if (this.state.edit) {
            return <form onSubmit={this.onUpdateHandle.bind(this)}>
                <input type="text" name="updatedItem" className="item" defaultValue={this.state.title}/>
                <button className="update-add-item">Update</button>
            </form>
        }
    }

    render() {
        return (
            <div>
                {this.state.mockData.length > 0 ?
                    <Table mockData={this.state.mockData} editRow={this.onEditHandle}></Table> : null}
            </div>
        );
    }
}

export default Mockoon;