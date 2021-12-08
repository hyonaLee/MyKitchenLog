import React from "react";
import { FaBars } from "react-icons/fa";


function MyBtn({MyPageStatus, setMyPageStatus}) {
    return (
        <div className="MyBtnDiv"
            onClick={() => {
            setMyPageStatus(!MyPageStatus);
        }}>
            <span className="MyImg"></span>
            <span className="MyBtn">Nickname</span>
            <span className="MyMenuBtn"><FaBars className="menuicon" /></span>
        </div>
    )
}

export default MyBtn;