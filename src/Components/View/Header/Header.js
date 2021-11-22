import React from 'react';
import Logo from './Logo'
import { Link } from 'react-router-dom';
import MyBtn from './MyBtn';

function Header() {
    return (
        <div className="HeaderDiv">
            <Link to="/">
                <Logo/>
            </Link>
            <MyBtn />
        </div>
    );
}

export default Header;