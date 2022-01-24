import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import store from "../../../Store/store";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { FaHeart } from "react-icons/fa";

function Edit() {
  // (GET) serer로부터 data 불러오기
  useEffect(() => {
    store.LoadData();
  }, []);
  const Data = toJS(store.getBlogData)
  // console.log("LoadData",Data)

  // Click한 ID정보 받아오기
  const currentid = Number(useParams().id);
  // console.log("클릭한 게시물의 ID는", currentid);
  const postFilter = Data.filter((value) => {
    return value.postid === Number(currentid);
  });

  // 날짜정보얻기
  const currentDate = new Date();
  const cYear = currentDate.getFullYear();
  const cMonth = currentDate.getMonth() + 1;
  const cDate = currentDate.getDate();
  const cHour = currentDate.getHours();
  const cMin = currentDate.getMinutes();
  const editTime = `${cYear}년 ${cMonth}월 ${cDate}일 ${cHour}시 ${cMin}분`;

  // Post 수정하기
  const [loadfile, setLoadfile] = useState();
  // 기존data
  const [currentURL, setCurrentURL] = useState();
  const currentTitle = postFilter.length !== 0 && postFilter[0].title;
  const currentTag = postFilter.length !== 0 && toJS(postFilter[0].tag);
  const currentContents = postFilter.length !== 0 && postFilter[0].contents;
  const currentFavorite = postFilter.length !== 0 && postFilter[0].favorite;
  // 추가data
  const [modiURL, setModiURL] = useState(currentURL);
  const [modiTitle, setModiTitle] = useState(currentTitle);
  const [modiTag, setModiTag] = useState(currentTag);
  const [modiContents, setModiContents] = useState(currentContents);
  const [modiFavorite, setModiFavorite] = useState(currentFavorite);

  // user가 작성한 input 받아오기
  const EditTitle = (event) => {
    setModiTitle(event.target.value);
  };
  const EditContents = (event) => {
    setModiContents(event.target.value);
  };
  const EditURL = (event) => {
    setLoadfile(URL.createObjectURL(event.target.files[0]));
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = function (event) {
      setCurrentURL(event.target.result);
      setModiURL(event.target.value);
    };
  };

  useEffect(() => {
    // console.log("useEffect")
  }, [modiTag])

  // 해시태그 기능
  // 해시태그 추가
  const Keypress = (e) => {
    if (e.key === "Enter" || e.code === "Space") {
      setModiTag([...modiTag, e.target.value.trim()]);
      console.log(modiTag);
      e.target.value = "";
    } 
  };
  // 해시태그 삭제
  const delHash = (e) => {
    const currentHash = e.target.innerText.replace('#','');
    if (modiTag.indexOf(currentHash) !== -1) {
      modiTag.splice(modiTag.indexOf(currentHash),1)
    }
    // console.log(modiTag);
    setModiTag([...modiTag])
  }

  //favorite status change
  const changeFavorite = () => {
    setModiFavorite(!modiFavorite)
    console.log(modiFavorite)
  }
  // (PUT/PATCH) server로 data 수정 요청
  const modifiyData = () => {
    const mappingData = {
      date: editTime,
      title: modiTitle === false ? currentTitle : modiTitle,
      tag: modiTag,
      contents: modiContents === false ? currentContents : modiContents,
      imgURL: modiURL === undefined ? currentURL : modiURL,
      favorite: modiFavorite
    };
    store.EditData(currentid, mappingData);
  };

  return (
    postFilter.length !== 0 && (
      // 수정
      <div className="EditDiv">
        <textarea className="EditTitle" name="title" onChange={EditTitle}>
          {currentTitle}
        </textarea>
        <div className="EditTagDiv">
          <textarea
            className="EditTag"
            placeholder="주재료"
            name="tag"
            onKeyPress={Keypress}
          ></textarea>
          <div className="EditTagShowDiv">
            {postFilter.length !== 0 &&
              modiTag.map((hash) => {
                return (
                  <>
                    <button title="클릭시 태그 삭제" className="hash" onClick={delHash}>#{hash}</button>
                  </>
                );
              })}
          </div>
        </div>
        <textarea
          className="EditContents"
          name="contents"
          onChange={EditContents}
        >
          {currentContents}
        </textarea>
        <div className="EditBtnDiv">
          <div className="favoriteDiv">
        {modiFavorite === true ? <FaHeart className="icon" onClick={changeFavorite} style={{fill : "red"}}/> : <FaHeart className="icon" onClick={changeFavorite} style={{fill : "black"}}/>}
        &nbsp;like it!
        </div>
          <img src={loadfile} alt="Img URL" width="100px" />
          <input type="file" accept="image/*" onChange={EditURL} />
          <Link to="/main">
            <button className="EditBtn" onClick={modifiyData}>
              Post
            </button>
          </Link>
        </div>
      </div>
    )
  );
}

export default observer(Edit);
