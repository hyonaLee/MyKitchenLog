import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

function NewPost() {

// 이미지 업로드
  const [loadfile, setLoadfile] = useState();
  const [currentfile, setCurrentfile] = useState();

  const Loadedfile = (e) => {
      setLoadfile(URL.createObjectURL(e.target.files[0]))
      let fileReader = new FileReader();
      // e.preventDefault();
      fileReader.readAsDataURL(e.target.files[0])
      fileReader.onload = function (e) {
        setCurrentfile(e.target.result)
        // console.log(e.target.result)
      }
      // console.log(e.target.files[0])
      // console.log(e.target.value)
    }


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
  console.log(inputs)

  const loadTag = (e) => {

  }

// (POST) serer로 data 생성 요청
  const postData = () => {
    axios
      .post("http://localhost:3001/posts", {
        date: editTime,
        title: title,
        tag: tag,
        contents: contents,
        imgURL: currentfile,
      })
      .then(function (response) {
        console.log("post성공", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

    return (
    <WriteDiv>
      <Title
        name="title"
        value={title}
        type="text"
        placeholder="요리명"
        onChange={onChange}
      />
      <Tag
        name="tag"
        value={tag}
        type="text"
        placeholder="주재료"
        onKeyUp={loadTag}
        onChange={onChange}
      />
      <Contents
        name="contents"
        value={contents}
        placeholder="내용"
        onChange={onChange}
      />
      <BtnDiv>
      <img src={loadfile} alt="Blob URL" width="100px" />
        <input type="file" accept="image/*" onChange={Loadedfile}/>
        <Link to="/">
          <CreateBtn onClick={postData}>Post</CreateBtn>
        </Link>
      </BtnDiv>
    </WriteDiv>
    )
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
  border: none;
  font-size: 25px;
  background-color: ivory;
`;
const Tag = styled.textarea`
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

export default NewPost
