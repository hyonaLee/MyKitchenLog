import React from 'react';
import NewPost from './NewPost';
import Detail from './Detail';
import Edit from './Edit';

// 프로필에서 사용 할 데이터
const matchData = {
  newpost: {
    name: 'newpost',
  },
  detail: {
    name: 'detail',
  },
  edit: {
    name: 'edit',
  }
};

const ContentsRoute = ({ match }) => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  const { component } = match.params;
  console.log(match.params)

  const param = matchData[component];
  if (!param) {
    return <div>Error</div>;
  }
  return (
    param.name === "newpost" ? <NewPost/> 
    :
     param.name === "detail" ? <Detail/> 
     :
     param.name === "edit" ? <Edit/>
      : null
  );
};

export default ContentsRoute;
