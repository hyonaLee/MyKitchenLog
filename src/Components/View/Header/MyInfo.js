import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";

export default function MyInfo({MyPageStatus, setMyPageStatus}) {
  const navigate = useNavigate();

    const onClickLogout = () => {
        axios.get("/api/users/logout").then((response) => {
          if (response.data) {
            alert("로그아웃성공");
            navigate("/");
          } else {
            alert("로그아웃실패");
          }
        });
      };

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
                    <li onClick={onClickLogout}>Logout</li>
                </Link>
            </ul>
        </div>
    )
}