import "./style.min.css";
import React, { useState } from "react";
import Header from "./Components/View/Header/Header";
import Main from "./Components/View/Main/Main";
import Edit from "./Components/View/Main/Edit";
import Detail from "./Components/View/Main/Detail";
import { Route } from "react-router-dom";
import NewPost from "./Components/View/Main/NewPost";
import RegisterPage from "./Components/View/AuthPage/register/RegisterPage"
import LoginPage from "./Components/View/AuthPage/login/LoginPage"
import Home from "./Components/View/Main/Home"
function App() {
  const [searchstatus, SetSearchstatus] = useState(false);

  return (
    <div className="Container">
      <Route exact path="/" component={Home} />
      <Route exact path="/Register" component={RegisterPage} />
      <Route exact path="/Login" component={LoginPage} />
      <Route exact path="/Main" render={() => <Main searchstatus={searchstatus} SetSearchstatus={SetSearchstatus}/>} />
      <Route exact path="/NewPost" component={NewPost} />
      <Route exact path="/Edit/:id" component={Edit} />
      <Route exact path="/Detail/:id" component={Detail} /> 
    </div>
  );
}

export default App;
