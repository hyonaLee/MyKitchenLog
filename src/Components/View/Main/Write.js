import React, { useState , useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios"
import {Link} from 'react-router-dom';

function Write() {
    const [title, setTitle] = useState('');
    const [Content, setContent] = useState('');

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
        console.log(title)
    };
    const onChangeContent = (e) => {
        setContent(e.target.value);
        console.log(Content)
      };



      
      const [BlogData, setBlogData] = useState([]);

      useEffect(() => {
        getData();
        // postData();
      }, []);

      const getData = () => {
          axios
          .get("http://localhost:3001/posts")
          .then((response) => {
            console.log("받은데이터", response.data);
    
            const myData = response.data;
            console.log(myData);
    
            setBlogData(myData);
          })
          .catch(console.log("에러 데이터를 못받음"));
      };
      console.log("get확인", BlogData[6])

      const postData = () => {
        axios
        .post("http://localhost:3001/posts", {
            "id": 9,
            "title": "axiostest9",
            "body": "tes9"
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
                <Title type='text' placeholder='제목을입력하세요.' onChange = {onChangeTitle}/>
                <Contents placeholder='내용을입력하세요.' onChange = {onChangeContent} ></Contents>
            <Link to="/">
            <CreateBtn onClick = {postData} >게시하기</CreateBtn>
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