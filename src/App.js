import "./style.min.css";
import React, { useState } from "react";
import Main from "./Components/View/Main/Main";
import { Route,Routes } from "react-router-dom";
import RegisterPage from "./Components/View/AuthPage/register/RegisterPage";
import LoginPage from "./Components/View/AuthPage/login/LoginPage";
import Home from "./Components/View/Main/Home";
import Contents from "./Components/View/Main/Contents";
import ContentsRoute from "./Components/View/Main/ContentsRoute";
import Auth from "../src/Components/Auth/Auth"
import { auth } from '../src/_actions/user_action';
import { useDispatch } from 'react-redux';

function App() {
  
  const [searchstatus, SetSearchstatus] = useState(false);
  const [username, setUsername] = useState("")
  const [useremail, setUseremail] = useState("kiko@gmail.com")
  const dispatch = useDispatch();

  dispatch(auth())
  .then((response) => {
      setUsername(response.payload.name)
      setUseremail("kiko@gmail.com")
      console.log("로그인",username,useremail)
  });

  return (
    <div className="Container">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/main/*" element={<Auth><Main searchstatus={searchstatus} SetSearchstatus={SetSearchstatus} username={username} useremail={useremail} /></Auth>}>
            <Route path="" element={<Auth><Contents searchstatus={searchstatus} SetSearchstatus={SetSearchstatus} useremail={useremail}/></Auth>} />
            <Route path=":component" element={<Auth><ContentsRoute useremail={useremail} /></Auth>} />
            <Route path=":component/:id" element={<Auth><ContentsRoute useremail={useremail} /></Auth>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
