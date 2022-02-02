import "../../../App.css";
import Header from "../Header/Header";
import Nav from "../Header/Nav";
import { Outlet } from "react-router-dom";

const Main = ({searchstatus, SetSearchstatus ,username,useremail }) => {
  return (
    <div className="MainDiv">
      <Header username={username} useremail={useremail} />
      <Nav searchstatus={searchstatus} SetSearchstatus={SetSearchstatus} />
      <Outlet/>
    </div>
  );
};


export default Main;
