import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import store from "../../../Store/store";
import { observer } from "mobx-react";
import Nav from "../Header/Nav";
import Header from "../Header/Header";

function NewPost() {
  //autofocus
  const onfocus = useRef();
  useEffect(() => {
    if (onfocus.current) {
      onfocus.current.focus();
    }
  }, []);

  // 날짜정보얻기
  const currentDate = new Date();
  const cYear = currentDate.getFullYear();
  const cMonth = currentDate.getMonth() + 1;
  const cDate = currentDate.getDate();
  const cHour = currentDate.getHours();
  const cMin = currentDate.getMinutes();
  const editTime = `${cYear}년 ${cMonth}월 ${cDate}일 ${cHour}시 ${cMin}분`;

  // user가 작성한 input 받아오기
  const [inputs, setInputs] = useState({
    title: "",
    tag: "",
    contents: "",
  });
  const { title, contents, tag } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  // console.log(inputs);

  // 이미지 업로드
  const [loadfile, setLoadfile] = useState();
  const [currentfile, setCurrentfile] = useState();
  const Loadedfile = (e) => {
    setLoadfile(URL.createObjectURL(e.target.files[0]));
    let fileReader = new FileReader();
    // e.preventDefault();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = function (e) {
      setCurrentfile(e.target.result);
      // console.log(e.target.result)
    };
    // console.log(e.target.files[0])
    // console.log(e.target.value)
  };

  // 해시태그 기능
  const [tagList, setTagList] = useState([]);
  const Keypress = (e) => {
    if (e.key === "Enter" || e.code === "Space") {
      setTagList((tagList) => [...tagList, inputs.tag]);
      setInputs({
        ...inputs,
        tag: "",
      });
      e.preventDefault();
    }

    console.log("인풋", inputs.tag);
    console.log("태그리스트", tagList);
  };

  // (POST) serer로 data 생성 요청
  const postData = () => {
    const mappingData = {
      date: editTime,
      title: title,
      tag: tagList,
      contents: contents,
      imgURL: currentfile,
    };
    store.AddData(mappingData);
  };

  return (
    <>
    <Header/>
    <Nav/>
    <div className="EditDiv">
      <textarea
        className="EditTitle"
        name="title"
        value={title}
        type="text"
        placeholder="요리명"
        onChange={onChange}
        ref={onfocus}
      />
      <div className="EditTagDiv">
        <textarea
          className="EditTag"
          name="tag"
          value={tag}
          type="text"
          placeholder="주재료"
          onChange={onChange}
          onKeyPress={Keypress}
        />
        <div className="EditTagShowDiv">
          {tagList.length !== 0 &&
            tagList.map((v, i) => {
              return <span className="hash">#{tagList[i]} </span>;
            })}
        </div>
      </div>
      <textarea
        className="EditContents"
        name="contents"
        value={contents}
        placeholder="내용"
        onChange={onChange}
      />
      <div className="EditBtnDiv">
        <img src={loadfile} alt="Blob URL" width="100px" />
        <input type="file" accept="image/*" onChange={Loadedfile} />
        <Link to="/Main">
          <button className="EditBtn" onClick={postData}>
            Post
          </button>
        </Link>
      </div>
    </div>
    </>
  );
}
export default observer(NewPost);
