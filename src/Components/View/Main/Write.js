import styled from 'styled-components';
import axios from "axios"
import {Link} from 'react-router-dom';
import React, { useState , useEffect } from 'react';

function Write() {

    // input 받아오기
    const [inputs, setInputs] = useState({
      title: '',
      contents: ''
    });
    const { title, contents } = inputs;
      
    const onChange = e => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      })
    }

    // 날짜정보얻기
    const currentDate = new Date();
    const cYear = currentDate.getFullYear();
    const cMonth = currentDate.getMonth() + 1;
    const cDate = currentDate.getDate();
    const cHour = currentDate.getHours();
    const cMin = currentDate.getMinutes();
    const editTime = `${cYear}년 ${cMonth}월 ${cDate}일 ${cHour} : ${cMin}`
    // console.log(editTime);

    // input data server로 보내기
    const [id,setId] = useState(0)
      const postData = () => {
        axios
        .post("http://localhost:3001/posts", {
            "date": editTime,
            "title": title,
            "contents": contents,
            "id": setId(id+1)
          })
          .then(function (response) {
            console.log("post성공",response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    // console.log("post시도")


      return (
        <WriteDiv>
          <Title name="title" value={title} type='text' placeholder='제목을입력하세요.' onChange = {onChange} />
          <Contents name="contents" value={contents} placeholder='내용을입력하세요.' onChange = {onChange} />
          <Link to="/">
          <CreateBtn onClick={postData}>게시하기</CreateBtn>
          </Link>
        </WriteDiv>
    );
}

const WriteDiv = styled.div`
width: 100%;
height: 800px;
position: relative;
top: 80px;
background-color: pink;
color: black;
display: flex;
flex-direction: column;

`;
const CreateBtn = styled.button`
border-radius: 10px;
border: 1px solid gray;
height: 25px;
width: 95px;
font-size: 14px;
line-height: 20px;
padding: 0px 10px 0px 10px;
margin-right: 20px;
margin-bottom: 10px;
align-self: flex-end;
`;
const Title = styled.input`
width: 80%;
padding: 20px;
margin: auto;
height: 50px;
border: none;
font-size: 25px;
`;
const Contents = styled.textarea`
width: 80%;
padding: 20px;
margin: auto;
height: 600px;
border: none;
font-size: 25px;
`;

export default Write;