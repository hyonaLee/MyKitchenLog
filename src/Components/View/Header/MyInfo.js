import React from 'react'

export default function MyInfo({MyPageStatus, setMyPageStatus}) {
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
                <li>Logout</li>
            </ul>
        </div>
    )
}