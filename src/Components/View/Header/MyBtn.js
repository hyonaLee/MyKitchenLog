import React from "react";
import { FaBars } from "react-icons/fa";

function MyBtn({MyPageStatus, setMyPageStatus, username}) {
    return (
        <div className="MyBtnDiv"
            onClick={() => {
            setMyPageStatus(!MyPageStatus);
        }}>
            <span className="MyImg"></span>
            <span className="MyBtn">{username}</span>
            <span className="MyMenuBtn"><FaBars className="menuicon" /></span>
        </div>
    )
}

export default MyBtn;