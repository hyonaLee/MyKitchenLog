import React, { useState , useEffect } from 'react';
import styled from 'styled-components';

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



      return (
        <WriteDiv>
                <Title type='text' placeholder='제목을입력하세요.' onChange = {onChangeTitle}/>
                <Contents placeholder='내용을입력하세요.' onChange = {onChangeContent} ></Contents>
            <CreateBtn>게시하기</CreateBtn>
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