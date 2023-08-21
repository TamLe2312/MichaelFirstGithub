import React from "react";
import './Nav.scss'
import {
    Link
} from "react-router-dom";
<link href='https://fonts.googleapis.com/css?family=Roboto:500,900,100,300,700,400' rel='stylesheet' type='text/css'></link>
class Nav extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <nav className="stroke">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/todo">ToDos</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/user">Users</Link></li>
                        </ul>
                    </nav>
                </section>
            </div>
        )
    }
}

export default Nav;