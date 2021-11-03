import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import store from "../../../Store/store";
import { observer } from "mobx-react";

function Edit() {
  // (GET) serer로부터 data 불러오기
  useEffect(() => {
    store.LoadData();
  }, []);
  // console.log(store.getBlogData)

  // Click한 ID정보 받아오기
  const currentid = Number(useParams().id);
  // console.log("클릭한 게시물의 ID는", currentid);
  const postFilter = store.getBlogData.filter((value) => {
    // console.log("postFilter: ", value);
    return value.id === Number(currentid);
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
  const [currentURL, setCurrentURL] = useState();
  const currentTitle = postFilter.length !== 0 && postFilter[0].title;
  const currentTag = postFilter.length !== 0 && postFilter[0].tag;
  const currentContents = postFilter.length !== 0 && postFilter[0].contents;
  const [modititle, setModititle] = useState(currentTitle);
  const [moditag, setModitag] = useState(currentTag);
  const [modicontents, setModicontents] = useState(currentContents);
  const [modiURL, setModiURL] = useState(currentURL);

  // user가 작성한 input 받아오기
  const EditTitle = (event) => {
    setModititle(event.target.value);
  };
  const EditTag = (event) => {
    setModitag(event.target.value);
  };
  const EditContents = (event) => {
    setModicontents(event.target.value);
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

  // 해시태그 기능
  const [tagList, setTagList] = useState([]);
  const Keypress = (e) => {
    if (e.key === "Enter" || e.code === "Space") {
      setTagList((tagList) => [...tagList, moditag]);
      setModitag("");
      e.preventDefault();
    }
    console.log("태그리스트", tagList);
  };

  // (PUT/PATCH) server로 data 수정 요청
  const modifiyData = () => {
    const mappingData = {
      date: editTime,
      title: modititle === false ? currentTitle : modititle,
      tag: tagList.length === 0 ? currentTag : tagList,
      contents: modicontents === false ? currentContents : modicontents,
      imgURL: modiURL === undefined ? currentURL : modiURL,
    };
    store.EditData(currentid, mappingData);
  };

  return (
    postFilter.length !== 0 && (
      // 수정
      <WriteDiv>
        <Title name="title" onChange={EditTitle}>
          {currentTitle}
        </Title>
        <TagDiv>
          <Tag name="tag" onChange={EditTag} onKeyPress={Keypress}>
            {moditag === false ? currentTag : moditag}
          </Tag>
          <TagListDiv>
            {tagList.length !== 0 &&
              tagList.map((v, i) => {
                return <span className="hash">#{tagList[i]} </span>;
              })}
          </TagListDiv>
        </TagDiv>
        <Contents name="contents" onChange={EditContents}>
          {currentContents}
        </Contents>
        <BtnDiv>
          <img src={loadfile} alt="Blob URL" width="100px" />
          <input type="file" accept="image/*" onChange={EditURL} />
          <Link to="/">
            <CreateBtn onClick={modifiyData}>Post</CreateBtn>
          </Link>
        </BtnDiv>
      </WriteDiv>
    )
  );
}

const WriteDiv = styled.div`
  width: 100%;
  height: 640px;
  position: relative;
  top: 80px;
  background-color: ivory;
  color: black;
  display: flex;
  flex-direction: column;
`;
const CreateBtn = styled.button`
  border-radius: 14px;
  background-color: orange;
  color: white;
  border: none;
  height: 30px;
  width: 65px;
  font-size: 24px;
  line-height: 20px;
  padding: 0px 10px 0px 10px;
  margin-right: 50px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Title = styled.textarea`
  width: 80%;
  padding: 20px;
  margin: auto;
  margin-top: 30px;
  height: 95px;
  border: none;
  font-size: 25px;
  background-color: ivory;
`;
const Tag = styled.textarea`
  width: 80%;
  padding: 20px;
  margin: auto;
  margin-top: 30px;
  height: 35px;
  border: none;
  font-size: 25px;
  background-color: ivory;
`;
const Contents = styled.textarea`
  width: 80%;
  padding: 20px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  height: 600px;
  border: none;
  font-size: 25px;
  background-color: ivory;
`;
const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const TagListDiv = styled.div`
  text-align: center;
`;
const BtnDiv = styled.div`
  text-align: right;
`;

export default observer(Edit);
