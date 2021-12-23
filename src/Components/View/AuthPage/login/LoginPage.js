import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../_actions/user_action";
import { useNavigate } from "react-router-dom"

export default function LoginPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: Email,
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
                        <input type="email" placeholder="EMAIL" value={Email} onChange={onEmailHandler}>
                        </input>
                        <input type="password" placeholder="PASSWORD" value={Password} onChange={onPasswordHandler}>
                        </input>
                        <button className="LoginBtn" type="submit">LOGIN</button>
                    </form>
            </div>
        </div>
    )
}

