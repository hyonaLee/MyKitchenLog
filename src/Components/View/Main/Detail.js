import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Detail() {
  let [modal, changeModal] = useState(false);

  function Modal() {
    return (
        <BackDiv>
            <ModalDiv>
                <p>삭제하시겠습니까?</p>
                <CxlBtn onClick={ ()=>{changeModal(!modal)} }>취소</CxlBtn>
                <Link to="/">
                <DelBtn>삭제</DelBtn>
                </Link>
            </ModalDiv>
        </BackDiv>
    );
  }


    return (

        <>
          <DetailDiv>
            <TitelFont> 제목 </TitelFont>
            <DateFont> 작성일 </DateFont>
              <BtnDiv>
                <Link to="Write">
              <EditBtn>수정</EditBtn>
                </Link>
              <EditBtn onClick={ ()=>{changeModal(!modal)} }>삭제</EditBtn>
              </BtnDiv>
              <ContentDiv>
              <ContentFont> 내용 </ContentFont>
              </ContentDiv>
              {
      modal === true ?
      <Modal/>
      : null
      }
          </DetailDiv>
        </>
    );
}

const TitelFont = styled.h1`
font-size: 60px;
`;
const DateFont = styled.h4`
font-size: 20px;
padding-left: 30px;
`;
const ContentFont = styled.p`
font-size: 40px;
`;
const BtnDiv = styled.div`
float: right;
`;
const ContentDiv = styled.div`
padding: 90px 30px;
`;
const DetailDiv = styled.div`
display: block;
position: relative;
top: 80px;
color: black;
padding: 200px 250px;
@media screen and (max-width: 1600px) {
  padding: 150px 150px;
   }
@media screen and (max-width: 1200px) {
  padding: 100px 100px;
   }
@media screen and (max-width: 870px) {
  padding: 40px 70px;
}
@media screen and (max-width: 600px) {
  padding: 30px 50px;
}
`;

const EditBtn = styled.button`
border-radius: 10px;
background-color: ivory;
border: none;
height: 25px;
width: 55px;
font-size: 14px;
line-height: 20px;
padding: 0px 10px 0px 10px;
margin-right: 20px;
:hover{
  cursor: pointer;
  text-decoration: underline;
}
`;
const BackDiv = styled.div`
display: block;
width: 100vw;
height: 100vh;
position: absolute;
top:-80px;
left: 0;
background-color: rgba(99, 99, 99, 0.466);
color: black;
z-index: 100;
`;
const ModalDiv = styled.div`
display: block;
width: 250px;
height: 100px;
position: relative;
top: 250px;
border-radius: 20px;
border: none;
background-color: rgba(255, 243, 220, 0.76);
color: black;
padding: 40px 30px 30px 30px;
margin: auto;
text-align: center;
z-index: 100;
`;
const DelBtn = styled.button`
border-radius: 10px;
border: none;
height: 28px;
width: 55px;
font-size: 14px;
font-weight: 700;
line-height: 30px;
padding: 0px 10px 0px 10px;
margin-right: 20px;
background-color: rgba(250, 6, 6, 0.568);
color: ivory;
cursor: pointer;
`;

const CxlBtn = styled.button`
border-radius: 10px;
border: none;
height: 28px;
width: 55px;
font-size: 14px;
font-weight: 500;
line-height: 30px;
padding: 0px 10px 0px 10px;
margin-right: 20px;
background-color: (168, 164, 164, 0.637);
color: ivory;
cursor: pointer;
`;

export default Detail;


