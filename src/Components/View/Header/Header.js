import React, { useState } from "react";
import Logo from './Logo'
import { Link } from 'react-router-dom';
import MyBtn from './MyBtn';
import MyInfo from './MyInfo'

function Header({ username, useremail }) {
    
    const [MyPageStatus, setMyPageStatus] = useState(false);

    return (
        <div className="HeaderDiv">
            <Link to="/main">
                <Logo/>
            </Link>
            <MyBtn MyPageStatus={MyPageStatus} setMyPageStatus={setMyPageStatus} username={username} useremail={useremail} />
            {MyPageStatus === true ? <MyInfo MyPageStatus={MyPageStatus} setMyPageStatus={setMyPageStatus} /> : null}
        </div>
    );
}

export default Header;