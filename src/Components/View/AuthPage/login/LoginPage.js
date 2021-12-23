import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../_actions/user_action";
import { useNavigate } from "react-router-dom"

export default function LoginPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      id: Id,
      password: Password,
    };

    dispatch(loginUser(body))
    .then((response) => {
      if (response.payload.loginSuccess) {
        alert("로그인성공");
        navigate("/");
      } else {
        alert("로그인실패");
      }
    });
  };
  
    return (
        <div className="Background">
            <div className="LoginDiv">
                <h1 className="HomeH1">My Kitchen Log</h1>
                    <form onSubmit={onSubmitHandler}>
                        <input type="Text" placeholder="ID" value={Id} onChange={onIdHandler}>
                        </input>
                        <input type="Text" placeholder="PASSWORD" value={Password} onChange={onPasswordHandler}>
                        </input>
                        <Link to="/main">
                        <button className="LoginBtn" type="submit">LOGIN</button>
                        </Link>
                    </form>
            </div>
        </div>
    )
}

