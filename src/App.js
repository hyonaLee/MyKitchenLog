import "./style.min.css";
import React, { useState } from "react";
import Main from "./Components/View/Main/Main";
import { Route,Routes } from "react-router-dom";
import RegisterPage from "./Components/View/AuthPage/register/RegisterPage";
import LoginPage from "./Components/View/AuthPage/login/LoginPage";
import Home from "./Components/View/Main/Home";
import MyPage from "./Components/View/Main/MyPage";
import Contents from "./Components/View/Main/Contents";
import ContentsRoute from "./Components/View/Main/ContentsRoute";

function App() {
  
  const [searchstatus, SetSearchstatus] = useState(false);

  return (
    <div className="Container">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/mypage" element={<MyPage/>} />
          <Route path="/mypage/favorit" element={<MyPage/>} />
          <Route path="/main/*" element={<Main searchstatus={searchstatus} SetSearchstatus={SetSearchstatus}/>}>
            <Route path="" element={<Contents searchstatus={searchstatus} SetSearchstatus={SetSearchstatus}/>} />
            <Route path=":component" element={<ContentsRoute/>} />
            <Route path=":component/:id" element={<ContentsRoute/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
