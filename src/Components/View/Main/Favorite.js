import { useEffect } from "react";
import { Link } from "react-router-dom";
import store from "../../../Store/store";
import { FaHeart } from "react-icons/fa";

export default function Favorite() {

    // (GET) server로부터 data 불러오기
  useEffect(() => {
    store.LoadData();
  }, []);
  // console.log(store.getBlogData)

  const result = store.getBlogData.filter(function (v) {
    return (v.favorite === true)
  });
  console.log(result)

    return (
        //favorite 가 true 이면 보여줘
        <div className="Contents">
            {result.map((blogData) => {
          return (
            <Link to={`/main/detail/${blogData.id}`}>
              <div className="Mainlistdiv" key={blogData.id}>
                <img className="mainimg" src={blogData.imgURL} alt="img"/>
                <h3 className="Mainlisth3">
                  {blogData.title}
                </h3>
                {blogData.favorite===true? <FaHeart className="icon"/> : null}
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
