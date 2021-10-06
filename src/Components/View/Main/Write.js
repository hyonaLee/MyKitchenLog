import styled from 'styled-components';
import axios from "axios"
import {Link} from 'react-router-dom';
import React, { useState , useEffect, useRef } from 'react';

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


    // axios 라이브러리 data받아오기
    // 성공시 then / 실패시 catch 실행
    //   const [BlogData, setBlogData] = useState('');

    //   useEffect(() => {
    //     getData()
    //   }, []);

    //   const getData = () => {
    //       axios
    //       .get("http://localhost:3001/posts")
    
    //       .then((response) => {
    //         console.log("받은데이터", response.data);
    
    //         const myData = response.data;
    //         console.log(myData);
    //         console.log(myData[0].title);
    //         console.log(myData[1]);
    
    //         setBlogData(myData);
    //       })
    //       .catch(console.log("에러 데이터를 못받음"));
    //   };
    //   console.log("get확인", BlogData)

    // input data보내기
      const postData = () => {
        axios
        .post("http://localhost:3001/posts", {
            "id":5,
            "title": {title},
            "body": {contents}
          })
          .then(function (response) {
            console.log("post성공",response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    console.log("post시도")


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