import React from 'react';
import NewPost from './NewPost';
import Detail from './Detail';
import Edit from './Edit';
import { useParams } from 'react-router-dom';
import Favorite from './Favorite';
import MyPage from './MyPage';


const ContentsRoute = () => {

  const param = useParams().component;
  if (!param) {
    return <div>Error</div>;
  }
  return (
    param === "newpost" ? <NewPost/> 
    :
     param === "detail" ? <Detail/> 
     :
      param === "edit" ? <Edit/>
      :
       param === "favorite" ? <Favorite/>
       :
        param === "mypage" ? <MyPage/>
        : null
  );
};

export default ContentsRoute;
