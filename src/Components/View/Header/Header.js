import React, { useState } from "react";
import Logo from './Logo'
import { Link } from 'react-router-dom';
import MyBtn from './MyBtn';
import MyInfo from './MyInfo'

function Header({searchstatus,SetSearchstatus}) {
    const [MyPageStatus, setMyPageStatus] = useState(false);

    return (
        <div className="HeaderDiv">
            <Link to="/main">
                <Logo/>
            </Link>
            <MyBtn MyPageStatus={MyPageStatus} setMyPageStatus={setMyPageStatus} />
            {MyPageStatus === true ? <MyInfo MyPageStatus={MyPageStatus} setMyPageStatus={setMyPageStatus} searchstatus={searchstatus} SetSearchstatus={SetSearchstatus}/> : null}
        </div>
    );
}

export default Header;