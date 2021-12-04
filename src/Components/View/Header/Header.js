import React, { useState } from "react";
import Logo from './Logo'
import { Link } from 'react-router-dom';
import MyBtn from './MyBtn';
import MyInfo from './MyInfo'

function Header() {
    const [MyPageStatus, setMyPageStatus] = useState(false);

    return (
        <div className="HeaderDiv"  onClick={() => {
            setMyPageStatus(!MyPageStatus);
        }}>
            <Link to="/Main">
                <Logo/>
            </Link>
            <MyBtn MyPageStatus={MyPageStatus} setMyPageStatus={setMyPageStatus} />
            {MyPageStatus === true ? <MyInfo MyPageStatus={MyPageStatus} setMyPageStatus={setMyPageStatus}/> : null}
        </div>
    );
}

export default Header;