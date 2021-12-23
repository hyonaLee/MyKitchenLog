import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../../_actions/user_action'
import { useNavigate } from "react-router-dom"

export default function RegisterPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onNameHandler = (e) => {
        setName(e.currentTarget.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호확인은 같아야합니다.')
        }
        if(Password.length < 4) {
            return alert('비밀번호는 4글자 이상이여야 합니다.')
        }
        let body = {
            email: Email,
            password: Password,
            name: Name
        }
        console.log(body)
        dispatch(registerUser(body))
        .then((response) => {
            console.log(response.payload.success)
            if (response.payload.success) {
              alert("회원가입성공");
              navigate("/login");
            } else {
              alert("회원가입실패");
            }
          });
        }

    return (
        <div className="Background">
            <div className="RegisterDiv">
                <h1 className="HomeH1">My Kitchen Log</h1>
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" placeholder="NAME" value={Name} onChange={onNameHandler}>
                        </input>
                        <input type="email" placeholder="EMALIL" value={Email} onChange={onEmailHandler}>
                        </input>
                        <input type="password" placeholder="PASSWORD" value={Password} onChange={onPasswordHandler}>
                        </input><br/>
                        <input type="password" placeholder="PASSWORD" value={ConfirmPassword} onChange={onConfirmPasswordHandler}>
                        </input><br/>
                        <button className="JoinBtn">JOIN</button>
                    </form>
            </div>
        </div>
    )
}