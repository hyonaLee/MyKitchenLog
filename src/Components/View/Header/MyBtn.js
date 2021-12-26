import React, {useState} from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { auth } from '../../../_actions/user_action';

function MyBtn({MyPageStatus, setMyPageStatus}) {

    const [user, setUser] = useState("")
    const dispatch = useDispatch();

    dispatch(auth())
    .then((response) => {
        setUser(response.payload.name)
    });
    
    return (
        <div className="MyBtnDiv"
            onClick={() => {
            setMyPageStatus(!MyPageStatus);
        }}>
            <span className="MyImg"></span>
            <span className="MyBtn">{user}</span>
            <span className="MyMenuBtn"><FaBars className="menuicon" /></span>
        </div>
    )
}

export default MyBtn;