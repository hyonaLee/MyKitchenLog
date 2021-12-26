import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { auth } from '../../../_actions/user_action';
import axios from "axios";

export default function MyInfo({MyPageStatus, setMyPageStatus}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState("")

  dispatch(auth())
  .then((response) => {
      setUser(response.payload.name)
  });

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
                <span className="InfoMyBtn">{user}</span>
            </div>
            <ul className="InfoList">
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