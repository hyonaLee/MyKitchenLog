import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

// 미완성.
// INPUT에 VALUE값 넣기
// 재료부분 해쉬로 추가 기능

function Edit() {
  const [blogData, setBlogData] = useState([]);
  const currentid = Number(useParams().id);
  console.log("클릭한 게시물의 ID는", currentid);

  const postFilter = blogData.filter((value) => {
    // console.log("postFilter: ", value);
    return value.id === Number(currentid);
  });
  console.log("postFilter", postFilter);

  // user가 작성한 input 받아오기
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });
  const { title, contents } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 날짜정보얻기
  const currentDate = new Date();
  const cYear = currentDate.getFullYear();
  const cMonth = currentDate.getMonth() + 1;
  const cDate = currentDate.getDate();
  const cHour = currentDate.getHours();
  const cMin = currentDate.getMinutes();
  const editTime = `${cYear}년 ${cMonth}월 ${cDate}일 ${cHour}시 ${cMin}분`;

  // server에서 정보 받아오기
  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((response) => {
        setBlogData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //input data server로 수정요청
  const modifiyData = () => {
    axios
      .put(`http://localhost:3001/posts/${currentid}`, {
        date: editTime,
        title: title,
        contents: contents,
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
        <Title name="title" value={title} type="text" onChange={onChange} />
        <Contents name="contents" onChange={onChange}>
          여기에 나타나야하는데
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
const Title = styled.input`
  width: 80%;
  padding: 20px;
  margin: auto;
  margin-top: 30px;
  height: 50px;
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
