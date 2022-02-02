import React from 'react';
import NewPost from './NewPost';
import Detail from './Detail';
import Edit from './Edit';
import { useParams } from 'react-router-dom';
import Favorite from './Favorite';


const ContentsRoute = ( {useremail} ) => {

  const param = useParams().component;
  if (!param) {
    return <div>Error</div>;
  }
  return (
    param === "newpost" ? <NewPost useremail={useremail}/> 
    :
     param === "detail" ? <Detail useremail={useremail}/> 
     :
      param === "edit" ? <Edit useremail={useremail}/>
      :
       param === "favorite" ? <Favorite useremail={useremail}/>
       : null
  );
};

export default ContentsRoute;
