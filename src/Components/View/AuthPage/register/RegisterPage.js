import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action'
import { useNavigate } from "react-router-dom"

function RegisterPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Email, setEmail] = useState("")
    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("")
    // const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onIdHandler = (e) => {
        setId(e.currentTarget.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    // const onConfirmPasswordHandler = (e) => {
    //     setConfirmPassword(e.currentTarget.value)
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
            id: Id
        }
        // console.log(body)
        dispatch(registerUser(body))
        .then((response) => {
            // console.log(response.payload.success)
            if (response.payload.success) {
              alert("회원가입성공");
              navigate("/login");
            } else {
              alert("회원가입실패");
            }
          });
    };

    return (
        <div className="Background">
            <div className="RegisterDiv">
                <h1 className="HomeH1">My Kitchen Log</h1>
                    <form onSubmit={onSubmitHandler}>
                        <input type="Text" placeholder="ID" value={Id} onChange={onIdHandler}>
                        </input>
                        <input type="Text" placeholder="EMALIL" value={Email} onChange={onEmailHandler}>
                        </input>
                        <input type="Text" placeholder="PASSWORD" value={Password} onChange={onPasswordHandler}>
                        </input><br/>
                        <Link to="/login">
                        <button className="JoinBtn">JOIN</button>
                        </Link>
                    </form>
            </div>
        </div>
    )
}

