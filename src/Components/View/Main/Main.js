import "../../../App.css";
import Header from "../Header/Header";
import Nav from "../Header/Nav";
import Contents from "./Contents";


// 검색 기능 onBlur로 구현하여 검색 버튼 두번 눌러야 하는 문제. 수정 필요.
// 수정버튼 클릭 시, 태그 2개 이상인 게시물은 업로드 안되는 문제. 수정 필요.

const Main = ({searchstatus, SetSearchstatus}) => {

  return (

    <div className="MainDiv">
      <Header />
      <Nav searchstatus={searchstatus} SetSearchstatus={SetSearchstatus}/>
      <Contents searchstatus={searchstatus} SetSearchstatus={SetSearchstatus}/>
    </div>
  );
};


export default Main;
