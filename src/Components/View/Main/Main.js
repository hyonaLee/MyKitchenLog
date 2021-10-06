import styled from 'styled-components';
import React, { useState , useEffect } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import '../../../App.css';


const Main = () => {
    const [blogData, setBlogData] = useState([]);
    const [click, setClick] = useState();

      useEffect(() => {
        axios
            .get("http://localhost:3001/posts")
            .then(response => {
            //   console.log("받은데이터", response);
              // console.log("받은데이터", response.data);
              setBlogData(response.data);
            })
            .catch(console.log("에러 데이터를 못받음"));
      }, []);
                console.log(typeof(blogData))
                console.log(blogData)

// function clickDiv () {
  
// console.log(e.target);
// }

      // useEffect(() => {
      //   const crdate = blogData[0].date;
      //     console.log("useState에 잘들어감",blogData[0].date)
      //     console.log(typeof(blogData))
      // }, [blogData]);
      console.log(click)

//MAP활용해서수정하기
//클릭시 from으로 이동
    return (
        <MainDiv>
      {blogData.map(function(value,index){
        return (
          <Link to="Detail">
          <div className="list" key={value.id} >
            <h2 className="listfont">{value.title}</h2>
          </div>
      </Link>
        )
      })}
        </MainDiv>

    );
}

const MainDiv = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 50px 0px;
overflow: hidden;
position: absolute;
padding: 80px 0px;
top: 80px;
width: 100%;
background-color: ivory;
color: black;
@media screen and (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
   }
@media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
   }
@media screen and (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
}
@media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
}
`;

const MainFont = styled.h2`
font-size: 24px;
color: ivory;
`;
const PostDiv = styled.div`
margin: 0;
padding: 25px;
line-height: 40px;
box-sizing: border-box;
display: flex;
width: 250px;
height: 350px;
background-color: orange;
color: black;
margin: auto;
`;

export default Main;