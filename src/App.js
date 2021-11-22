import "./style.min.css";
import React, { useState } from "react";
import Header from "./Components/View/Header/Header";
import Main from "./Components/View/Main/Main";
import Edit from "./Components/View/Main/Edit";
import Detail from "./Components/View/Main/Detail";
import { Route } from "react-router-dom";
import NewPost from "./Components/View/Main/NewPost";
import Nav from "./Components/View/Header/Nav";

function App() {
  const [searchstatus, SetSearchstatus] = useState(false);

  return (
    <div className="Container">
      <Header />
      <Nav searchstatus={searchstatus} SetSearchstatus={SetSearchstatus}/>
      <Route exact path="/" render={() => <Main searchstatus={searchstatus} SetSearchstatus={SetSearchstatus}/>} />
      <Route exact path="/NewPost" component={NewPost} />
      <Route exact path="/Edit/:id" component={Edit} />
      <Route exact path="/Detail/:id" component={Detail} />
    </div>
  );
}

export default App;
