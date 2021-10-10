import styled from 'styled-components';
import axios from "axios"
import {Link} from 'react-router-dom';
import React, { useState , useEffect } from 'react';

function Write({currentid}) {
  console.log('받은 아이디 값',currentid);

// 미완성.
// 상태 확인하여 버튼 post / modifiy 바꾸기
// 수정버튼타고 온 경우 value값 넣기


  // 사용자가 작성한 input 받아오기
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

  // 날짜정보얻기
  const currentDate = new Date();
  const cYear = currentDate.getFullYear();
  const cMonth = currentDate.getMonth() + 1;
  const cDate = currentDate.getDate();
  const cHour = currentDate.getHours();
  const cMin = currentDate.getMinutes() < 10 ? "0"+currentDate.getMinutes() : currentDate.getMinutes();
  const editTime = `${cYear}년 ${cMonth}월 ${cDate}일 ${cHour}시 ${cMin}분`

    // server에서 정보 받아오기
    // useEffect(() => {
    //   axios
    //       .get("http://localhost:3001/posts")
    //       .then(response => {
          //   console.log("받은데이터", response);
          // console.log("받은데이터", response.data);
          //   setBlogData(response.data);
          // })
          // .catch(console.log("에러 데이터를 못받음"));
    // }, []);
              // console.log(typeof(blogData))

    // 수정버튼타고 온 경우 data뿌려주기
    // const [blogData, setBlogData] = useState([]);
    // function modifiy () {
    //   if (currentid !== undefined) {
    //     blogData.map(v => {
    //       return titleValue =  v.title[currentid-1]
    //   }}
    // }
            
  // input data server로 보내기
  const [id,setId] = useState(0)
  const postData = () => {
    axios
      .post("http://localhost:3001/posts", {
        "date": editTime,
        "title": title,
        "contents": contents,
        "id": setId(id+1)
      })
      .then(function (response) {
      console.log("post성공",response);
      })
      .catch(function (error) {
      console.log(error);
      });
  };

    //input data server로 수정요청
    //   const modifiyData = () => {
    //     axios
    //     .put("http://localhost:3001/posts", {
    //         "date": editTime,
    //         "title": title,
    //         "contents": contents,
    //         "id": currentid
    //       })
    //       .then(function (response) {
    //         console.log("수정성공",response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // };
    // console.log("post시도")

      return (
        <WriteDiv>
          <Title name="title" value={title} type='text' placeholder='제목을입력하세요.' onChange = {onChange} />
          <Contents name="contents" value={contents} placeholder='내용을입력하세요.' onChange = {onChange} />
          <BtnDiv>
          <Link to="/">
          <CreateBtn onClick={postData}>Post</CreateBtn>
          </Link>
          </BtnDiv>
        </WriteDiv>
    );
}

const WriteDiv = styled.div`
width: 100%;
height: 800px;
position: relative;
top: 80px;
background-color: ivory;
color: black;
display: flex;
flex-direction: column;

`;
const CreateBtn = styled.button`
border-radius: 14px;
background-color: orange;
color: white;
border: none;
height: 30px;
width: 65px;
font-size: 24px;
line-height: 20px;
padding: 0px 10px 0px 10px;
margin-right: 50px;
margin-bottom: 10px;
cursor: pointer;
`;
const Title = styled.input`
width: 80%;
padding: 20px;
margin: auto;
margin-top: 30px;
height: 50px;
border: none;
font-size: 25px;
background-color: ivory;
`;
const Contents = styled.textarea`
width: 80%;
padding: 20px;
margin: auto;
margin-top: 30px;
margin-bottom: 30px;
height: 600px;
border: none;
font-size: 25px;
background-color: ivory;
`;
const BtnDiv = styled.div`
text-align: right;
`;

export default Write;