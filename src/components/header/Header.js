import React from "react";
import './Header.scss';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="App-header">
                <span>LOGO</span>
                <span><Link to={'/grid'}>GRID</Link></span>
                <span><Link to={'/shoe'}>SHOE</Link></span>
                <span><Link to={'/users'}>CRUD</Link></span>
                <span><Link to={'/todo'}>TODO</Link></span>
                <span><Link to={'/counter'}>COUNTER</Link></span>
                <span><Link to={'/mockoon'}>API</Link></span>
            </div>
        );
    }
}

export default Header;