import React from 'react';
import styled from 'styled-components';

function Logo() {
    return (
        <LogoDiv>
            <h1>My Kitchen Blog</h1>
        </LogoDiv>
    );
}

const LogoDiv = styled.div`
padding : 0px 10px 0px 10px;
display: flex;
`;

export default Logo;