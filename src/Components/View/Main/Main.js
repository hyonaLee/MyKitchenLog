import React from 'react';
import styled from 'styled-components';

function Main() {
    return (
        <HeaderDiv>
            <h2>홈입니다.</h2>
        </HeaderDiv>
    );
}

const HeaderDiv = styled.div`
display: block;
width: 100%;
height: 800px;
position: relative;
top: 80px;
background-color: yellow;
color: black;
`;

export default Main;