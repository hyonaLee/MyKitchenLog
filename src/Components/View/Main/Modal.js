import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Modal() {
    return (
        <BackDiv>
            <ModalDiv>
                <p>삭제하시겠습니까?</p>
                <CxlBtn>취소</CxlBtn>
                <Link to="/">
                <DelBtn>삭제</DelBtn>
                </Link>
            </ModalDiv>
        </BackDiv>
    );
}
const BackDiv = styled.div`
display: block;
width: 100%;
height: 800px;
position: relative;
top: 80px;
background-color: rgba(255, 255, 240, 0.479);
color: black;
z-index: 99;
`;
const ModalDiv = styled.div`
display: block;
width: 250px;
height: 150px;
position: relative;
top: 80px;
border-radius: 20px;
border: gray 1px solid;
background-color: rgba(255, 243, 220, 0.76);
color: black;
padding: 70px 30px 30px 30px;
margin: auto;
text-align: center;
z-index: 100;
`;
const DelBtn = styled.button`
border-radius: 10px;
border: 1px solid gray;
height: 25px;
width: 55px;
font-size: 14px;
font-weight: 700;
line-height: 20px;
padding: 0px 10px 0px 10px;
margin-right: 20px;
background-color: rgba(250, 6, 6, 0.568);
`;

const CxlBtn = styled.button`
border-radius: 10px;
border: 1px solid gray;
height: 25px;
width: 55px;
font-size: 14px;
font-weight: 500;
line-height: 20px;
padding: 0px 10px 0px 10px;
margin-right: 20px;
background-color: (168, 164, 164, 0.637);
`;
export default Modal;