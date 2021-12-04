import React from "react";

function MyBtn({MyPageStatus, setMyPageStatus}) {
    return (
        <div className="MyBtnDiv"
            onClick={() => {
            setMyPageStatus(!MyPageStatus);
        }}>
            <span className="MyImg"></span>
            <span className="MyBtn">Nickname</span>
        </div>
    )
}

export default MyBtn;