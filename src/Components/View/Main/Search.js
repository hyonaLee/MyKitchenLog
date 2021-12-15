import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search({ searchword, setSearchword }) {

    // 검색어 받아오기
    const GetValue = (e) => {
        e.preventDefault();
        setSearchword(e.target.value);
      };

    // modal 상태관리
    const [Search, onSearch] = useState(false);
    
      return (
        <div className="SearchBackDiv">
          <div className="SearchDiv">
            <input
              className="SearchBox"
              type="search"
              placeholder="Search"
              onBlur={GetValue}
            ></input>
            <button
              className="GosearchBtn"
              onClick={() => {
                onSearch(!Search);
              }}
            ><FaSearch /></button>
          </div>
        </div>
      );
}

