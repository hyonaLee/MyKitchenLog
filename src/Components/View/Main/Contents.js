import { Link } from "react-router-dom";
import "../../../App.css";
import { observer } from "mobx-react";
import store from "../../../Store/store";
import { useEffect, useState } from "react";
import Search from "./Search";

const Contents = ({searchstatus, SetSearchstatus}) => {

  // (GET) server로부터 data 불러오기
  useEffect(() => {
    store.LoadData();
  }, []);
  console.log(store.getBlogData)

  // 검색어 매칭
  const [searchword , setSearchword] = useState();
  const result = store.getBlogData.filter(function (v) {
    return searchword !== undefined && (v.tag.includes(searchword))
  });

    return (
            <div className="Contents">
      {searchstatus === true ? <Search searchword={searchword} setSearchword={setSearchword} /> : null}
        {searchword !== undefined ?
         result.map((blogData) => {
          return (
            <Link to={`Detail/${blogData.id}`}>
              <div className="Mainlistdiv" key={blogData.id}>
                <img className="mainimg" src={blogData.imgURL} alt="img"/>
                <h3 className="Mainlisth3">
                  {blogData.title}
                </h3>
                <h4 className="Maintagh4">
                  {blogData.tag.length !== 0 &&
                    blogData.tag.map((v) => {
                      return ` #${v}`;
                    })}
                </h4>
              </div>
            </Link>
          );
          })
          
        : store.getBlogData.map((blogData) => {
          return (
            <Link to={`Detail/${blogData.id}`}>
              <div className="Mainlistdiv" key={blogData.id}>
                <img className="mainimg" src={blogData.imgURL} alt="img"/>
                <h3 className="Mainlisth3">
                  {blogData.title}
                </h3>
                <h4 className="Maintagh4">
                  {blogData.tag.length !== 0 &&
                    blogData.tag.map((v) => {
                      return ` #${v}`;
                    })}
                </h4>
              </div>
            </Link>
          );
        })}

        </div>
    )
}

export default observer(Contents)