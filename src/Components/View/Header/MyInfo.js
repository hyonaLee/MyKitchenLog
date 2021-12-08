import React from 'react'
import { Link } from 'react-router-dom';

export default function MyInfo({MyPageStatus, setMyPageStatus, SetSearchstatus, searchstatus}) {
    return (
        <div className="MyMenu">
            <div className="InfoMyMenu" onClick={() => {
            setMyPageStatus(!MyPageStatus);
        }}>
            <span className="InfoMyImg"></span>
            <span className="InfoMyBtn">Nickname</span>
            </div>
            <ul className="InfoList">
                <li>MyPage</li>
                <Link to="/Main">
                <li onClick={() => {SetSearchstatus(!searchstatus)||setMyPageStatus(!MyPageStatus)}} >Search</li>
                </Link>
                <Link to="/NewPost">
                <li>NewPost</li>
                </Link>
                <Link to="/">
                <li>Logout</li>
                </Link>
            </ul>
        </div>
    )
}