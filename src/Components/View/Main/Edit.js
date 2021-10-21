import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import useLoad from "../../Hooks/useLoad";

// 미완성.
// 재료부분 해쉬로 추가 기능.
// 수정버튼 눌른후 아무작업안하고 post 누르면 다 날아가는 오류.

function Edit() {
// (GET) serer로부터 data 불러오기
  const blogData = useLoad()
// Click한 ID정보 받아오기
  const currentid = Number(useParams().id);
  // console.log("클릭한 게시물의 ID는", currentid);
  const postFilter = blogData.filter((value) => {
    // console.log("postFilter: ", value);
    return value.id === Number(currentid);
  });
  // console.log("postFilter", postFilter);

// 날짜정보얻기
  const currentDate = new Date();
  const cYear = currentDate.getFullYear();
  const cMonth = currentDate.getMonth() + 1;
  const cDate = currentDate.getDate();
  const cHour = currentDate.getHours();
  const cMin = currentDate.getMinutes();
  const editTime = `${cYear}년 ${cMonth}월 ${cDate}일 ${cHour}시 ${cMin}분`;

// Post 수정하기
  const currentTitle = postFilter.length !== 0 && postFilter[0].title;
  const currentContents = postFilter.length !== 0 && postFilter[0].contents;
  const [modititle, setModititle] = useState(currentTitle);
  const [modicontents, setModicontents] = useState(currentContents);
  const EditTitle = (event) => {
    setModititle(event.target.value);
  };
  const EditContents = (event) => {
    setModicontents(event.target.value);
  };
  // console.log(currentTitle);
  // console.log(currentContents);
  // console.log(modititle);

// (PUT) serer로 data 수정 요청
  const modifiyData = () => {
    axios
      .put(`http://localhost:3001/posts/${currentid}`, {
        date: editTime,
        title: modititle,
        contents: modicontents,
      })
      .then(function (response) {
        console.log("수정성공", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    postFilter.length !== 0 && (
      // 수정
      <WriteDiv>
        <Title name="title" onChange={EditTitle}>
          {currentTitle}
        </Title>
        <Contents name="contents" onChange={EditContents}>
          {currentContents}
        </Contents>
        <BtnDiv>
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
  height: 800px;
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
  height: 50px;
  line-height: 45px;
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
const BtnDiv = styled.div`
  text-align: right;
`;

export default Edit;
