import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import store from "../../../Store/store";
import Header from "../Header/Header";

function Detail() {
  // (GET) serer로부터 data 불러오기
  useEffect(() => {
    store.LoadData();
  }, []);
  // console.log(store.getBlogData)

  // Click한 ID정보 받아오기
  const currentid = Number(useParams().id);
  // console.log("클릭한 게시물의 ID는", currentid);
  const postFilter = store.getBlogData.filter((value) => {
    // console.log("postFilter: ", value.id);
    return value.id === Number(currentid);
  });

  // (DEL) server로 data 삭제 요청
  function DelPosts() {
    store.DeleteData(currentid);
  }

  // modal관리
  const [modal, changeModal] = useState(false);

  function Modal() {
    return (
      <div className="ModalBackDiv" onClick={() => {
        changeModal(!modal);
      }}>
        <div className="ModalDiv">
          <p>삭제하시겠습니까?</p>
          <button className="CxlBtn"
            onClick={() => {
              changeModal(!modal);
            }}
          >
            취소
          </button>
          <Link to="/Main">
            <button className="DelBtn" onClick={DelPosts}>삭제</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    postFilter.length !== 0 && (
      <>
        <Header/>
        <div className="DetailDiv">
          {modal === true ? <Modal /> : null}
          <h1 className="DetailTitleh1">
            My Kitchen 레시피 - {postFilter[0].title}
          </h1>
          <div className="DetailBtnDiv">
            <Link to={`/Edit/${currentid}`}>
              <button className="DetailBtn">수정</button>
            </Link>
              <button className="DetailBtn"
                onClick={() => {
                  changeModal(!modal);
                }}
              >
                삭제
              </button>
          </div>
          <h4 className="DetailDateh4">{postFilter[0].date}</h4>

          <h3 className="DetailTagh3">
            {postFilter[0].tag.length !== 0 &&
              postFilter[0].tag.map((v) => {
                return ` #${v}`;
              })}
          </h3>
          <div className="DetailContentsDiv">
            <img src={postFilter[0].imgURL} alt="img URL" width="100%" />
            <p className="DetailContentsP">{postFilter[0].contents}</p>
          </div>
        </div>
      </>
    )
  );
}
export default observer(Detail);
