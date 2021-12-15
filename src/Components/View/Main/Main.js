import "../../../App.css";
import Header from "../Header/Header";
import Contents from "./Contents";
import Nav from "../Header/Nav";
import { Route } from "react-router-dom";
import ContentsRoute from './ContentsRoute'

const Main = ({searchstatus, SetSearchstatus}) => {
  return (
    <div className="MainDiv">
      <Header/>
      <Nav searchstatus={searchstatus} SetSearchstatus={SetSearchstatus}/>
      <Route path="/main" exact render={() => <Contents searchstatus={searchstatus} SetSearchstatus={SetSearchstatus}/>} />
      <Route path="/main/:component" component={ContentsRoute} />
      <Route path="/main/:component/:id" component={ContentsRoute} />
    </div>
  );
};


export default Main;
