import React, { useState } from "react";
import styled from "styled-components";
import { FaSistrix } from "react-icons/fa";

export default function SearchBtn({searchword,setSearchword}) {

  // 검색어 받아오기
  const GetValue = (e) => {
    e.preventDefault();
    setSearchword(e.target.value)
  }
  // modal 상태관리
  const [modal, changeModal] = useState(false);
  function Modal() {
    return (
      <BackDiv>
        <ModalDiv>
          <ModalBtn
            type="button"
            value="X"
            onClick={() => {
              changeModal(!modal);
            }}
          />
          <p>해시태그로 검색</p>
          <SearchBox type="search" placeholder="검색" onBlur={GetValue}></SearchBox>
          <GoSearchBtn
            type="button"
            value="검색"
            onClick={() => {
              changeModal(!modal);
            }}
          />
        </ModalDiv>
      </BackDiv>
    );
  }

  return (
    <>
      <Btn
        onClick={() => {
          changeModal(!modal);
        }}
      >
        <FaSistrix />
      </Btn>
      {modal === true ? <Modal /> : null}
    </>
  );
}

const SearchBox = styled.input`
  width: 70%;
  padding: 20px;
  margin: auto;
  margin-top: 20px;
  height: 35px;
  border: none;
  font-size: 25px;
  background-color: ivory;
`;
const Btn = styled.button`
  border: none;
  border-radius: 50%;
  background-color: ivory;
  height: 50px;
  width: 50px;
  cursor: pointer;
  position: fixed;
  color: ivory;
  bottom: 10px;
  right: 10px;
  font-size: 30px;
`;

// Modal Style
const BackDiv = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: -80px;
  left: 0;
  background-color: rgba(99, 99, 99, 0.466);
  color: black;
  z-index: 100;
`;
const ModalDiv = styled.div`
  display: block;
  width: 250px;
  height: 150px;
  position: relative;
  top: 250px;
  border-radius: 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.801);
  color: black;
  padding: 40px 30px 30px 30px;
  margin: auto;
  text-align: center;
  z-index: 100;
`;
const GoSearchBtn = styled.input`
  border: none;
  border-radius: 10%;
  height: 30px;
  width: 50px;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  padding: 0px 10px 0px 10px;
  color: orange;
  cursor: pointer;
  background: none;
  position: absolute;
  bottom: 20px;
  right: 0px;
`;
const ModalBtn = styled.input`
  border: none;
  border-radius: 10%;
  height: 30px;
  width: 50px;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  padding: 0px 10px 0px 10px;
  color: orange;
  cursor: pointer;
  background: none;
  position: absolute;
  top: 10px;
  right: 0px;
`;
