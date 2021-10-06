import React from 'react';
import styled from 'styled-components';

function Logo() {
    return (
        <LogoDiv>
            <LogoFont>My Kitchen Blog</LogoFont>
        </LogoDiv>
    );
}

const LogoFont = styled.h1`
font-size: 32px;
@media screen and (max-width: 300px) {
    font-size: 20px;
   }
`;
const LogoDiv = styled.div`
display: flex;
margin-left: 50px;
`;

export default Logo;