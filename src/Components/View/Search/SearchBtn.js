import React, { useState } from "react";
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
      <div className="ModalBackDiv">
        <div className="ModalDiv">
          <input
            className="CxlBtn2"
            type="button"
            value="X"
            onClick={() => {
              changeModal(!modal);
            }}
          />
          <p>해시태그로 검색</p>
          <input className="SearchBox" type="search" placeholder="검색" onBlur={GetValue}></input>
          <input className="GosearchBtn"
            type="button"
            value="검색"
            onClick={() => {
              changeModal(!modal);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {modal === true ? <Modal /> : null}
      <button className="SearchBtn"
        onClick={() => {
          changeModal(!modal);
        }}
      >
        <FaSistrix />
      </button>
    </>
  );
}