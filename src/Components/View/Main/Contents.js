import { Link } from "react-router-dom";
import "../../../App.css";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import store from "../../../Store/store";
import { useEffect, useState } from "react";
import Search from "./Search";
import { FaHeart } from "react-icons/fa";

const Contents = ({ searchstatus, SetSearchstatus }) => {
  // (GET) server로부터 data 불러오기
  useEffect(() => {
    store.LoadData();
  },[]);

  const Data = toJS(store.getBlogData)
  // console.log(Data)

  // 검색어 매칭
  const [searchword, setSearchword] = useState();
  const result = Data.filter(function (v) {
    return searchword !== undefined && v.tag.includes(searchword);
  });

  return (
    <div className="Contents">
      {/* 검색창 show여부 */}
      {searchstatus === true ? (
        <Search searchword={searchword} setSearchword={setSearchword} />
      ) : null}
      {/* 게시물 검색 시 : 기본 렌더링 */}
      {searchword !== undefined
        ? result.map((blogData) => {
            // console.log(blogData);
            return (
              <Link to={`/main/detail/${blogData.postid}`}>
                <div className="Mainlistdiv" key={blogData.postid}>
                  <img className="mainimg" src={blogData.imgURL} alt="img" />
                  {blogData.favorite === true ? (
                    <FaHeart className="icon" />
                  ) : null}
                  <h3 className="Mainlisth3">{blogData.title}</h3>
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
        : 
        Data.map((blogData,index) => {
            return (
              <>
                <Link to={`/main/detail/${Data[index].postid}`}>
                  <div className="Mainlistdiv" key={Data[index].postid}>
                    <img className="mainimg" src={Data[index].imgURL} alt="img" />
                    {Data[index].favorite === true ? (
                      <FaHeart className="icon" />
                    ) : null}
                    <h3 className="Mainlisth3">{Data[index].title}</h3>
                    <h4 className="Maintagh4">
                      {Data[index].tag.length !== 0 &&
                        Data[index].tag.map((tag) => {
                          return ` #${tag}`;
                        })}
                    </h4>
                  </div>
                </Link>
              </>
            );
          })}
    </div>
  );
};

export default observer(Contents);
