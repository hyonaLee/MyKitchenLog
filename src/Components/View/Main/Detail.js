import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Detail() {
    return (
        <>
        <DetailDiv>
              <Link to="/">
            <EditBtn>수정</EditBtn>
              </Link>
            <EditBtn>삭제</EditBtn>
        </DetailDiv>
            
        </>
    );
}


const DetailDiv = styled.div`
display: block;
width: 100%;
height: 800px;
position: relative;
top: 80px;
background-color: pink;
color: black;
`;

const EditBtn = styled.button`
border-radius: 10px;
border: 1px solid gray;
height: 25px;
width: 55px;
font-size: 14px;
line-height: 20px;
padding: 0px 10px 0px 10px;
margin-right: 20px;
`;

export default Detail;