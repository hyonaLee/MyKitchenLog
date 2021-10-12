import "./App.css";
import Header from "./Components/View/Header/Header";
import Main from "./Components/View/Main/Main";
import Write from "./Components/View/Main/Write";
import Detail from "./Components/View/Main/Detail";
import { Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  
  //detail에서 write로 클린된 id값 보내기.
  const [clickid, setClickid] = useState(0);
    console.log("ID값", clickid);
  function getData(data) {
    setClickid(data);
  }

  return (
    <div>
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/Write">
        <Write clickid={clickid}/>
      </Route>
      <Route exact path="/Detail/Write/:id">
        <Write clickid={clickid} />
      </Route>
      <Route exact path="/Detail/:id">
        <Detail getData={getData} />
      </Route>
    </div>
  );
}

export default App;
