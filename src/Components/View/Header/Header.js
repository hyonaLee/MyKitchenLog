import React from 'react';
import Logo from './Logo'
import CreateBtn from './CreateBtn'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="HeaderDiv">
            <Link to="/">
                <Logo/>
            </Link>
            <Link to="/NewPost">
                <CreateBtn/>
            </Link>
        </div>
    );
}

export default Header;