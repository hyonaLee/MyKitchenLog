import "./style.min.css";
import React, { useState } from "react";
import Main from "./Components/View/Main/Main";
import { Route } from "react-router-dom";
import RegisterPage from "./Components/View/AuthPage/register/RegisterPage";
import LoginPage from "./Components/View/AuthPage/login/LoginPage";
import Home from "./Components/View/Main/Home";

function App() {
  const [searchstatus, SetSearchstatus] = useState(false);

  return (
    <div className="Container">
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route
            path="/main"
            render={() => (
              <Main
                searchstatus={searchstatus}
                SetSearchstatus={SetSearchstatus}
              />
            )}
          />
    </div>
  );
}

export default App;
