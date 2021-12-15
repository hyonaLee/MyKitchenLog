import React from 'react'
import { Link } from 'react-router-dom';

export default function MyInfo({MyPageStatus, setMyPageStatus}) {
    return (
        <div className="MyMenu">
            <div className="InfoMyMenu" onClick={() => {
            setMyPageStatus(!MyPageStatus)
            }}>
                <span className="InfoMyImg"></span>
                <span className="InfoMyBtn">Nickname</span>
            </div>
            <ul className="InfoList">
                <Link to="/mypage">
                    <li onClick={() => {setMyPageStatus(!MyPageStatus)}}>MyPage</li>
                </Link>
                <Link to="/main">
                    <li onClick={() => {setMyPageStatus(!MyPageStatus)}}>Main</li>
                </Link>
                <Link to="/main/newpost">
                    <li onClick={() => {setMyPageStatus(!MyPageStatus)}}>NewPost</li>
                </Link>
                <Link to="/">
                    <li onClick="logoutconfirm">Logout</li>
                </Link>
            </ul>
        </div>
    )
}