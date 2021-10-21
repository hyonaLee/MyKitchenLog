import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../../App.css";
import useLoad from "../../Hooks/useLoad";

const Main = () => {
// (GET) serer로부터 data 불러오기
  const blogData = useLoad()

  return (
    <MainDiv>
      {blogData.map((blogData) => {
        return (
          <Link to={`Detail/${blogData.id}`}>
            <div className="list" key={blogData.id}>
             {/* <img src={require('../Main/coffe.jpg')}/> */}
              <h2 className="listfont">My Kitchen 레시피 - {blogData.title}</h2>
            </div>
          </Link>
        );
      })}
    </MainDiv>
  );
};

const MainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px 0px;
  overflow: hidden;
  position: absolute;
  padding: 50px 0px;
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

export default Main;