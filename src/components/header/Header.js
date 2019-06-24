import React from "react";
import './Header.scss';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="App-header">
                <span>LOGO</span>
                <span><Link to={'/'}>REDUX</Link></span>
                <span><Link to={'/grid'}>GRID</Link></span>
                <span><Link to={'/shoe'}>ROUTER</Link></span>
                <span><Link to={'/users'}>HOOKS</Link></span>
                <span><Link to={'/todo'}>TODO</Link></span>
                <span><Link to={'/counter'}>COUNTER</Link></span>
            </div>
        );
    }
}

export default Header;