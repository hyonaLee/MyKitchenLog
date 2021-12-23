import React from 'react';
import NewPost from './NewPost';
import Detail from './Detail';
import Edit from './Edit';
import { useParams } from 'react-router-dom';

// // 프로필에서 사용 할 데이터
// const matchData = {
//   newpost: {
//     name: 'newpost',
//   },
//   detail: {
//     name: 'detail',
//   },
//   edit: {
//     name: 'edit',
//   }
// };

const ContentsRoute = () => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  // const { components } = match.params;
  // const { components } = useParams();
  // console.log(useParams().component)

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
      : null
  );
};

export default ContentsRoute;
