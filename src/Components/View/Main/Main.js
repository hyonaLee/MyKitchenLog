import "../../../App.css";
import Header from "../Header/Header";
import Contents from "./Contents";
import Nav from "../Header/Nav";
import { Route } from "react-router-dom";
import ContentsRoute from './ContentsRoute'
import { FaPenNib } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
// 수정버튼 클릭 시, 태그 2개 이상인 게시물은 업로드 안되는 문제. 수정 필요.

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
